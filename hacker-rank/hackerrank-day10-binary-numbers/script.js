/* today we are working with Binary Numbers 

 given a base-10 integer, n, convert it to binary (base-2) then find and print the base-10 integer denoting the maxium number of consecutive 1's in n's binary representation. 

 Binary means New Base, specifically Base 2 instead of Base 10

 Take the number 7 to turn that to Base 2

 7 is comprised of 

 1 = 2 (to zero power)
 2 = 2 (to 1st power)
 4 = 2 (to the 2nd power)

 Base 10 " 7 " = Base 2 " 111 "

 what that means is the 1st one was 1 x 2 (to the zero) & (2 to the zero equals one), so 1 x 1 = 1
 the 2nd one was 1 x 2 (to the first power) & (2 to the first power equals two) so 1 x 2 = 2
 then 3rd one was 1 x 2 (to the second power) & (2 to the second power equals four) so 1 x 4 = 4

 so 1 + 2 + 4 = 7

Base 2 (Binary) and Base 10 (the real number)

The (Base 2) of 1 = the (Base 10) of 1
1 = 1 x 2(0 power) which equals 1 x 1 which is 1

The (Base 2) of 11 = the (Base 10) of 3

1 = 1 x 2(0 power) which equals 1 x 1 which is 1
1 = 1 x 2(1st power) which equals 1 x 2 which is 2
1 + 2 = 3

The (Base 2) of 101 = the (Base 10) of 5

1 = 1 x 2(0 power) which equals 1 x 1 which is 1
1 = 0 x 2(1st power) which equals 0 x 2 which is 0
1 = 1 x 2(2nd power) which equals 1 x 4 which is 4

1 + 0 + 4 = 5

so I will now try to figure out my own Base 10 of 1110

The (Base 2) of 1110 =  the (Base 10) of 7 

1 = 1 x 2(0 power) which equals 1 x 1 which is 1
1 = 1 x 2(1st power) which equals 1 x 2 which is 2
1 = 1 x 2(2nd power) which equals 1 x 4 which is 4
0 = 0 x 2(3rd power?) which equals 0 x 6 which is 0

1 + 2 + 4 + 0 = 7

THAT ABOVE CODE (my attempt) IS WRONG.....It has to be broken down from right to left, not left to right

so the (Base 2) of 1110 = the (Base 10) of 14

SO right to left....means we start with the 0 at the end, not the 1.

0 = 0 x 2(0 power) = 0 x 1 = 0
1 = 1 x 2(1st power) which equals 1 x 2 which is 2
1 = 1 x 2(2nd power) which equals 1 x 4 which is 4
1 = 1 x 2(3rd power?) which equals 1 x 8  which is 8

0 + 2 + 4 + 8 = 14

----------------

There is also math wite Base 2

(Base 2)            (Base 10)
1 + 1110 = 1111      14 + 1 = 15

---------------------

The (Base 2) of 0110 = the (Base 10) of 6

0 x 2(0) = 0
1 x 2(1) = 2
1 x 2(2) = 4
0 x 2(3) = 0

0 + 2 + 4 + 0 = 6

__________________________

Now to do the reverse 

Base 10 to Base 2

The (Base 10) of 34 = the (Base 2) of 010001

first.....34 divided by 2 = 17 with a remainder of 0
then......17 divided by 2 = 8 with a remainder of 1
and then ..8 divided by 2 = 4 with a remainder of 0
and then ..4 divided by 2 = 2 with a remainder of 0
and then ..2 divided by 2 = 1 with a remainder of 0
and then ..1 divided by 2 = 0  with a remainder of 1

the Base 10 0f 6 divided by 2 = 3 with a remainder of 0
The base 10 of 3 divided by 2 = 1 with a remainder of 1
The base 10 0f 1 divided by 2 = 0 with a reainder of 1

the Base 10 of 7 divided by 2 = 3 with a remainder of 1
the base 10 of 3 divided ny 2 = 1 with a remainder of 1
the base 10 of 1 divided by 2  = 0 with a remainder of 1


The last number you got goes to the front 

so you get 010001

Now to do that in reverse 

The (Base 2) of 010001 = the (Base 10) of 34

0 x 2(0) = 0 x 2 = 0
1 x 2(1) = 1 x 2 = 2
0 x 2(2) = 0 x 4 = 0
0 x 2(3) = 0 x 8 = 0
0 x 2(4) = 0 x 16 = 0
1 x 2(5) = 1 x 32 = 32

2 + 4 = 34

One thing you can also do with binary/Base 2 is operations

Binary/Base 2
0 + 0 = 0
1 + 0 = 1
0 + 1 = 1
1 + 1 = 0 (because there is no 2 in Base 2)   (Also in Base 10 there is no digit of 10, its all 0 to 9)
1 + 1 + 1 = 1 (with a remainder?)

6 + 7 = 13 (=) 110 + 111 = 1101

the Base 10 0f 6 divided by 2 = 3 with a remainder of 0
The base 10 of 3 divided by 2 = 1 with a remainder of 1
The base 10 0f 1 divided by 2 = 0 with a reainder of 1

the Base 10 of 7 divided by 2 = 3 with a remainder of 1
the base 10 of 3 divided ny 2 = 1 with a remainder of 1
the base 10 of 1 divided by 2  = 0 with a remainder of 1

   110
 + 111
 ________
  1101

1 x 2(0) = 1
1 x 2(2) = 4
1 x 2(3) = 8
= 13

_______________________

another example. 

7 + 7 = 14 (=) 111 + 111 = 

  111
+ 111
_______
  1110

  0 x 2(0) = 0
  1 x 2(1) = 2
  1 x 2(2) = 4
  1 x 2(3) = 8

  = 14

_______________________

another example. 

5 + 7 = 12 (=) 101 + 111

The Base 10 of 5 = the Base 2 of
5/2 = 2 with a remainder of 1
2/2 = 1 with a remainder of 0
1/2 = 0 with a remainder of 1
so 101

 101
+111
______
1100 
8 + 4 + 0 + 0 = 12

you can also do Multiplication and Divison, and work with Decimals and scientific notation, but thats alittle beyond this, thats more advanced Binary shit. 

Now we deal with "Two's Complement."  Thus far we have been dealing with positive numbers, but how do we represent negative numbers in binary?

1. We have Twos Complment which is a saying "Flip the bits and add 1"
2. We will represent this number by a single byte (a single byte has 8 numbers inside of it, or rather 8 bits. A Bit is single and a Byte is 8 numbers)

So if we have 6 in binary - 6 = 110 which is 3 bits, but what if we want to make it more bits?

3. "Extending the Sign"

6 = 110 (3 Bits) but if we add zeros
6 still equals 00000110 (8 Bits)

The 8 bit of 12 = 00001100
so for negative we literally flip it

 12 = 00001100
-12 = 11110011 (reverse all the 1's and 0's)

and then add 1

  
 11110011
 +      1 
 ______________
11110100

then you can do it in reverse

-12 = 11110100
 12 = 00001011
 +           1
 ______________
 00001100

 
 5 =  00000101
      11111010
      +      1
      ____________
      11111011
      = -5

7 = 00000111
    Flip the bits
    11111000
    +     1
    ____________
    11111001
    =  - 7

 


https://www.hackerrank.com/challenges/30-binary-numbers/tutorial

*/