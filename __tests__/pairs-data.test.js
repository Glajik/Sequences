import { car, cdr, cons as consPair } from '../src/pairs'; // eslint-disable-line
import { l, toString as listToString, isEmpty, isEqual, head, tail, cons } from '../src/pairs-data'; // eslint-disable-line

describe('Data', () => {

	it('#head-tail', () => {
		const list = cons(1, cons(2, cons(3, cons(4, null))));
		expect(head(list)).toBe(1);
		expect(head(tail(list))).toBe(2);
		expect(head(tail(tail(list)))).toBe(3);
		expect(head(tail(tail(tail(list))))).toBe(4);
	});


	it('#l', () => {
		const list = l(1, 2, 3, 4);
		expect(head(list)).toBe(1);
		expect(head(tail(list))).toBe(2);
		expect(head(tail(tail(list)))).toBe(3);
		expect(head(tail(tail(tail(list))))).toBe(4);
	});

	it('#isEmpty', () => {
		const list = l(1, 2, 3, 4);
		const empty = l();
		expect(isEmpty(empty)).toBe(true);
		expect(isEmpty(list)).toBe(false);
	});

	it('#listToString', () => {
		const list1 = null;
		const list2 = cons(1, null);
		const list3 = cons(1, cons(2, cons(3, cons(4, null))));
		const list4 = l(1, 2, 3, 4, 5);
		expect(listToString(list1)).toBe('()');
		expect(listToString(list2)).toBe('(1)');
		expect(listToString(list3)).toBe('(1, 2, 3, 4)');
		expect(listToString(list4)).toBe('(1, 2, 3, 4, 5)');
	});
});
