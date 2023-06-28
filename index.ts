/*
 * @japa/assert
 *
 * (c) Japa.dev
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import './src/types/extended.js'

import type { PluginFn } from '@japa/runner/types'
import { Test, TestContext } from '@japa/runner/core'
import type { PluginConfig } from './src/types/main.js'
import { Assert } from './src/assert/main.js'

/**
 * Plugin for "@japa/runner"
 */
export function assert(options?: PluginConfig): PluginFn {
  if (options?.openApi) {
    Assert.registerApiSpecs(options.openApi.schemas, {
      exportCoverage: options.openApi.exportCoverage,
      reportCoverage: options.openApi.reportCoverage,
    })
  }

  return function () {
    TestContext.getter('assert', () => new Assert(), true)
    Test.executed(function (test: Test<any>, hasError) {
      if (!hasError) {
        test.context?.assert.assertions.validate()
      }
    })
  }
}
