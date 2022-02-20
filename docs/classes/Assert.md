[@japa/assert](../README.md) / [Exports](../modules.md) / Assert

# Class: Assert

The Assert class is derived from chai.assert to allow support
for additional assertion methods and assertion planning.

Also some of the methods from chai.assert are not available
and some additional methods have been added.

**`example`**
const assert = new Assert()
assert.deepEqual({ id: 1 }, { id: 1 })

## Hierarchy

- `Macroable`

  ↳ **`Assert`**

## Implements

- `AssertContract`

## Table of contents

### Constructors

- [constructor](Assert.md#constructor)

### Properties

- [Assertion](Assert.md#assertion)
- [AssertionError](Assert.md#assertionerror)
- [assertions](Assert.md#assertions)
- [getters](Assert.md#getters)
- [macros](Assert.md#macros)

### Methods

- [anyProperties](Assert.md#anyproperties)
- [approximately](Assert.md#approximately)
- [assert](Assert.md#assert)
- [closeTo](Assert.md#closeto)
- [containsSubset](Assert.md#containssubset)
- [deepEqual](Assert.md#deepequal)
- [deepInclude](Assert.md#deepinclude)
- [deepPropertyVal](Assert.md#deeppropertyval)
- [doesNotRejects](Assert.md#doesnotrejects)
- [doesNotThrows](Assert.md#doesnotthrows)
- [empty](Assert.md#empty)
- [equal](Assert.md#equal)
- [evaluate](Assert.md#evaluate)
- [exists](Assert.md#exists)
- [fail](Assert.md#fail)
- [frozen](Assert.md#frozen)
- [include](Assert.md#include)
- [includeDeepMembers](Assert.md#includedeepmembers)
- [includeDeepOrderedMembers](Assert.md#includedeeporderedmembers)
- [includeMembers](Assert.md#includemembers)
- [includeOrderedMembers](Assert.md#includeorderedmembers)
- [incrementAssertionsCount](Assert.md#incrementassertionscount)
- [instanceOf](Assert.md#instanceof)
- [isAbove](Assert.md#isabove)
- [isArray](Assert.md#isarray)
- [isAtLeast](Assert.md#isatleast)
- [isAtMost](Assert.md#isatmost)
- [isBelow](Assert.md#isbelow)
- [isBoolean](Assert.md#isboolean)
- [isDefined](Assert.md#isdefined)
- [isEmpty](Assert.md#isempty)
- [isFalse](Assert.md#isfalse)
- [isFinite](Assert.md#isfinite)
- [isFrozen](Assert.md#isfrozen)
- [isFunction](Assert.md#isfunction)
- [isNaN](Assert.md#isnan)
- [isNotArray](Assert.md#isnotarray)
- [isNotBoolean](Assert.md#isnotboolean)
- [isNotEmpty](Assert.md#isnotempty)
- [isNotFalse](Assert.md#isnotfalse)
- [isNotFrozen](Assert.md#isnotfrozen)
- [isNotFunction](Assert.md#isnotfunction)
- [isNotNaN](Assert.md#isnotnan)
- [isNotNull](Assert.md#isnotnull)
- [isNotNumber](Assert.md#isnotnumber)
- [isNotObject](Assert.md#isnotobject)
- [isNotOk](Assert.md#isnotok)
- [isNotSealed](Assert.md#isnotsealed)
- [isNotString](Assert.md#isnotstring)
- [isNotTrue](Assert.md#isnottrue)
- [isNull](Assert.md#isnull)
- [isNumber](Assert.md#isnumber)
- [isObject](Assert.md#isobject)
- [isOk](Assert.md#isok)
- [isSealed](Assert.md#issealed)
- [isString](Assert.md#isstring)
- [isTrue](Assert.md#istrue)
- [isUndefined](Assert.md#isundefined)
- [lengthOf](Assert.md#lengthof)
- [luxonToJSDate](Assert.md#luxontojsdate)
- [match](Assert.md#match)
- [notAllProperties](Assert.md#notallproperties)
- [notAnyProperties](Assert.md#notanyproperties)
- [notContainsSubset](Assert.md#notcontainssubset)
- [notDeepEqual](Assert.md#notdeepequal)
- [notDeepInclude](Assert.md#notdeepinclude)
- [notDeepPropertyVal](Assert.md#notdeeppropertyval)
- [notEmpty](Assert.md#notempty)
- [notEqual](Assert.md#notequal)
- [notExists](Assert.md#notexists)
- [notFrozen](Assert.md#notfrozen)
- [notInclude](Assert.md#notinclude)
- [notIncludeDeepMembers](Assert.md#notincludedeepmembers)
- [notIncludeDeepOrderedMembers](Assert.md#notincludedeeporderedmembers)
- [notIncludeMembers](Assert.md#notincludemembers)
- [notIncludeOrderedMembers](Assert.md#notincludeorderedmembers)
- [notInstanceOf](Assert.md#notinstanceof)
- [notMatch](Assert.md#notmatch)
- [notOk](Assert.md#notok)
- [notProperty](Assert.md#notproperty)
- [notPropertyVal](Assert.md#notpropertyval)
- [notSameDeepMembers](Assert.md#notsamedeepmembers)
- [notSameDeepOrderedMembers](Assert.md#notsamedeeporderedmembers)
- [notSameMembers](Assert.md#notsamemembers)
- [notSameOrderedMembers](Assert.md#notsameorderedmembers)
- [notSealed](Assert.md#notsealed)
- [notStrictEqual](Assert.md#notstrictequal)
- [notTypeOf](Assert.md#nottypeof)
- [ok](Assert.md#ok)
- [onlyProperties](Assert.md#onlyproperties)
- [plan](Assert.md#plan)
- [properties](Assert.md#properties)
- [property](Assert.md#property)
- [propertyVal](Assert.md#propertyval)
- [rejects](Assert.md#rejects)
- [sameDeepMembers](Assert.md#samedeepmembers)
- [sameDeepOrderedMembers](Assert.md#samedeeporderedmembers)
- [sameMembers](Assert.md#samemembers)
- [sameOrderedMembers](Assert.md#sameorderedmembers)
- [sealed](Assert.md#sealed)
- [strictEqual](Assert.md#strictequal)
- [throws](Assert.md#throws)
- [typeOf](Assert.md#typeof)
- [getGetter](Assert.md#getgetter)
- [getMacro](Assert.md#getmacro)
- [getter](Assert.md#getter)
- [hasGetter](Assert.md#hasgetter)
- [hasMacro](Assert.md#hasmacro)
- [hydrate](Assert.md#hydrate)
- [macro](Assert.md#macro)

## Constructors

### constructor

• **new Assert**()

#### Inherited from

Macroable.constructor

#### Defined in

node_modules/macroable/build/index.d.ts:43

## Properties

### Assertion

• **Assertion**: `AssertionStatic` = `Assertion`

#### Defined in

[src/Assert/index.ts:56](https://github.com/japa/assert/blob/0c41da5/src/Assert/index.ts#L56)

___

### AssertionError

• **AssertionError**: typeof `AssertionError` = `AssertionError`

#### Defined in

[src/Assert/index.ts:57](https://github.com/japa/assert/blob/0c41da5/src/Assert/index.ts#L57)

___

### assertions

• **assertions**: `Object`

Tracking assertions

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mismatchError` | ``null`` \| `Error` |
| `planned?` | `number` |
| `total` | `number` |
| `validate` | () => `void` |

#### Defined in

[src/Assert/index.ts:34](https://github.com/japa/assert/blob/0c41da5/src/Assert/index.ts#L34)

___

### getters

▪ `Static` **getters**: `Object` = `{}`

#### Overrides

Macroable.getters

#### Defined in

[src/Assert/index.ts:29](https://github.com/japa/assert/blob/0c41da5/src/Assert/index.ts#L29)

___

### macros

▪ `Static` **macros**: `Object` = `{}`

#### Overrides

Macroable.macros

#### Defined in

[src/Assert/index.ts:28](https://github.com/japa/assert/blob/0c41da5/src/Assert/index.ts#L28)

## Methods

### anyProperties

▸ **anyProperties**(...`args`): `void`

Assert the object has any of the expected properties

**`example`**
assert.anyProperties(
  { username: 'virk', age: 22, id: 1 },
  ['id', 'name', 'dob']
) // passes

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [object: unknown, keys: (string \| Object)[] \| Object, message?: string] |

#### Returns

`void`

#### Defined in

[src/Assert/index.ts:1094](https://github.com/japa/assert/blob/0c41da5/src/Assert/index.ts#L1094)

___

### approximately

▸ **approximately**(...`args`): `void`

Assert the value is equal to the expected value +/- delta range

**`example`**
assert.approximately(10, 6, 8) // passes
assert.approximately(10, 6, 4) // passes
assert.approximately(10, 20, 10) // passes

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [act: number, exp: number, delta: number, message?: string] |

#### Returns

`void`

#### Implementation of

AssertContract.approximately

#### Defined in

[src/Assert/index.ts:1240](https://github.com/japa/assert/blob/0c41da5/src/Assert/index.ts#L1240)

___

