//import { car, cdr, cons as consPair } from '../pairs'; // eslint-disable-line
import { l, toString as listToString } from '../pairs-data'; // eslint-disable-line
import { has, reverse, concat } from '../list';

describe('Data', () => {
	it('#has', () => {
    const numbers = l(3, 4, 5, 8);
    expect(has(numbers, 3)).toBe(true);
    expect(has(numbers, 8)).toBe(true);
    expect(has(numbers, 0)).toBe(false);
    expect(has(numbers, 7)).toBe(false);
  });

  it('#reverse', () => {
    const numbers = l(3, 4, 5);
    expect(listToString(reverse(numbers))).toBe('(5, 4, 3)');
    expect(listToString(reverse(l()))).toBe('()');
    expect(listToString(reverse(l(1)))).toBe('(1)');
    expect(listToString(reverse(l(1, 2)))).toBe('(2, 1)');
  });

  it('#concat', () => {
    const numbers = l(3, 4, 5, 8);
    const numbers2 = l(3, 2, 9);
    expect(listToString(concat(numbers, numbers2))).toBe('(3, 4, 5, 8, 3, 2, 9)');
    expect(listToString(concat(numbers, l()))).toBe('(3, 4, 5, 8)');
    expect(listToString(concat(l(), numbers2))).toBe('(3, 2, 9)');
  });
});
