So, what is a Binary Search

1. Its an algorithm
2. Its input is a sorted list of elements (it needs to be sorted)
3. If an element you're looking for is in that list, binary search returns the position where it is located, otherwise binary search returns null.

Here is an example of where an Binary Search comes in handy.

Lets assume I'm thinking of a number between 1 and 100.

You have to try and guess in the fewest tries possible. With every guess, you will be told if your guess is too high, too low, or correct.

So if I start guessing, 1, then 2, then 3...that would be a bad approach. That would be simple search (stupid search) since each guess is eliminating only one number. If the number was 99, it would take 99 guesses to get there.

A better way to do this search would be to start with 50.

Just by knowing too high or too low with 50 would eliminate half the numbers.

Next would be to start with 75, again, you cut the remaining numbers in half, and so on

This is a Binary Search Algorthim

With 100 items, you can solve this in a maximum of seven guesses becasue you eleminate so many numbers with each guess.

100 items -> 50 -> 25 -> 13 -> 7 -> 4 -> 2 -> 1

So no matter what number from 1-100, you can solve it in a maximum of 7 guesses. And this scales accoridingly to the input.

Another example with a larger input

Lets say you are looking for a word in the dictionary, a dictionary which has 240,000 words

Worst case scenario, a Simple search will take 240,000 stepsm (if the word you're looking for is the very last one in the book)

But a Binary search, the worst case is a max of 18 steps

240k -> 120K -> 60K -> 30K -> 15K -> 7.5K -> 3950 -> 1875 -> 938 -> 469 -> 235 -> 118 -> 59 -> 30 -> 15 -> 8 -> 4 -> 2 -> 1

In general, with any list of n, binary search will take log2 n steps to run the worst case, whereas simple search will take n steps.

---

Another concept important here are Logarithms (and exponents)

log^10 100 is like asking "How many 10s do we multiply to get 100? "

The answer is 2, since 10 \* 10 = 100.

So log^10 100 = 2

Logs are the flips of exponentials

left off at

https://livebook.manning.com/book/grokking-algorithms/chapter-1/1
