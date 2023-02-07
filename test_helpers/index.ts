/*
 * @japa/core
 *
 * (c) Japa.dev
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import chai from 'chai'

/**
 * A modified copy of https://github.com/chaijs/chai/blob/a8359d3d15779a23a7957a4c52539d48de2763e0/test/bootstrap/index.js#L34
 */
export function expectError(fn: any, val?: any) {
  try {
    fn()
  } catch (error) {
    chai.expect(error).to.have.property('stack')

    switch (chai.util['type'](val).toLowerCase()) {
      case 'undefined':
        return
      case 'string':
        return chai.expect(error.message).to.equal(val)
      case 'regexp':
        return chai.expect(error.message).to.match(val)
      case 'object':
        return Object.keys(val).forEach(function (key) {
          chai.expect(error).to.have.property(key).and.to.deep.equal(val[key])
        })
    }

    throw new chai.AssertionError('Invalid val')
  }

  throw new chai.AssertionError('Expected an error')
}

/**
 * Same as exceptError, but for async functions
 */
export async function expectAsyncError(fn: any, val?: any) {
  try {
    await fn()
  } catch (error) {
    chai.expect(error).to.have.property('stack')

    switch (chai.util['type'](val).toLowerCase()) {
      case 'undefined':
        return
      case 'string':
        return chai.expect(error.message).to.equal(val)
      case 'regexp':
        return chai.expect(error.message).to.match(val)
      case 'object':
        return Object.keys(val).forEach(function (key) {
          chai.expect(error).to.have.property(key).and.to.deep.equal(val[key])
        })
    }

    throw new chai.AssertionError('Invalid val')
  }

  throw new chai.AssertionError('Expected an error')
}
