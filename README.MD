# My implementation for Hexlet pair and list functions
Demonstrates growing abstarction layers from pair to lists.

It's training project on ES-2016, which I made by [Hexlet](https://ru.hexlet.io/?ref=161019) cources.
All right reserved by Hexlet(c)

## l

List constructor

*Parameters*

+ elements: ...any

*Examples*

```
l(); // () - empty list
l(8, 10); // (8, 10)
```

## cons

Add element to list

*Parameters*

+ element: any
* list: List

*Examples*
```
cons(5, l(1, 0)); // (5, 1, 0)
```

## head

Get list's head

*Parameters*

+ list: List

*Examples*
```
head(l(10, 15, 20)); // 10
```

## tail

Get list's tail

*Parameters*

+ list: List

*Examples*
```
tail(l(10, 15, 20)); // (15, 20)
```

## isEmpty

Check if list is empty

*Parameters*

+ list: List

*Examples*
```
isEmpty(l()); // true
isEmpty(l(0)); // false
isEmpty(l('a', 5)); // false
```

## isList - not yet

Check if argument is list

*Parameters*

+ mix: any

*Examples*
```
isList(l()); // true
isList(l('a', 5)); // true
isList(false); // false
isList('hello'); // false
```

## length

Length of list

*Parameters*

+ list: List

*Examples*
```
```

## has

Check if list has some element

*Parameters*

+ list: List
+ element: Any

*Examples*
```
const numbers = l(3, 4, 5, 8);
has(numbers, 3); // true
has(numbers, 8); // true
has(numbers, 0); // false
has(numbers, 'wow'); // false
```

## get

Get element from list by index

*Parameters*

+ index: number
+ list: List

*Examples*
```
const numbers = l(3, 4, 5, 8);
get(0, numbers); // 3
get(3, numbers); // 8
get(4, numbers); // undefined
```

## concat

Concat two lists

*Parameters*

+ list1: List
+ list2: List

*Examples*
```
```

## random

Randomize elements of list and return it as new list

*Parameters*

+ list: List

*Examples*
```
```

## map - not yet

## filter - not tested

Filter list

*Parameters*

+ func: function (value: U): boolean
+ list: List<U>

*Examples*
```
const numbers = l(3, 4, 5, 8);
filter(n => n % 2 === 0, numbers); // (4, 8)
```

## reduce - not tested

Reduce list

*Parameters*

+ func
+ acc
+ list: List

*Examples*
```
const numbers = l(3, 4, 5, 8);
reduce((n, acc) => acc + 1, 0, numbers); // 4
```

## reverse

Reverse list

*Parameters*

+ list: List

*Examples*
```
reverse(l()); // ()
reverse(l(8, 2, 10)); // (10, 2, 8)
```

## toString

Convert list to string

*Parameters*

+ list: List

*Examples*
```
toString(l()); // ()
toString(l('hello', 'world')); // ('hello', 'world')
```

