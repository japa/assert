/*
 * @japa/assert
 *
 * (c) Japa.dev
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { assert } from 'chai'

/**
 * Unnecessary similar methods have been removed
 */
export type ChaiAssert = { [K in keyof typeof assert]: (typeof assert)[K] }

/**
 * Assert contract
 */
export type AssertContract = Omit<
  ChaiAssert,
  | 'deepStrictEqual'
  | 'nestedInclude'
  | 'notNestedInclude'
  | 'deepNestedInclude'
  | 'notDeepNestedInclude'
  | 'ifError'
  | 'changes'
  | 'changesBy'
  | 'doesNotChange'
  | 'changesButNotBy'
  | 'increases'
  | 'increasesBy'
  | 'doesNotIncrease'
  | 'increasesButNotBy'
  | 'decreases'
  | 'decreasesBy'
  | 'doesNotDecrease'
  | 'doesNotDecreaseBy'
  | 'decreasesButNotBy'
  | 'extensible'
  | 'isExtensible'
  | 'notExtensible'
  | 'isNotExtensible'
  | 'deepProperty'
  | 'notDeepProperty'
  | 'nestedProperty'
  | 'nestedPropertyVal'
  | 'notNestedProperty'
  | 'notNestedPropertyVal'
  | 'deepNestedProperty'
  | 'notDeepNestedProperty'
  | 'deepNestedPropertyVal'
  | 'notDeepNestedPropertyVal'
  | 'hasAnyKeys'
  | 'hasAllKeys'
  | 'containsAllKeys'
  | 'doesNotHaveAnyKeys'
  | 'doesNotHaveAllKeys'
  | 'throw'
  | 'Throw'
  | 'doesNotThrow'
  | 'hasAnyDeepKeys'
  | 'hasAllDeepKeys'
  | 'containsAllDeepKeys'
  | 'doesNotHaveAnyDeepKeys'
  | 'doesNotHaveAllDeepKeys'
  | 'closeTo'
  | 'operator'
  | 'oneOf'
  | 'ownInclude'
  | 'notOwnInclude'
  | 'deepOwnInclude'
  | 'notDeepOwnInclude'
>

export type PluginConfig = {
  openApi?: {
    schemas: (string | URL)[]
    reportCoverage?: boolean
    exportCoverage?: boolean
  }
}
