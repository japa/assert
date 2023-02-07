/*
 * @japa/assert
 *
 * (c) Japa.dev
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import test from 'japa'
import { join } from 'path'
import { Assert } from '../../src/assert/main'
import { expectError } from '../../test_helpers'

Assert.registerApiSpecs([join(__dirname, '..', '..', 'api-spec.json')])

test.group('assert | open api', () => {
  test('pass when response confirms to the api spec', () => {
    const assert = new Assert()
    assert.isValidApiResponse({
      path: '/v2/pet/1',
      method: 'get',
      status: 200,
      body: {
        name: 'Pet 1',
        photoUrls: ['/a', 'b'],
      },
      headers: {},
    })
  })

  test('fail when response does not confirms to the api spec', () => {
    const assert = new Assert()

    expectError(() => {
      assert.isValidApiResponse({
        path: '/v2/pet/1',
        method: 'get',
        status: 200,
        body: {},
        headers: {},
      })
    }, 'expected response to match API schema')
  })

  test('validate error messages response', () => {
    const assert = new Assert()

    assert.isValidApiResponse({
      path: '/v2/pet/1',
      method: 'get',
      status: 400,
      body: {
        message: 'Invalid id',
      },
      headers: {},
    })
  })

  test('fail when response status code is not in the spec', () => {
    const assert = new Assert()

    expectError(() => {
      assert.isValidApiResponse({
        path: '/v2/pet/1',
        method: 'get',
        status: 401,
        body: {},
        headers: {},
      })
    }, 'schema not found for {"path":"/v2/pet/1","method":"get","status":401}')
  })

  test('fail when endpoint is not in the spec', () => {
    const assert = new Assert()

    expectError(() => {
      assert.isValidApiResponse({
        path: '/v2/pets/1',
        method: 'get',
        status: 200,
        body: {},
        headers: {},
      })
    }, 'schema not found for {"path":"/v2/pets/1","method":"get","status":200}')
  })

  test('fail when response headers mis-match', () => {
    const assert = new Assert()

    expectError(() => {
      assert.isValidApiResponse({
        path: '/v2/user/login',
        method: 'get',
        status: 200,
        body: 'dads',
        headers: {
          'x-rate-limit': 'abc',
        },
      })
    }, 'expected response to match API schema')
  })
})
