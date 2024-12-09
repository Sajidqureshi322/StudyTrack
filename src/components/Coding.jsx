import React, { useEffect, useState } from 'react';
import { FaLink } from "react-icons/fa6"; // Importing the link icon
import { VscFileCode } from "react-icons/vsc"; // Importing the code file icon

// All questions from the PDF, categorized by topics with difficulty levels
const codingData = {
  "Array": [
    { id: 1, title: "Two Sum", link: "https://leetcode.com/problems/two-sum/", difficulty: "Easy" },
    { id: 2, title: "Remove Duplicates from Sorted Array", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", difficulty: "Easy" },
    { id: 3, title: "Best Time to Buy and Sell Stock", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", difficulty: "Easy" },
    { id: 4, title: "Plus One", link: "https://leetcode.com/problems/plus-one/", difficulty: "Easy" },
    { id: 5, title: "Missing Number", link: "https://leetcode.com/problems/missing-number/", difficulty: "Easy" },
    { id: 6, title: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/", difficulty: "Easy" },
    { id: 7, title: "Move Zeroes", link: "https://leetcode.com/problems/move-zeroes/", difficulty: "Easy" },
    { id: 8, title: "Contains Duplicate", link: "https://leetcode.com/problems/contains-duplicate/", difficulty: "Easy" },
    { id: 9, title: "Intersection of Two Arrays II", link: "https://leetcode.com/problems/intersection-of-two-arrays-ii/", difficulty: "Easy" },
    { id: 10, title: "Rotate Array", link: "https://leetcode.com/problems/rotate-array/", difficulty: "Easy" },
    { id: 11, title: "Third Maximum Number", link: "https://leetcode.com/problems/third-maximum-number/", difficulty: "Easy" },
    { id: 12, title: "Valid Palindrome", link: "https://leetcode.com/problems/valid-palindrome/", difficulty: "Easy" },
    { id: 13, title: "Merge Sorted Array", link: "https://leetcode.com/problems/merge-sorted-array/", difficulty: "Easy" },
    { id: 14, title: "Maximum Product Subarray", link: "https://leetcode.com/problems/maximum-product-subarray/", difficulty: "Easy" },
    { id: 15, title: "Minimum Size Subarray Sum", link: "https://leetcode.com/problems/minimum-size-subarray-sum/", difficulty: "Easy" },
    { id: 16, title: "Product of Array Except Self", link: "https://leetcode.com/problems/product-of-array-except-self/", difficulty: "Medium" },
    { id: 17, title: "Container With Most Water", link: "https://leetcode.com/problems/container-with-most-water/", difficulty: "Medium" },
    { id: 18, title: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", difficulty: "Medium" },
    { id: 19, title: "Combination Sum", link: "https://leetcode.com/problems/combination-sum/", difficulty: "Medium" },
    { id: 20, title: "Next Permutation", link: "https://leetcode.com/problems/next-permutation/", difficulty: "Medium" },
    { id: 21, title: "Find First and Last Position of Element in Sorted Array", link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", difficulty: "Medium" },
    { id: 22, title: "3Sum", link: "https://leetcode.com/problems/3sum/", difficulty: "Medium" },
    { id: 23, title: "Spiral Matrix", link: "https://leetcode.com/problems/spiral-matrix/", difficulty: "Medium" },
    { id: 24, title: "Merge Intervals", link: "https://leetcode.com/problems/merge-intervals/", difficulty: "Medium" },
    { id: 25, title: "Jump Game", link: "https://leetcode.com/problems/jump-game/", difficulty: "Medium" },
    { id: 26, title: "Set Matrix Zeroes", link: "https://leetcode.com/problems/set-matrix-zeroes/", difficulty: "Medium" },
    { id: 27, title: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/", difficulty: "Medium" },
    { id: 28, title: "Word Search", link: "https://leetcode.com/problems/word-search/", difficulty: "Medium" },
    { id: 29, title: "First Missing Positive", link: "https://leetcode.com/problems/first-missing-positive/", difficulty: "Medium" },
    { id: 30, title: "Find Peak Element", link: "https://leetcode.com/problems/find-peak-element/", difficulty: "Medium" },
    { id: 31, title: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/", difficulty: "Hard" },
    { id: 32, title: "Best Time to Buy and Sell Stock III", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/", difficulty: "Hard" },
    { id: 33, title: "First Missing Positive", link: "https://leetcode.com/problems/first-missing-positive/", difficulty: "Hard" },
    { id: 34, title: "Median of Two Sorted Arrays", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/", difficulty: "Hard" },
    { id: 35, title: "Jump Game II", link: "https://leetcode.com/problems/jump-game-ii/", difficulty: "Hard" },
    { id: 36, title: "Longest Consecutive Sequence", link: "https://leetcode.com/problems/longest-consecutive-sequence/", difficulty: "Hard" },
    { id: 37, title: "Minimum Window Substring", link: "https://leetcode.com/problems/minimum-window-substring/", difficulty: "Hard" },
    { id: 38, title: "Gas Station", link: "https://leetcode.com/problems/gas-station/", difficulty: "Hard" },
    { id: 39, title: "Meeting Rooms II", link: "https://leetcode.com/problems/meeting-rooms-ii/", difficulty: "Hard" },
    { id: 40, title: "Best Time to Buy and Sell Stock IV", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/", difficulty: "Hard" },





  ],
  "Searching": [
    { id: 41, title: "First Bad Version", link: "https://leetcode.com/problems/first-bad-version/", difficulty: "Easy" },
    { id: 42, title: "Search Insert Position", link: "https://leetcode.com/problems/search-insert-position/", difficulty: "Easy" },
    { id: 43, title: "Guess Number Higher or Lower", link: "https://leetcode.com/problems/guess-number-higher-or-lower/", difficulty: "Easy" },
    { id: 44, title: "Peak Index in a Mountain Array", link: "https://leetcode.com/problems/peak-index-in-a-mountain-array/", difficulty: "Easy" },
    { id: 45, title: "Search a 2D Matrix II", link: "https://leetcode.com/problems/search-a-2d-matrix-ii/", difficulty: "Easy" },
    { id: 46, title: "Find Minimum in Rotated Sorted Array", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", difficulty: "Easy" },
    { id: 47, title: "Find K Closest Elements", link: "https://leetcode.com/problems/find-k-closest-elements/", difficulty: "Easy" },
    { id: 48, title: "First Missing Positive", link: "https://leetcode.com/problems/first-missing-positive/", difficulty: "Easy" },
    { id: 49, title: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", difficulty: "Easy" },
    { id: 50, title: "Search a 2D Matrix", link: "https://leetcode.com/problems/search-a-2d-matrix/", difficulty: "Easy" },
    { id: 51, title: "Divide Two Integers", link: "https://leetcode.com/problems/divide-two-integers/", difficulty: "Medium" },
    { id: 52, title: "Median of Two Sorted Arrays", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/", difficulty: "Medium" },
    { id: 53, title: "Find Peak Element", link: "https://leetcode.com/problems/find-peak-element/", difficulty: "Medium" },
    { id: 54, title: "Find Kth Smallest Element in a Sorted Matrix", link: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/", difficulty: "Medium" },
    { id: 55, title: "Search in Rotated Sorted Array II", link: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/", difficulty: "Medium" },
    { id: 56, title: "Find First and Last Position of Element in Sorted Array", link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", difficulty: "Medium" },
    { id: 57, title: "First Missing Positive", link: "https://leetcode.com/problems/first-missing-positive/", difficulty: "Medium" },
    { id: 58, title: "Search a 2D Matrix II", link: "https://leetcode.com/problems/search-a-2d-matrix-ii/", difficulty: "Medium" },
    { id: 59, title: "Search Insert Position", link: "https://leetcode.com/problems/search-insert-position/", difficulty: "Medium" },
    { id: 60, title: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", difficulty: "Medium" },
    { id: 61, title: "Search in Rotated Sorted Array II", link: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/", difficulty: "Hard" },
    { id: 62, title: "Median of Two Sorted Arrays", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/", difficulty: "Hard" },
    { id: 63, title: "Search a 2D Matrix II", link: "https://leetcode.com/problems/search-a-2d-matrix-ii/", difficulty: "Hard" },
    { id: 64, title: "Find Minimum in Rotated Sorted Array", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", difficulty: "Hard" },
    { id: 65, title: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", difficulty: "Hard" },
    { id: 66, title: "First Missing Positive", link: "https://leetcode.com/problems/first-missing-positive/", difficulty: "Hard" },
    { id: 67, title: "Search Insert Position", link: "https://leetcode.com/problems/search-insert-position/", difficulty: "Hard" },
    { id: 68, title: "Find Peak Element", link: "https://leetcode.com/problems/find-peak-element/", difficulty: "Hard" },
    { id: 69, title: "First Bad Version", link: "https://leetcode.com/problems/first-bad-version/", difficulty: "Hard" },
    { id: 70, title: "Find First and Last Position of Element in Sorted Array", link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", difficulty: "Hard" },




  ],
  "Recursion": [
    { id: 71, title: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/", difficulty: "Easy" },
    { id: 72, title: "Fibonacci Number", link: "https://leetcode.com/problems/fibonacci-number/", difficulty: "Easy" },
    { id: 73, title: "Reverse String", link: "https://leetcode.com/problems/reverse-string/", difficulty: "Easy" },
    { id: 74, title: "Pow(x, n)", link: "https://leetcode.com/problems/powx-n/", difficulty: "Easy" },
    { id: 75, title: "Merge Two Sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/", difficulty: "Easy" },
    { id: 76, title: "Maximum Depth of Binary Tree", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", difficulty: "Easy" },
    { id: 77, title: "Symmetric Tree", link: "https://leetcode.com/problems/symmetric-tree/", difficulty: "Easy" },
    { id: 78, title: "Path Sum", link: "https://leetcode.com/problems/path-sum/", difficulty: "Easy" },
    { id: 79, title: "Subsets", link: "https://leetcode.com/problems/subsets/", difficulty: "Easy" },
    { id: 80, title: "Generate Parentheses", link: "https://leetcode.com/problems/generate-parentheses/", difficulty: "Easy" },
    { id: 81, title: "Permutations", link: "https://leetcode.com/problems/permutations/", difficulty: "Medium" },
    { id: 82, title: "Combinations", link: "https://leetcode.com/problems/combinations/", difficulty: "Medium" },
    { id: 83, title: "Palindrome Partitioning", link: "https://leetcode.com/problems/palindrome-partitioning/", difficulty: "Medium" },
    { id: 84, title: "Expression Add Operators", link: "https://leetcode.com/problems/expression-add-operators/", difficulty: "Medium" },
    { id: 85, title: "Word Search", link: "https://leetcode.com/problems/word-search/", difficulty: "Medium" },
    { id: 86, title: "Unique Paths", link: "https://leetcode.com/problems/unique-paths/", difficulty: "Medium" },
    { id: 87, title: "Letter Combinations of a Phone Number", link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/", difficulty: "Medium" },
    { id: 88, title: "Generate Parentheses", link: "https://leetcode.com/problems/generate-parentheses/", difficulty: "Medium" },
    { id: 89, title: "Pow(x, n)", link: "https://leetcode.com/problems/powx-n/", difficulty: "Medium" },
    { id: 90, title: "Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/", difficulty: "Medium" },
    { id: 91, title: "Regular Expression Matching", link: "https://leetcode.com/problems/regular-expression-matching/", difficulty: "Hard" },
    { id: 92, title: "Palindrome Partitioning II", link: "https://leetcode.com/problems/palindrome-partitioning-ii/", difficulty: "Hard" },
    { id: 93, title: "Expression Add Operators", link: "https://leetcode.com/problems/expression-add-operators/", difficulty: "Hard" },
    { id: 94, title: "Word Search II", link: "https://leetcode.com/problems/word-search-ii/", difficulty: "Hard" },
    { id: 95, title: "Wildcard Matching", link: "https://leetcode.com/problems/wildcard-matching/", difficulty: "Hard" },
    { id: 96, title: "Unique Paths III", link: "https://leetcode.com/problems/unique-paths-iii/", difficulty: "Hard" },
    { id: 97, title: "Decode Ways", link: "https://leetcode.com/problems/decode-ways/", difficulty: "Hard" },
    { id: 98, title: "Regular Expression Matching", link: "https://leetcode.com/problems/regular-expression-matching/", difficulty: "Hard" },
    { id: 99, title: "Palindrome Partitioning II", link: "https://leetcode.com/problems/palindrome-partitioning-ii/", difficulty: "Hard" },
    { id: 100, title: "Expression Add Operators", link: "https://leetcode.com/problems/expression-add-operators/", difficulty: "Hard" },



  ],
  "String": [
    { id: 101, title: "Reverse String", link: "https://leetcode.com/problems/reverse-string/", difficulty: "Easy" },
    { id: 102, title: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/", difficulty: "Easy" },
    { id: 103, title: "Valid Palindrome", link: "https://leetcode.com/problems/valid-palindrome/", difficulty: "Easy" },
    { id: 104, title: "String to Integer (atoi)", link: "https://leetcode.com/problems/string-to-integer-atoi/", difficulty: "Easy" },
    { id: 105, title: "Implement strStr()", link: "https://leetcode.com/problems/implement-strstr/", difficulty: "Easy" },
    { id: 106, title: "Count and Say", link: "https://leetcode.com/problems/count-and-say/", difficulty: "Easy" },
    { id: 107, title: "First Unique Character in a String", link: "https://leetcode.com/problems/first-unique-character-in-a-string/", difficulty: "Easy" },
    { id: 108, title: "Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/", difficulty: "Easy" },
    { id: 109, title: "Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", difficulty: "Easy" },
    { id: 110, title: "Longest Common Prefix", link: "https://leetcode.com/problems/longest-common-prefix/", difficulty: "Easy" },
    { id: 111, title: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/", difficulty: "Medium" },
    { id: 112, title: "Longest Palindromic Substring", link: "https://leetcode.com/problems/longest-palindromic-substring/", difficulty: "Medium" },
    { id: 113, title: "ZigZag Conversion", link: "https://leetcode.com/problems/zigzag-conversion/", difficulty: "Medium" },
    { id: 114, title: "Regular Expression Matching", link: "https://leetcode.com/problems/regular-expression-matching/", difficulty: "Medium" },
    { id: 115, title: "Longest Valid Parentheses", link: "https://leetcode.com/problems/longest-valid-parentheses/", difficulty: "Medium" },
    { id: 116, title: "Implement strStr()", link: "https://leetcode.com/problems/implement-strstr/", difficulty: "Medium" },
    { id: 117, title: "String to Integer (atoi)", link: "https://leetcode.com/problems/string-to-integer-atoi/", difficulty: "Medium" },
    { id: 118, title: "Palindrome Partitioning", link: "https://leetcode.com/problems/palindrome-partitioning/", difficulty: "Medium" },
    { id: 119, title: "Wildcard Matching", link: "https://leetcode.com/problems/wildcard-matching/", difficulty: "Medium" },
    { id: 120, title: "Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/", difficulty: "Medium" },
    { id: 121, title: "Regular Expression Matching", link: "https://leetcode.com/problems/regular-expression-matching/", difficulty: "Hard" },
    { id: 122, title: "Longest Substring with At Least K Repeating Characters", link: "https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/", difficulty: "Hard" },
    { id: 123, title: "Distinct Subsequences", link: "https://leetcode.com/problems/distinct-subsequences/", difficulty: "Hard" },
    { id: 124, title: "Longest Palindromic Substring", link: "https://leetcode.com/problems/longest-palindromic-substring/", difficulty: "Hard" },
    { id: 125, title: "Encode and Decode Strings", link: "https://leetcode.com/problems/encode-and-decode-strings/", difficulty: "Hard" },
    { id: 126, title: "Palindrome Partitioning II", link: "https://leetcode.com/problems/palindrome-partitioning-ii/", difficulty: "Hard" },
    { id: 127, title: "Text Justification", link: "https://leetcode.com/problems/text-justification/", difficulty: "Hard" },
    { id: 128, title: "Longest Valid Parentheses", link: "https://leetcode.com/problems/longest-valid-parentheses/", difficulty: "Hard" },
    { id: 129, title: "Longest Common Prefix", link: "https://leetcode.com/problems/longest-common-prefix/", difficulty: "Hard" },
    { id: 130, title: "Minimum Window Substring", link: "https://leetcode.com/problems/minimum-window-substring/", difficulty: "Hard" },

  ],
  "Stack": [
    { id: 131, title: "Min Stack", link: "https://leetcode.com/problems/min-stack/", difficulty: "Easy" },
    { id: 132, title: "Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/", difficulty: "Easy" },
    { id: 133, title: "Remove Outermost Parentheses", link: "https://leetcode.com/problems/remove-outermost-parentheses/", difficulty: "Easy" },
    { id: 134, title: "Implement Queue using Stacks", link: "https://leetcode.com/problems/implement-queue-using-stacks/", difficulty: "Easy" },
    { id: 135, title: "Implement Stack using Queues", link: "https://leetcode.com/problems/implement-stack-using-queues/", difficulty: "Easy" },
    { id: 136, title: "Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/", difficulty: "Easy" },
    { id: 137, title: "Remove Outermost Parentheses", link: "https://leetcode.com/problems/remove-outermost-parentheses/", difficulty: "Easy" },
    { id: 138, title: "Min Stack", link: "https://leetcode.com/problems/min-stack/description/", difficulty: "Easy" },
    { id: 139, title: "Evaluate Reverse Polish Notation", link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/", difficulty: "Medium" },
    { id: 140, title: "Basic Calculator II", link: "https://leetcode.com/problems/basic-calculator-ii/", difficulty: "Medium" },
    { id: 141, title: "Daily Temperatures", link: "https://leetcode.com/problems/daily-temperatures/", difficulty: "Medium" },
    { id: 142, title: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/", difficulty: "Medium" },
    { id: 143, title: "Remove Duplicate Letters", link: "https://leetcode.com/problems/remove-duplicate-letters/", difficulty: "Medium" },
    { id: 144, title: "Simplify Path", link: "https://leetcode.com/problems/simplify-path/", difficulty: "Medium" },
    { id: 145, title: "Basic Calculator", link: "https://leetcode.com/problems/basic-calculator/", difficulty: "Medium" },
    { id: 146, title: "Largest Rectangle in Histogram", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/", difficulty: "Medium" },
    { id: 147, title: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: "Hard" },
    { id: 148, title: "Shortest Subarray with Sum at Least K", link: "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/", difficulty: "Hard" },
    { id: 149, title: "Find K Pairs with Smallest Sums", link: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/", difficulty: "Hard" },
    { id: 150, title: "Design Twitter", link: "https://leetcode.com/problems/design-twitter/", difficulty: "Hard" },
    { id: 151, title: "Sliding Window Median", link: "https://leetcode.com/problems/sliding-window-median/", difficulty: "Hard" },
    { id: 152, title: "Task Scheduler", link: "https://leetcode.com/problems/task-scheduler/", difficulty: "Hard" },
    { id: 153, title: "Find the Most Competitive Subsequence", link: "https://leetcode.com/problems/find-the-most-competitive-subsequence/", difficulty: "Hard" },


  ],
  "Queue": [
    { id: 154, title: "Implement Stack using Queues", link: "https://leetcode.com/problems/implement-stack-using-queues/", difficulty: "Easy" },
    { id: 155, title: "Design Circular Queue", link: "https://leetcode.com/problems/design-circular-queue/", difficulty: "Easy" },
    { id: 156, title: " Design Circular Deque", link: "https://leetcode.com/problems/design-circular-deque/description/", difficulty: "Easy" },
    { id: 157, title: " Implement Queue using Stacks", link: "https://leetcode.com/problems/implement-queue-using-stacks/", difficulty: "Easy" },
    { id: 158, title: "First Unique Character in a String", link: "https://leetcode.com/problems/first-unique-character-in-a-string/", difficulty: "Easy" },
    { id: 159, title: "Design HashSet", link: "https://leetcode.com/problems/design-hashset/", difficulty: "Easy" },
    { id: 160, title: "Design HashMap", link: "https://leetcode.com/problems/design-hashmap/", difficulty: "Easy" },
    { id: 161, title: "Implement Trie (Prefix Tree)", link: "https://leetcode.com/problems/implement-trie-prefix-tree/", difficulty: "Easy" },
    { id: 162, title: "Sliding Window Maximum ", link: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: "Easy" },
    { id: 163, title: "Shortest Subarray with Sum at Least K", link: "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/", difficulty: "Medium" },
    { id: 164, title: "Find K Pairs with Smallest Sums", link: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/", difficulty: "Medium" },
    { id: 165, title: "Design Twitter", link: "https://leetcode.com/problems/design-twitter/", difficulty: "Medium" },
    { id: 166, title: "Number of Recent Calls", link: "https://leetcode.com/problems/number-of-recent-calls/", difficulty: "Medium" },
    { id: 167, title: "Implement Stack using Queues", link: "https://leetcode.com/problems/implement-stack-using-queues/", difficulty: "Medium" },
    { id: 168, title: "Implement Queue using Stacks", link: "https://leetcode.com/problems/implement-queue-using-stacks/", difficulty: "Medium" },
    { id: 169, title: "First Unique Number", link: "https://leetcode.com/problems/first-unique-number/", difficulty: "Medium" },
    { id: 170, title: "Sliding Window Median", link: "https://leetcode.com/problems/sliding-window-median/", difficulty: "Medium" },
    { id: 171, title: "Task Scheduler", link: "https://leetcode.com/problems/task-scheduler/", difficulty: "Medium" },
    { id: 172, title: "Find the Most Competitive Subsequence", link: "https://leetcode.com/problems/find-the-most-competitive-subsequence/", difficulty: "Medium" }


  ],
  "Linked List": [
    { id: 173, title: "Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/", difficulty: "Easy" },
{ id: 174, title: "Middle of the Linked List", link: "https://leetcode.com/problems/middle-of-the-linked-list/", difficulty: "Easy" },
{ id: 175, title: "Merge Two Sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/", difficulty: "Easy" },
{ id: 176, title: "Remove Nth Node From End of List", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", difficulty: "Easy" },
{ id: 177, title: "Palindrome Linked List", link: "https://leetcode.com/problems/palindrome-linked-list/", difficulty: "Easy" },
{ id: 178, title: "Intersection of Two Linked Lists", link: "https://leetcode.com/problems/intersection-of-two-linked-lists/", difficulty: "Easy" },
{ id: 179, title: "Design Linked List", link: "https://leetcode.com/problems/design-linked-list/", difficulty: "Easy" },
{ id: 180, title: "Linked List Cycle", link: "https://leetcode.com/problems/linked-list-cycle/", difficulty: "Easy" },
{ id: 181, title: "Flatten a Multilevel Doubly Linked List", link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/", difficulty: "Easy" },
{ id: 182, title: "Add Two Numbers", link: "https://leetcode.com/problems/add-two-numbers/", difficulty: "Medium" },
{ id: 183, title: "Odd Even Linked List", link: "https://leetcode.com/problems/odd-even-linked-list/", difficulty: "Medium" },
{ id: 184, title: "Remove Linked List Elements", link: "https://leetcode.com/problems/remove-linked-list-elements/", difficulty: "Medium" },
{ id: 185, title: "Copy List with Random Pointer", link: "https://leetcode.com/problems/copy-list-with-random-pointer/", difficulty: "Medium" },
{ id: 186, title: "Swap Nodes in Pairs", link: "https://leetcode.com/problems/swap-nodes-in-pairs/", difficulty: "Medium" },
{ id: 187, title: "Merge k Sorted Lists", link: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: "Medium" },
{ id: 188, title: "LRU Cache", link: "https://leetcode.com/problems/lru-cache/", difficulty: "Medium" },
{ id: 189, title: "Palindrome Linked List", link: "https://leetcode.com/problems/palindrome-linked-list/", difficulty: "Medium" },
{ id: 190, title: "Split Linked List in Parts", link: "https://leetcode.com/problems/split-linked-list-in-parts/", difficulty: "Medium" },
{ id: 191, title: "Reverse Nodes in k-Group", link: "https://leetcode.com/problems/reverse-nodes-in-k-group/", difficulty: "Hard" },
{ id: 192, title: "LRU Cache", link: "https://leetcode.com/problems/lru-cache/", difficulty: "Hard" },
{ id: 193, title: "Serialize and Deserialize Binary Tree", link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", difficulty: "Hard" },
{ id: 194, title: "Merge k Sorted Lists", link: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: "Hard" },
{ id: 195, title: "Copy List with Random Pointer", link: "https://leetcode.com/problems/copy-list-with-random-pointer/", difficulty: "Hard" },
{ id: 196, title: "Merge Two Sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/", difficulty: "Hard" },
{ id: 197, title: "LRU Cache", link: "https://leetcode.com/problems/lru-cache/", difficulty: "Hard" },
{ id: 198, title: "Palindrome Linked List", link: "https://leetcode.com/problems/palindrome-linked-list/", difficulty: "Hard" },
{ id: 199, title: "Design Linked List", link: "https://leetcode.com/problems/design-linked-list/", difficulty: "Hard" },

  ],
  "Tree": [
    { id: 200, title: "Maximum Depth of Binary Tree", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", difficulty: "Easy" },
    { id: 201, title: "Validate Binary Search Tree", link: "https://leetcode.com/problems/validate-binary-search-tree/", difficulty: "Easy" },
    { id: 202, title: "Symmetric Tree", link: "https://leetcode.com/problems/symmetric-tree/", difficulty: "Easy" },
    { id: 203, title: "Convert Sorted Array to Binary Search Tree", link: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/", difficulty: "Easy" },
    { id: 204, title: "Minimum Depth of Binary Tree", link: "https://leetcode.com/problems/minimum-depth-of-binary-tree/", difficulty: "Easy" },
    { id: 205, title: "Diameter of Binary Tree", link: "https://leetcode.com/problems/diameter-of-binary-tree/", difficulty: "Easy" },
    { id: 206, title: "Same Tree", link: "https://leetcode.com/problems/same-tree/", difficulty: "Easy" },
    { id: 207, title: "Subtree of Another Tree", link: "https://leetcode.com/problems/subtree-of-another-tree/", difficulty: "Easy" },
    { id: 208, title: "Invert Binary Tree", link: "https://leetcode.com/problems/invert-binary-tree/", difficulty: "Easy" },
    { id: 209, title: "Path Sum", link: "https://leetcode.com/problems/path-sum/", difficulty: "Easy" },
    { id: 210, title: "Binary Tree Inorder Traversal", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/", difficulty: "Medium" },
{ id: 211, title: "Construct Binary Tree from Preorder and Inorder Traversal", link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", difficulty: "Medium" },
{ id: 212, title: "Construct Binary Tree from Inorder and Postorder Traversal", link: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/", difficulty: "Medium" },
{ id: 213, title: "Lowest Common Ancestor of a Binary Tree", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", difficulty: "Medium" },
{ id: 214, title: "Binary Tree Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/", difficulty: "Medium" },
{ id: 215, title: "Binary Tree Zigzag Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", difficulty: "Medium" },
{ id: 216, title: "Path Sum II", link: "https://leetcode.com/problems/path-sum-ii/", difficulty: "Medium" },
{ id: 217, title: "Count Complete Tree Nodes", link: "https://leetcode.com/problems/count-complete-tree-nodes/", difficulty: "Medium" },
{ id: 218, title: "Flatten Binary Tree to Linked List", link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/", difficulty: "Medium" },
{ id: 219, title: "Binary Tree Maximum Path Sum", link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", difficulty: "Hard" },
{ id: 220, title: "Serialize and Deserialize Binary Tree", link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", difficulty: "Hard" },
{ id: 221, title: "Construct Binary Tree from String", link: "https://leetcode.com/problems/construct-binary-tree-from-string/", difficulty: "Hard" },
{ id: 222, title: "Populating Next Right Pointers in Each Node", link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/", difficulty: "Hard" },
{ id: 223, title: "Populating Next Right Pointers in Each Node II", link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/", difficulty: "Hard" },
{ id: 224, title: "House Robber III", link: "https://leetcode.com/problems/house-robber-iii/", difficulty: "Hard" },
{ id: 225, title: "Kth Smallest Element in a BST", link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", difficulty: "Hard" },
{ id: 226, title: "Closest Binary Search Tree Value II", link: "https://leetcode.com/problems/closest-binary-search-tree-value-ii/", difficulty: "Hard" },
{ id: 227, title: "Convert Sorted List to Binary Search Tree", link: "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/", difficulty: "Hard" },
{ id: 228, title: "Maximum Binary Tree", link: "https://leetcode.com/problems/maximum-binary-tree/", difficulty: "Hard" },

  ],
  "Graph": [
    { id: 229, title: "Number of Islands", link: "https://leetcode.com/problems/number-of-islands/", difficulty: "Easy" },
    { id: 230, title: "Valid Sudoku ", link: "https://leetcode.com/problems/valid-sudoku/", difficulty: "Easy" },
    { id: 231, title: "Course Schedule", link: "https://leetcode.com/problems/course-schedule/description/", difficulty: "Easy" },
    { id: 232, title: "Is Graph Bipartite?", link: "https://leetcode.com/problems/is-graph-bipartite/description/", difficulty: "Easy" },
    { id: 233, title: "Friend Circles", link: "https://leetcode.com/problems/number-of-provinces/", difficulty: "Easy" },
    { id: 234, title: "Clone Graph", link: "https://leetcode.com/problems/clone-graph/description/", difficulty: "Easy" },         
    { id: 235, title: "Pacific Atlantic Water Flow", link: "https://leetcode.com/problems/pacific-atlantic-water-flow/description/", difficulty: "Easy" },
    { id: 236, title: "Course Schedule II", link: "https://leetcode.com/problems/course-schedule-ii/", difficulty: "Easy" },
    { id: 237, title: "Minimum Height Trees", link: "https://leetcode.com/problems/minimum-height-trees/description/", difficulty: "Easy" },
    { id: 238, title: "Reconstruct Itinerary ", link: "https://leetcode.com/problems/reconstruct-itinerary/description/", difficulty: "Easy" },
    { id: 239, title: "Word Ladder", link: "https://leetcode.com/problems/word-ladder/", difficulty: "Medium" },
    { id: 240, title: "Number of Connected Components in an Undirected Graph", link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/description/", difficulty: "Medium" },
    { id: 241, title: "Graph Valid Tree", link: "https://leetcode.com/problems/graph-valid-tree/", difficulty: "Medium" },
    { id: 242, title: "Course Schedule III", link: "https://leetcode.com/problems/course-schedule-iii/", difficulty: "Medium" },
    { id: 243, title: "Alien Dictionary", link: "https://leetcode.com/problems/alien-dictionary/description/", difficulty: "Medium" },
    { id: 244, title: "Network Delay Time", link: "https://leetcode.com/problems/network-delay-time/description/", difficulty: "Medium" },
    { id: 245, title: "Number of Islands II ", link: "https://leetcode.com/problems/number-of-islands-ii/description/", difficulty: "Medium" },
    { id: 246, title: "Pacific Atlantic Water Flow", link: "https://leetcode.com/problems/pacific-atlantic-water-flow/description/", difficulty: "Medium" },
    { id: 247, title: "Reconstruct Itinerary ", link: "https://leetcode.com/problems/reconstruct-itinerary/description/", difficulty: "Medium" },
    { id: 248, title: "Course Schedule", link: "https://leetcode.com/problems/course-schedule/", difficulty: "Medium" },
    { id: 249, title: "Number of Islands III", link: "https://leetcode.com/problems/number-of-islands-iii/", difficulty: "Hard" },
    { id: 250, title: "Bus Routes", link: "https://leetcode.com/problems/bus-routes/description/", difficulty: "Hard" },
    { id: 251, title: "Critical Connections in a Network ", link: "https://leetcode.com/problems/critical-connections-in-a-network/description/", difficulty: "Hard" },
    { id: 252, title: "Evaluate Division", link: "https://leetcode.com/problems/evaluate-division/description/", difficulty: "Hard" },
    { id: 253, title: "Number of Restricted Paths From First to Last Node", link: "https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/description/", difficulty: "Hard" },
    { id: 254, title: "Minimum Swaps to Group All 1's Together ", link: "https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/description/", difficulty: "Hard" },
    { id: 255, title: "Swim in Rising Water", link: "https://leetcode.com/problems/swim-in-rising-water/", difficulty: "Hard" },
    { id: 256, title: "Optimize Water Distribution in a Village", link: "https://leetcode.com/problems/optimize-water-distribution-in-a-village/description/", difficulty: "Hard" },
    { id: 257, title: "Regions Cut By Slashes", link: "https://leetcode.com/problems/regions-cut-by-slashes/description/", difficulty: "Hard" },
    { id: 258, title: "Most Stones Removed with Same Row or Column ", link: "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/description/", difficulty: "Hard" },
 
  ],
};

const getColorForDifficulty = (difficulty) => {
  switch (difficulty) {
    case "Easy":
      return "text-green-400";
    case "Medium":
      return "text-yellow-400";
    case "Hard":
      return "text-red-400";
    default:
      return "text-white";
  }
};

const Coding = ({ onProgressUpdate }) => {
  const [selectedTopic, setSelectedTopic] = useState(Object.keys(codingData)[0]);

  return (
    <div className="flex min-h-screen bg-black text-white ">
      <div className=" w-1/4 bg-black border border-customBlack rounded-lg p-5 h-screen flex flex-col">
        <h2 className="text-2xl font-bold mb-5">Coding Topics</h2>
        {Object.keys(codingData).map((topic) => (
          <button
            key={topic}
            onClick={() => setSelectedTopic(topic)}
            className={`w-full text-left px-4 py-3 m-2 rounded-lg cursor-pointer  ${selectedTopic === topic ? "bg-customBlack" : "bg-black"
              } hover:bg-customBlack flex justify-between items-center`}
          >
            <div className="flex items-center">
              <VscFileCode className="mr-2 text-xl" />
              <span>{topic}</span>
            </div>
            <span className="text-sm text-gray-400">
              ({codingData[topic].length})
            </span>
          </button>
        ))}
      </div>

      <div className="rightSection w-3/4 bg-black p-6 space-y-4 overflow-y-auto h-screen">
        <h2 className="text-2xl font-bold text-white mb-4 ">
          {selectedTopic} Questions
        </h2>
        <ul className="space-y-3 ">
          {codingData[selectedTopic].map((question) => (
            <li key={question.id} className="bg-customBlack p-4 rounded-lg hover:bg-customOb flex items-center justify-between ">
              <a href={question.link} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-400 flex items-center ">
                <FaLink className="mr-2" />
                {question.title}
              </a>
              <span className={`ml-4 ${getColorForDifficulty(question.difficulty)} font-semibold`}>
                {question.difficulty}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Coding;