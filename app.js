// value-1
// var a = 10;
//  10  - 9   + 9 - 9 - 8   + 8   + 9   - 10  - 10  + 10  - 9   + 9
// 0 answer
// var value1 = a++ - --a + a - a - --a + a++ + ++a - ++a - a++ + a++ - --a + a

//    value-2
// var value2 =
// 9   - 8   + 7   - 8   + 8   + 8   - 9   - 10  - 11  + 11  + 11  + 12  - 13
// answer-7
// --a - --a + --a - ++a + a++ + a++ - ++a - ++a - ++a + a++ + a++ + ++a - ++a

// value-3
// var value3 = 
// 9   - 9   + 9 + 10  -10   + 10 + 10 -11
// answer-18
// --a - a++ + a + ++a - a-- + a + a++ - ++a;


// value-4
// var value4 = 
// 10  + 10  - 9   + 9 + 9   - 9   +  10  - 10
// answer-20
// a++ + a++ - --a + a + a-- - a-- + ++a - a;

// value-5
// var value5 =  
// 10  - 11  + 11  + 10  - 10 + 10 - 10  + 11
// answer-21
// a-- - ++a + a++ + --a - a + a++ - a-- + ++a;

// value-6
// var value6 =  
// 10  + 11  - 10  - 10  + 10  - 11  + 11 - 11 + 10
// answer-10
// a++ + ++a - --a - a++ + a-- - ++a + a - a++ + --a;

// value-7
// 

// value-8
// var value8 = 
// 10  - 9   + 10  - 10  + 10  + 9   - 9   + 10  + 10
// answer-31
// a++ - --a + ++a - a-- + a++ + --a - a++ + ++a + a;

// value-9
// var value9 = 
// 10  + 11  - 11  + 10  - 10  + 11  + 11  - 11  - 12
// answer-9
// a-- + ++a - a++ + --a - a-- + ++a + a++ - a-- - ++a;

// value-10
// var value10 = 
// 10  + 9   + 9   - 10  -  10 + 10 - 9  + 9   -9
// answer-9
// a++ + --a + a-- - ++a - a++ + a - --a + a++ - a;

