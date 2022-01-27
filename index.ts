/*
 * @japa/assert
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import type { Test as TestContract, TestContext as TestContextContract } from '@japa/core'
import { Assert } from './src/Assert'

export * from './src/Contracts'
export { Assert }

/**
 * Plugin fn to register `assert` with the test context
 */
export function assert() {
  return function (Context: typeof TestContextContract, Test: typeof TestContract) {
    Context.getter('assert', () => new Assert(), true)
    Test.dispose(function (test, hasError) {
      if (!hasError) {
        test.context.assert.assertions.validate()
      }
    })
  }
}
