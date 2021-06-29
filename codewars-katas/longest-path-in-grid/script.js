/*
Given a rectangular grid of characters, print the longest string that forms a lexicographically ordered path through the grid.

Characters are between " " (ascii 32) and "~" (ascii 126) inclusively.
The rows of the grid are separated by newlines (ascii 10) and should not be interpreted as characters in the grid.
Paths will not necessarily be sequential (characters can be skipped).
They can start and end anywhere in the grid.
They can change directions at any time, go in any direction, diagonally, or even cross themselves.
If there's a tie for longest, return the path that comes first lexicographically
Example 1:

mda
xfc
gxx
The longest ascending path is "acdfgx"

Example 2:

bja
def
ghi
The longest ascending path is "bdefhi" (Another solution is "bdeghi" but "bdefhi" comes first lexicographically)

Example 3:

/o'xk4^%6N
xZ-(CKd:}N
#LoYiI.o(2
Qu+$oBE[oe
RSr&Y|O'*Q
ypmJ9th[&G
*XKq,{&/Q_
44>S6=6{jR
&)2KgPBlAF
39rG:2ixUV
The longest ascending path is "$&+LQRSmpru"

Your solution must work on 100 random tests with 10-20 rows/columns and 150 random tests with 50-80 rows/columns within the time limit.
*/ 