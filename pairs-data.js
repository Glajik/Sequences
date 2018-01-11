import { cons as consPair, car, cdr } from './pairs';

export const l = () => {
	console.log(`arguments.length = ${arguments.length}`); // debug
	console.log(`arguments = ${arguments}`); // debug
	const iter = (acc, list) => {
		if (acc === arguments.length) return list;
			console.log(`arguments[${acc}] = ${arguments[acc]}`); // debug
		return iter(acc + 1, consPair(arguments[acc], list));
	}

	if (arguments.length === 0) {
		return consPair(null, null);
	} else {
		return iter(0, consPair(null, null));
	}
		
};

//export const cons => 0;

//export const head => 0;

//export const tail => 0;

export const isEmpty = list => car(list) === null && cdr(list) === null ? true : false;

export const toString