# Find All Duplicates in an Array
## Problem Statement:
Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, _return an array of all the integers that appears twice_.

You must write an algorithm that runs in O(n) time and uses only constant extra space.

## Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]
Example 2:

Input: nums = [1,1,2]
Output: [1]
Example 3:

Input: nums = [1]
Output: []

## Constraints:
- n == nums.length
- 1 <= n <= 105
- 1 <= nums[i] <= n
- Each element in nums appears once or twice.

## Time Complexity
- Required: O(n)
- Achieved: O(n)

## Developer notes:
In this problem, we need to find recurring items from an input array. It can be any iterable in JS. In order to detect duplicates, we must need to track the items which have already occurred. There can be two solutions:
- One can be brute force with a nested loop. We can start from the first iteration, and then compare it against all the entries in the array to see if it has a duplicated value or not.
    - This approach will have a time complexity of O(n^2).
    - We need to eliminate the second loop somehow.
    - If we revisit our understanding of the data structures, we know that array has an O(n) time complexity of look up operation, hence each iteration of first loop will do a look up which will result in O(n^2).
- There is another data structure in the form of Objects/Key value pairs in JS which have some characteristics of a hash map primarily constant time lookup operation. That is what we need to eliminate nested iteration. Hence we use an object to track the duplicate and its constant look up operation gives us an O(n) time complexity.

