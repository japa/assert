/*
 * @japa/assert
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import type { PluginFn } from '@japa/runner'

import { Assert } from './src/Assert'
import { PluginConfig } from './src/Contracts'

export * from './src/Contracts'
export { Assert }

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

  return function (_, __, { TestContext, Test }) {
    TestContext.getter('assert', () => new Assert(), true)
    Test.dispose(function (test, hasError) {
      if (!hasError) {
        test.context.assert.assertions.validate()
      }
    })
  }
}

declare module '@japa/runner' {
  interface TestContext {
    assert: Assert
  }
}
