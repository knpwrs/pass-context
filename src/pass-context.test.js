import test from 'ava';
import pc from './pass-context';

test('sanity: is a function', (t) => {
  t.is(typeof pc, 'function');
});

test('basic functionality', (t) => {
  const fn = pc(({ foo }) => foo);
  t.is(fn.call({ foo: 'bar' }), 'bar');
});

test('pass additional arguments', (t) => {
  const fn = pc(({ a }, b, c) => a + b + c);
  t.is(fn.call({ a: 1 }, 2, 3), 6);
});
