import { test, describe } from 'node:test';
import assert from 'node:assert';
import { dummy } from '../src/utils/dummy.mjs';

test('dummy function', () => {
  assert.strictEqual(dummy(), 1);
})
