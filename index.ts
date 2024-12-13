/*
 * @japa/assert
 *
 * (c) Japa.dev
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import type { PluginFn } from '@japa/runner/types'
import { Test, TestContext } from '@japa/runner/core'

import { Assert } from './src/assert.js'
import type { PluginConfig } from './src/types.js'

declare module '@japa/runner/core' {
  interface TestContext {
    assert: Assert
  }
}

/**
 * Plugin for "@japa/runner"
 */
export function assert(_options?: PluginConfig): PluginFn {
  return function () {
    TestContext.getter('assert', () => new Assert(), true)
    Test.executed(function (test: Test<any>, hasError) {
      if (!hasError) {
        test.context?.assert.assertions.validate()
      }
    })
  }
}

export { Assert }
