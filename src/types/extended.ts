/*
 * @japa/assert
 *
 * (c) Japa.dev
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Assert } from '../assert/main.js'

declare module '@japa/runner/core' {
  interface TestContext {
    assert: Assert
  }
}
