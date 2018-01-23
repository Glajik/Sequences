//import { car, cdr, cons as consPair } from '../src/pairs'; // eslint-disable-line
import { l, toString as listToString } from '../src/pairs-data'; // eslint-disable-line
import { has, reverse, concat, length, get, random } from '../src/lists';

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

  it('#length', () => {
		const list1 = l();
		const list2 = l(1);
    const list3 = l(3, 2);
    const list4 = l(3, 2, 1, 8, 10);
    const list5 = l(3, null, undefined, 8);

    expect(length(list1)).toBe(0);
    expect(length(list2)).toBe(1);
    expect(length(list3)).toBe(2);
    expect(length(list4)).toBe(5);
    expect(length(list5)).toBe(4);
  });

  it('#get', () => {
		const list1 = l();
		const list2 = l(1);
    const list3 = l(3, 2, 1, 8, 10);

    expect(get(0, list1)).toBe(undefined);
    expect(get(0, list2)).toBe(1);
    expect(get(0, list3)).toBe(3);
    expect(get(1, list3)).toBe(2);
    expect(get(4, list3)).toBe(10);
    expect(get(5, list3)).toBe(undefined);
  });

  it('#random', () => {
		const list1 = l();
		const list2 = l(1);
    const list3 = l(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

    expect(random(list1)).toBe(undefined);
    expect(random(list2)).toBe(1);
    for (let i = 0; i < 20; i++) random(list3);
  });


});
