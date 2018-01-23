// eslint-disable-next-line
import { l, cons, head, tail, isEmpty, toString as listToString } from './pairs-data';

export const has = (list, element) => {
  // terminate condition
  if (isEmpty(list)) return false;
  // recursive call
  if (head(list) === element) return true;
  else return has(tail(list), element);

  return null;
};

export const reverse = (list) => {
  // itterative function
  const iter = (list, newlist) => {
    if (isEmpty(list)) return newlist;
    return iter(tail(list), cons(head(list), newlist));
  }
  // itterative call
  if(!isEmpty(list)) return iter(list, l());
  else return l();
};

export const concat = (list1, list2) => {
    if (isEmpty(list1)) return list2;
    if (isEmpty(list2)) return list1;
    if (isEmpty(list1) && isEmpty(list2)) return l(); 
    if (isEmpty(tail(list1))) return cons(head(list1), list2);
    else return cons(head(list1), concat(tail(list1), list2));
};

export const length = (list) => {
	if (isEmpty(list)) {
		return 0;
	} else {
		return 1 + length(tail(list));
	}
};

export const get = (index, list) => {
	if (isEmpty(list)) return undefined;

	const iter = (myList, acc) => {
		if (isEmpty(myList)) return undefined;
		if (acc === index) return head(myList);
		return iter(tail(myList), acc + 1);
	}

	return iter(list, 0);
};

export const random = (list) => {
	const count = length(list);
	if (count === 0) return undefined;
	if (count === 1) return head(list);
	const index = Math.round(Math.random() * (count - 1));
	return get(index, list);;
};

export const filter = (f, list) => {
  const iter = (oldlist, newlist) => {
    if (isEmpty(oldlist)) return newlist;
    
    if (f(head(oldlist))) return iter(tail(oldlist), cons(head(oldlist), newlist));
    else return iter(tail(oldlist), newlist);
  };
  
  return reverse(iter(list, l()));
};

export const reduce = (func, acc, items) => {
  if (isEmpty(items)) return acc;

  const newAcc = func(head(items), acc);
  return reduce(func, newAcc, tail(items));
};

