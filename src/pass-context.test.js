import test from 'ava';
import pc from './pass-context';

test('default export', (t) => {
  t.is(pc, 'foo');
});
