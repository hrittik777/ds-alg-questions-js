/*
#easy
#two

Count the number of passing cars on the road.

A non-empty array A consisting of N integers is given. The consecutive elements of array A represent consecutive cars on a road.

Array A contains only 0s and/or 1s:
  0 represents a car traveling east,
  1 represents a car traveling west.

The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.

For example, consider array A such that:
  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1

We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).

Write a function:

function solution(A);

that, given a non-empty array A of N integers, returns the number of pairs of passing cars.

The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000.

For example, given:
  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1

the function should return 5, as explained above.
*/

function passingCars(A) {
  let east = 0;
  let pairs = 0;

  // each time you encounter an east-car, the number of cars a following west-car can be paired with increases by one
  for (let i = 0; i < A.length; i += 1) {
    if (A[i] === 0) east += 1;
    else if (A[i] === 1) pairs += east;
  }

  if (pairs > 1000000000) pairs = -1;

  return pairs;
}

passingCars([0, 1, 0, 1, 1]);