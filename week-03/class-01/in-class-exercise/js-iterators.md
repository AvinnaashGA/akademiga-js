# JavaScript Iterators

## `.forEach() and .filter()`

Write a function named onlyEven that returns evens numbers in an array. Write one version that use forEach and then write another version that uses filter

```javascript
onlyEven([1,2,3,4,5,6,7]) // => [2,4,6]
```

## `.forEach() or .filter()`

- `countIntegers` – counts how many integers there are in an array

```javascript
countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4]) // => 4
```
- Hint: Google how you can check if a number is an integer in JavaScript

## `.map()` oldie but goodie

Write a function `lengths` that accepts a single parameter as an argument, namely
an array of strings. The function should return an array of numbers where each
number is the length of the corresponding string. use `.map`

```javascript
lengths(['my', 'cake', 'pudding']); // => [2,4,7]
```

## `.map()`

- `getSquares` – takes in an array of numbers and returns an array of their squares. If you want more practice write one version using .forEach and then write another version using .map
```javascript
getSquares([1, 2, 3, 4, 5]) // => [1, 4, 9, 16, 25]
```


## `.map(), .filter() & .reduce()`
1. Write an expression using array iterator methods (like filter and reduce)
to compute the total value of the machines in the inventory array.
Use arrow functions.

```javascript
var inventory = [
  {type:   "machine", value: 5000},
  {type:   "machine", value:  650},
  {type:      "duck", value:   10},
  {type: "furniture", value: 1200},
  {type:   "machine", value:   77}
]
```
2. Get an array of all the machines with value over 500
