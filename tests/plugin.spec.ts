/*
 * @japa/assert
 *
 * (c) Japa.dev
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { test } from 'node:test'
import { assert as chaiAssert } from 'chai'
import { TestContext, Test, Emitter, Refiner } from '@japa/runner/core'

import { assert } from '../index.js'
import { Assert } from '../src/assert.js'
import { wrapAssertions } from '../tests_helpers/index.js'

test.describe('Plugin', () => {
  test('add assert property to test context', async () => {
    const emitter = new Emitter()

    assert()({
      cliArgs: {},
      config: {} as any,
      emitter: emitter,
      runner: {} as any,
    })

    const refiner = new Refiner()
    const getContext = (t: Test<any>) => new TestContext(t)

    const testInstance = new Test('test 1', getContext, emitter, refiner)
    testInstance.run(async (ctx) => {
      ctx['assert'].plan(1)
    })

    wrapAssertions(() => {
      chaiAssert.isDefined(getContext(testInstance)['assert'])
      chaiAssert.instanceOf(getContext(testInstance)['assert'], Assert)
    })
  })

  test('validate planned assertions', (_, done) => {
    let testsCount = 0
    const emitter = new Emitter()
    const refiner = new Refiner()
    const getContext = (t: Test<any>) => new TestContext(t)

    const testInstance = new Test('test 1', getContext, emitter, refiner)
    testInstance.run(async (ctx) => {
      ctx['assert'].plan(1)
    })

    testInstance.run(async (ctx) => {
      ctx['assert'].plan(1)
    })

    const testInstance1 = new Test('test 1', getContext, emitter, refiner)
    testInstance1.run(async (ctx) => {
      ctx['assert'].plan(1)
      ctx['assert'].isTrue(true)
    })

    emitter.on('test:end', (payload) => {
      testsCount++
      try {
        if (testsCount === 1) {
          chaiAssert.isTrue(payload.hasError)
          chaiAssert.lengthOf(payload.errors, 1)
          chaiAssert.equal(payload.errors[0].phase, 'test')
          chaiAssert.equal(payload.errors[0].error.message, 'Planned for 1 assertion, but ran 0')
        } else {
          chaiAssert.isFalse(payload.hasError)
          done()
        }
      } catch (error) {
        done(error)
      }
    })

    testInstance.exec()
    testInstance1.exec()
  })

  test('do not validate assertions when test already has errors', (_, done) => {
    let testsCount = 0
    const emitter = new Emitter()
    const refiner = new Refiner()
    const getContext = (t: Test<any>) => new TestContext(t)

    const testInstance = new Test('test 1', getContext, emitter, refiner)
    testInstance.run(async (ctx) => {
      ctx['assert'].plan(1)
    })

    chaiAssert.isDefined(getContext(testInstance)['assert'])
    chaiAssert.instanceOf(getContext(testInstance)['assert'], Assert)

    testInstance.run(async (ctx) => {
      ctx['assert'].plan(1)
      throw new Error('foo')
    })

    const testInstance1 = new Test('test 1', getContext, emitter, refiner)
    testInstance1.run(async (ctx) => {
      ctx['assert'].plan(1)
      ctx['assert'].isTrue(true)
    })

    emitter.on('test:end', (payload) => {
      testsCount++
      try {
        if (testsCount === 1) {
          chaiAssert.isTrue(payload.hasError)
          chaiAssert.lengthOf(payload.errors, 1)
          chaiAssert.equal(payload.errors[0].phase, 'test')
          chaiAssert.equal(payload.errors[0].error.message, 'foo')
        } else {
          chaiAssert.isFalse(payload.hasError)
          done()
        }
      } catch (error) {
        done(error)
      }
    })

    testInstance.exec()
    testInstance1.exec()
  })
})
