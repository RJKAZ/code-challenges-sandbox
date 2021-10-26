Array Algorithms

1. Kadanes Algorithm

Kadane's algorithm is an iterative dynamic programming algorithm in which we search for a maximum sum contiguous subarray within a one-dimensional numeric array.

2. Floyds Circle Detection Algorithm

This is a pointer algorithm that uses only two pointers, moving through the sequence at different speeds. It states the usage of a Linked List in this algorithm and outputs

the purpose of this algorithm is to determine whether the linked list has a cycle or not. First, you need two pointers of the head node. At each iteration, you move one of the pointers by two steps and the other one by one step. So you have two pointers, lets call them the tortoise and the hare. Eventually one of two cases will happen

- the Hare will reach the tail of the linked list(null) which means that there is no cycle in it.
- the Hare will meet the Tortoise, which means there is a cycle.

The time complexity is O(N) where N is the number of nodes in the linked list, and the space complexity is O(1) as you use only two pointers

https://www.codingninjas.com/blog/2020/09/09/floyds-cycle-detection-algorithm/

3. KMP Algorithm

The Knuth Morris Pratt (KMP) is an algorithm that checks the characters from left to right.
When a pattern has a sub-pattern appears more than one in the sub-pattern, it uses that property to improve the time complexity. Also for in the worst case, the time complexity of KMP is O(n)

https://www.tutorialspoint.com/Knuth-Morris-Pratt-Algorithm

4. Quick Select Algorithm

Quick Select is an algorithm to find the k-th smallest element in an unordered list. This algorithm is similar to quickSort, the difference is, instead of recurring for both sides (after finding pivot) it recurs only for the part that contains the k-th smallest element.

https://www.geeksforgeeks.org/quickselect-algorithm/

5. Boyer-Moore Majority Vote Algorithm

this is an algorithm for finding the majority of a sequence of elements using linear time and constant space. In its simpilest form, the algorithm finds a majority element, is there is one; that is, an element that occurs repeadidly for more than half fo the elements of the input.

https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm

Searching Algorithms

1. Linear Search
2. Binary Search
3. Depth First Search
4. Breadth First Search

Sorting Algorithms

1. Insertion Sort
2. Selection Sort
3. Heap Sort
4. Merge Sort
5. Quick Sort
6. Counting Sort

Graph Algorithms

1. Kruskals Algorithm
2. Dijkstra's Algorithm
3. Bellman Ford Algorithm
4. Floyd Warshell Algorithm
5. Topological Sort Algorithm
6. Flood Fill Algorithm
7. Lee's Algorithm

Basic Algorithms

1. Human Coding Compression Algorithm
2. Euclide Algorithm
3. Union Find Algorithm
