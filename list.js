// eslint-disable-next-line
import { l, cons, head, tail, isEmpty, toString as listToString } from './pairs-data';

// BEGIN (write your solution here)
export const has = (list, value) => {
  // terminate condition
  if (isEmpty(list)) return false;

  // recursive call
  if (head(list) === value) return true;
  else return has(tail(list), value);

  return null;
}

export const reverse = (list) => {
  
  // itterative function
  const iter = (list, newlist) => {
  
    if (isEmpty(list)) return newlist;
    
    return iter(tail(list), cons(head(list), newlist));
  }

  // itterative call
  if(!isEmpty(list)) return iter(list, l());
  else return l();

}

export const concat = (list1, list2) => {
    if (isEmpty(list1)) return list2;
    if (isEmpty(list2)) return list1;
    if (isEmpty(list1) && isEmpty(list2)) return l(); 
		console.log(listToString(list1));

    if (isEmpty(tail(list1))) return cons(head(list1), list2);
    else return cons(head(list1), concat(tail(list1), list2));
}
// END