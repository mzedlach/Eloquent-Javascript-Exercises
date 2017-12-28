//2.1 Looping a triangle
//
//Write a loop that makes seven calls to console.log to output the following
//triangle:
//#
//##
//###
//####
//#####
//######
//#######

// My Solution
var hash = "";
for (num=1 ; num<=7 ; num ++) {
  hash += "#";
  console.log(hash);
}


// Textbook Solution
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);
