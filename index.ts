/*
 * @japa/assert
 *
 * (c) Japa.dev
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import type { PluginFn, Test as TestType } from '@japa/runner'
import type { PluginConfig } from './src/types'

import { Assert } from './src/assert/main'

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
    Test.dispose(function (test: TestType<any>, hasError) {
      if (!hasError) {
        test.context.assert.assertions.validate()
      }
    })
  }
}

export * from './src/types'
export { Assert }

declare module '@japa/runner' {
  interface TestContext {
    assert: Assert
  }
}
