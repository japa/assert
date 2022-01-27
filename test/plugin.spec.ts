/*
 * @japa/assert
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import test from 'japa'
import { Test, TestContext, Emitter, Refiner } from '@japa/core'
import { assert, Assert } from '../index'

test.group('Plugin', () => {
  test('add assert property to test context', (japaAssert) => {
    assert()(TestContext, Test)

    japaAssert.isTrue(TestContext.hasGetter('assert'))
    japaAssert.instanceOf(new TestContext()['assert'], Assert)
  })

  test('validate planned assertions', async (japaAssert, done) => {
    let testsCount = 0
    assert()(TestContext, Test)

    const getContext = () => new TestContext()
    const emitter = new Emitter()
    const refiner = new Refiner()

    const testInstance = new Test('test 1', getContext, emitter, refiner)
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
          japaAssert.isTrue(payload.hasError)
          japaAssert.lengthOf(payload.errors, 1)
          japaAssert.equal(payload.errors[0].phase, 'test')
          japaAssert.equal(payload.errors[0].error.message, 'Planned for 1 assertion, but ran 0')
        } else {
          japaAssert.isFalse(payload.hasError)
          done()
        }
      } catch (error) {
        done(error)
      }
    })

    await testInstance.exec()
    await testInstance1.exec()
  })

  test('do not validate assertions when test already has errors', async (japaAssert, done) => {
    let testsCount = 0
    assert()(TestContext, Test)

    const getContext = () => new TestContext()
    const emitter = new Emitter()
    const refiner = new Refiner()

    const testInstance = new Test('test 1', getContext, emitter, refiner)
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
          japaAssert.isTrue(payload.hasError)
          japaAssert.lengthOf(payload.errors, 1)
          japaAssert.equal(payload.errors[0].phase, 'test')
          japaAssert.equal(payload.errors[0].error.message, 'foo')
        } else {
          japaAssert.isFalse(payload.hasError)
          done()
        }
      } catch (error) {
        done(error)
      }
    })

    await testInstance.exec()
    await testInstance1.exec()
  })
})
