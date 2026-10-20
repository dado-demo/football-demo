const test = require('node:test');
const assert = require('node:assert');
const { add } = require('../src/index');

test('add works', () => assert.strictEqual(add(2, 3), 5));