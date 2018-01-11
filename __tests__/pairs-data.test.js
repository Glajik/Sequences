import { car, cdr, cons as consPair } from '../pairs'; // eslint-disable-line
import { l, toString as listToString, isEmpty, isEqual } from '../pairs-data'; // eslint-disable-line

describe('Data', () => {
	it('#isEmpty', () => {
		const testlist = l(1, 2, 3, 4);
		const empty = l();
		expect(isEmpty(empty)).toBe(true);
		expect(isEmpty(testlist)).toBe(false);
	});

	it('#listToString', () => {
		const testlist1 = consPair(null, null);
		const testlist2 = consPair(1, consPair(null, null));
		const testlist3 = consPair(4, consPair(3, consPair(2, consPair(1, consPair(null, null)))));
		expect(listToString(testlist1)).toBe('()');
		expect(listToString(testlist2)).toBe('(1)');
		expect(listToString(testlist3)).toBe('(1, 2, 3, 4)');
	});

	it('#l', () => {
		const pair0 = consPair(null, null);
		const pair1 = consPair(1, pair0);
		const pair2 = consPair(2, pair1);
		const pair3 = consPair(3, pair2);
		const pair4 = consPair(4, pair3);
		const testlist = l(1, 2, 3, 4);
		expect(listToString(pair4) === listToString(testlist)).toBe(true);
	});
});
