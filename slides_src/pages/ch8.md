---
layout: section
---

# Statement-Level Control Structures


---
layout: two-cols
---

::left::

```c 
#include <stdio.h>
//chapter 9
double addDouble(double a, double b){
    try{ // chapter 14 (try-catch)
        a - a/b;
    }catch(...){
        cout << "divide by zero";
    }
    return a | b;
}
int main(){
    // chapter 5,6
    int x = 5;
    double y;

    // chapter 7
    x = y * 6 + 1 * x;

    // chapter 8
    if(x<10){
        // chapter 9
        y = addDouble(2.5, 1.2);
    }
    // chapter 9
    return 0;
}
```

<Box v-drag="[86,364,196,96]" shape="s-s-1-100" color="red-light" width="300px" />

::right::

<div class="grid grid-cols-1">
    <div class="p-2">

**Chapter 5.** Names, Bindings, and Scopes
   
   </div>
    <div class="p-2">

**Chapter 6.** Data Types

</div>
    <div class="p-2">

**Chapter 7.** Expressions and Assignements Statements

</div>
    <div class="border border-red-500 bg-neutral-100 p-2">

**Chapter 8.** Statement-Level Control Structures
</div>
    <div class="p-2">

**Chapter 9.** Subprograms
</div>
</div>

---

# Contents

<Toc minDepth="2" maxDepth="3" columns="2"/>


---

## Introduction (1.)

**Control Statements**

Statements that provide these kinds of capabilities:
- Selecting among alternative control flow paths (of statement execution)
- Causing the repeated execution of statements or sequence of statemetns

**Control Structure**

A control statement and the collection of statements whose execution it controls.
- Multiple Entries
- Multiple Exists

---

## Selection Statements (2.)

A selection statement provides the means of choosing between two or more execution paths in a program.
  - Two-way selection
  - N-way selection or multiple selection
  

---

### Two-Way Selection Statements (2.1)

``` 
if control_expression
  then clause
  else clause
```

---

#### Design Issues (2.1.1)

For two-ways selectors can be summarized as follows:
  - What is the form and type of the expression that controls the selection? (2.1.2)
  - How are the then and else clauses specified? (2.1.3)
  - How should the meaning of nested selectors be specified? (2.1.4)

---

#### The Control Expression (2.1.2)

The form of control expression are:

- C89
```
if(arithmetic_expression) {
   // statement(s) will execute if the boolean expression is true
} else {
  // statement(s) will execute if the boolean expression is false
}
```

- C99,C++
```
if(boolean_expression or arithemtic_expression) {
   // statement(s) will execute if the boolean expression is true
} else {
  // statement(s) will execute if the boolean expression is false
}
```

---

- Ruby
```
if conditional [then]
   code...
[elsif conditional [then]
   code...]...
[else
   code...]
end
```

---

#### Clause Form (2.1.3)

- In many languages, the `then` and `else` clauses appear as either single statements or compound statements.

- In Perl, all clauses must be delimited by braces `{}` (they must be compounded even if there is only 1 statement)

```perl
my $a = 1;
if($a==1){
  print("Hello");
}
```

- Python uses indentation to define clauses and use colon `:` as then clause

```python
if x > y:
    x = y
    print "case 1"
```

---

#### Nesting Selectors (2.1.4)

The two-way selector statement has ambiguous grammar:

```
<if_stmt> → if <logic_expr> then <stmt>
             | if <logic_expr> then <stmt> else <stmt>
```

- The selection statement is nested in the then clause of a selection statement, it is not clear with which if an `else` clause should be associated. This is a problem of the semantics of selection statements (The Dangling Else).

```java
if (sum == 0) // (1)
  if (count == 0) // (2)
    result = 0;
else // which if clause (1) or (2) are match?
  result = 1;
```

- The most of imperative languages uses the static sematic rule to provide the disambiguation.
- The `else` clause is always paired with the nearest previous unpaired `then` clause.

---
layout: two-cols-title
---

::title::
- The Java, C, C++ and C# can ignore braces `{}` that might be ambigous (dangling else)
- But Perl is always require braces `{}` to avoid ambigous

::left::

**Case 1**

```c
if (sum == 0){
    if (count == 0){
        result = 0;
    }
} else {
    result = 1;
}
```

::right::

**Case 2**

```c

if (sum == 0){
    if (count == 0){
        result = 0;
    }
    else {
        result = 1;
    }
}
```

---
layout: two-cols-title
---

::title::
- Ruby uses `end` reserved word closes `if` and `else` clauses.

::left::

**Case 1**

```ruby
if sum == 0 then
  if count == 0 then
    result = 0
  else
    result = 1
  end
end
```

::right::

**Case 2**

```ruby
if sum == 0 then
  if count == 0 then
    result = 0
  end
else
  result = 1
end
```

---
layout: two-cols-title
---

::title::
- Python uses indentation to solve this problem

::left::

**Case 1**

```python

if sum == 0:
    if count == 0:
        result = 0
    else:
        result = 1
```

::right::

**Case 2**

```python
if sum == 0:
    if count == 0:
        result = 0
else:
    result = 1
```

---

#### Selector Expression (2.1.5)

- In the functional languages ML, F#, and LISP, the selector is not a statement; it is an expression that results in a value. 

https://shorturl.at/bqsTS

```fsharp
let x = 5
let y =
    if x > 0 then x
    else 2 * x

printfn "%d" y
```

---

### Multitple-Selection Statements (2.2)

- The multiple-selection statement allows the selection of one of any number of statements or statement groups.

- The multiple selector can be built from two-way selectors and gotos, the resulting structures are cumbersome, unreliable and difficult to write and read.

---

#### Design Issues (2.2.1)

The following is a summary of these design issues:

- What is the form and type of the expression that controls the selection?
- How are the selectable segments specified?
- Is execution flow through the structure restricted to include just a single selectable segment?
- How are the case values specified?
- How should unrepresented selector expression values be handled, if at all?

---

#### Examples of Multiple Selectors (2.2.2)

- Allow the selection of one of any number of statements or statement groups
- Switch in C, C++, Java:

```
switch (expression) {
	case const_expr_1: stmt_1;
	…
	case const_expr_n: stmt_n;
	[default: stmt_n+1]
}

```

---

[Switch in C, C++, Java]{class="text-2xl"}

- Design choices for C’s switch statement
  - Control expression can be only an integer type
  - Selectable segments can be statement sequences, blocks, or compound statements
  - Any number of segments can be executed in one execution of the construct (there is no implicit branch at the end of selectable segments); break is used for exiting switch → reliability of missing break
  - default clause is for unrepresented values (if there is no default, the whole statement does nothing)

---
layout: two-cols-title
---

::title::
[Switch vs. If-Else If-Else]{class="text-2xl"}

::left::
```cpp
using namespace std;
 
int main () {
    int a;
   cin >> a;  
   switch(a)
   {
     case  10 : 
              cout << "Value of a is 10" << endl;
              break;
     case 20 :
            cout << "Value of a is 20" << endl;
            break;
     case 30 : 
            cout << "Value of a is 30" << endl;
            break;
     default:
            cout << "Value of a is not matching" << endl;
   }
   cout << "Exact value of a is : " << a << endl;
 
   return 0;
}
```

::right::

```cpp
#include <iostream>
using namespace std;
int main () {
    
   int a;
   cin >> a;
   if( a == 10 ) {       
      cout << "Value of a is 10" << endl;
   } else if( a == 20 ) {
      cout << "Value of a is 20" << endl;
   } else if( a == 30 ) {       
      cout << "Value of a is 30" << endl;
   } else {
      cout << "Value of a is not matching" << endl;
   }
   cout << "Exact value of a is : " << a << endl;
 
   return 0;
}
```

---
layout: two-cols-title
---

::title::
[Duff's device]{class="text-2xl"}

- This code uses a very unusual and confusing control flow pattern called "Duff's device" - mixing switch cases with if-else statements. It's legal C++ but very bad practice!

::left::
```cpp
#include <iostream>
using namespace std;
 void process_prime(int x)
 { cout << "process_prime(x) -> " <<  x << endl;}
 void process_composite(int x)
 { cout << "process_composite(x) -> " <<  x << endl; }
 bool prime(int x) {
     if( x >= 0 && x <= 7) {
         cout << "prime(x) -> true" <<  x << endl;
        return true ;
     }
    else {
        cout << "prime(x) -> false" <<  x << endl;
        return false;
     }
 }

```

::default::
https://www.geeksforgeeks.org/c/duffs-device-work/

::right::
```cpp
int main () {
    int x=1;
    while(x!=-1)
    {
        cout << "input x = " ;
        cin >> x;          
        switch (x) 
          default:
            if (prime(x))
        	   case 2: case 3: case 5: case 7: 
                process_prime(x); 
            else
              case 4: case 6: case 8: 
              case 9: case 10:
                process_composite(x); 
    }
   return 0;
}

```
---

[Java Example]{class="text-2xl"}

```java
public class MyClass {
    public static void main(String args[]) {
      int x=2,z=2;
        switch (x) 
        {
            case 1:
                System.out.println("Sum of x+y = " + z);
                break;
            case 2:
                System.out.println("Sum of x+y1 = " + z);
              //  break;
            case 3:
                System.out.println("Sum of x+y2 = " + z);
                break;
        }
      System.out.println("Sum of x+y = " + z);
    }
}
```

---

[Static Semantics Rule]{class="text-2xl"}

- It has a static semantics rule that disallows the implicit execution of more than one segment
  - Each selectable segment must end with an unconditional branch (goto or break)

<div class="mx-auto w-[500px]">

![goto switch and label](/images/ch8/goto_switch_label.png)
</div>

---
layout: two-cols-title
---

::title::
[For C#]{class="text-2xl"}

- The control expression and the case constants can be strings

::left::

- Example 1

```csharp
switch (value) {
	case -1:	Negatives++;	break;
	case 0:	Zeros++;		goto case 1;
	case 1:	Positives++;	break;
	default: Console.WriteLine(“!!!\n”); 
}
```

- Example 2

```csharp

using System;
public class MainClass {     
  public static void Main() { 
    for(int i=1; i <= 5; i++) { 
      switch(i) { 
        case 1: 
          Console.WriteLine("In case 1 , i={0}", i ); 
          goto case 3; 
```

::right::
```csharp
        case 2: 
          Console.WriteLine("In case 2, i={0}", i); 
          goto case 1; 
        case 3: 
          Console.WriteLine("In case 3, i={0}", i); 
          goto default; 
        case 4: 
          Console.WriteLine("In case 4, i={0}", i); 
          break; 
        default: 
          Console.WriteLine("In default, i={0}", i); 
          break; 
      } 
      Console.WriteLine(); 
    } 
  } 
}
```

---

[For Swift]{class="text-2xl"}
- More reliable than C’s switch 
  - Once a stmt_sequence execution is completed, control is passed to the first statement after the case statement

```swift
let marks = 80

switch marks {	    
  case 90...100:
    print("Wonderful")
	    
  case 70..<90:
    print("Very Good")
    
    case 35..<70:
    print("Scope of improvement")
    
  case ..<35:
    print("Need immediate attention !")
	    
  default:
    print("Invalid Marks")
}

```

---
layout: two-cols-title
---

::title::
#### Implementing Multiple Selection Structures (2.2.3)

- show how switch statements work internally and different optimization strategies.

::left::
1. Basic Translation of Switch

```c
switch (expression) {
    case constant₁: statement₁; break;
    case constant₂: statement₂; break;
    ...
    case constantₙ: statementₙ; break;
    default: statementₙ₊₁;
}
```

::right::
Compilers translates to:

```c
Code to evaluate expression into t
goto branches

label₁: code for statement₁
        goto out
...
labelₙ: code for statementₙ
        goto out
default: code for statementₙ₊₁
        goto out

branches: if t = constant_expression₁ goto label₁
          ...
          if t = constant_expressionₙ goto labelₙ
          goto default
out:
```

---
layout: two-cols-title
---

::title::
[Flow:]{class="text-2xl"}


::left::
1. Evaluate the switch expression → store in t
2. Jump to `branches` section
3. Test `t` against each constant
4. When match found, jump to corresponding label
5. Execute that case's code
6. Jump to `out` (exit switch)

::right::

```c
Code to evaluate expression into t
goto branches

label₁: code for statement₁
        goto out
...
labelₙ: code for statementₙ
        goto out
default: code for statementₙ₊₁
        goto out

branches: if t = constant_expression₁ goto label₁
          ...
          if t = constant_expressionₙ goto labelₙ
          goto default
out:
```
---

[For optimization]{class="text-2xl"}

The "branches" section can be implemented in different ways depending on the case values:

**Strategy 1: Linear Search (if-else chain)**

```c
branches: if t == constant₁ goto label₁
          if t == constant₂ goto label₂
          if t == constant₃ goto label₃
          ...
          goto default
```

When used: 
- Few cases (< 10)
- Speed: Checks each case one by one - average half the cases before finding match
- Problem: Slow for many cases

---

**Strategy 2: Hash Table**

```c
branches: index = hash(t)
          goto jump_table[index]
```

Creates a hash table mapping case values to labels:
```c
hash(5) → 2 → label₂
hash(10) → 7 → label₇
```

- When used: Many cases (≥ 10), values spread out
- Speed: Nearly constant time (fast!)

---

**Strategy 3: Binary Table**

```c
branches: // Binary search on sorted case values
          low = 0, high = n-1
          while (low <= high) {
              mid = (low + high) / 2
              if (t == cases[mid]) goto labels[mid]
              if (t < cases[mid]) high = mid - 1
              else low = mid + 1
          }
          goto default
```

- When used: Many cases, especially with ranges (like Ruby: case 1..10)
- Speed: log₂(n) comparisons

---

**Strategy 4: Array Indexing(Best!)**

```c
branches: goto jump_table[t]
```

- When used: Case values are dense and consecutive

```c
case 0: ...
case 1: ...
case 2: ...
case 3: ...
```

- Create Arrays
```c
jump_table[4] = {label₀, label₁, label₂, label₃}
```

- Speed: Direct jump! Fastest method!

---

[Example with gaps:]{class="text-2xl"}

```c
case 5: doA();
case 6: doB();
case 7: doC();
case 8: doD();
```

**Array:**

```c
jump_table[9] = {NULL, NULL, NULL, NULL, NULL, 
                 label₅, label₆, label₇, label₈}
                 // indices 0-4 unused
```

---
layout: two-cols-title
---


::title::
#### Multiple Selection Using if (2.2.4)

::left::

- Multiple selectors can appear as direct extensions to two-way selectors, using else-if clauses, for example in Python:

```python
if count < 10 :
	bag1 = True
elif count < 100 :
    bag2 = True
elif count < 1000 :
    bag3 = True

```

::right::

- More readable than deeply nested two-way selectors!
- Can compare ranges

<div class="mx-auto w-[250px]">

![Multiple Selection If](/images/ch8/multiple_selection_if.png)
</div>

---
layout: two-cols-title
---

::title::
[Example]{class="text-2xl"}

::left:: 

**Nested style:**

```cpp
cin >> option; cost = 10;
if (option==1) {
    cost += 10;
} else if (option==2) {
    cost += 20;
    } else if (option==3) {
        cost += 30;
    }
```

::right::

**Flat/Sequential style:**

```cpp
cin >> option; cost = 10;
if (option==1)
    cost += 10;
else if (option==2)
    cost += 20;
else if (option==3)
    cost += 30;
```

---
layout: two-cols-title
---

::title::

[Example 2]{class="text-2xl"}

::left::

<div class="mx-auto w-[250px]">

![Multiple Selection If](/images/ch8/multiple_selection_if.png)
</div>


::right::

**Add `else` case:**

```cpp
cin >> option; cost = 10;
if (option==1) {
    cost += 10;
} else if (option==2) {
    cost += 20;
} else if (option==3) {
    cost += 30;
} else {           // DEFAULT case
    cost += 40;     // If option is 4, 5, 99, anything else
}
```

<div class="ns-c-tight">

**Flowchart explanation:**

- Test condition 1 → if true, run code block 1
- If false, test condition 2 → if true, run code block 2
- If false, test condition 3 → if true, run code block 3
- If all false → run default code (cost += 40)
</div>


---
layout: two-cols-title
---

::title::
[Example: Convert Nested If to Flat]{class="text-2xl"}

::left::

<Line :x1="0" :y1="0" :x2="50" :y2="50" :width="2" color="red" v-drag="[151,100,40,40]" />
<Line :x1="0" :y1="0" :x2="50" :y2="50" :width="2" color="red" v-drag="[40,202,40,40]" />
<Line :x1="0" :y1="0" :x2="50" :y2="50" :width="2" color="red" v-drag="[42,241,40,40]" />
<Line :x1="0" :y1="0" :x2="50" :y2="50" :width="2" color="red" v-drag="[41,131,40,40]" />
<Line :x1="0" :y1="0" :x2="50" :y2="50" :width="2" color="red" v-drag="[43,168,40,40]" />
<Line :x1="0" :y1="0" :x2="50" :y2="50" :width="2" color="red" v-drag="[91,200,40,40]" />
<Line :x1="0" :y1="0" :x2="50" :y2="50" :width="2" color="red" v-drag="[201,175,40,40]" />
<Line :x1="0" :y1="0" :x2="50" :y2="50" :width="2" color="red" v-drag="[198,138,40,40]" />
```cpp

cin >> option; cost = 10;
if (option==1) {
    cost += 10;
} else if (option==2) {
    cost += 20;
} else if (option==3) {
    cost += 30;
} else {           
    cost += 40;    
}
```

::right::

```cpp
cin >> option ;  cost = 10;
if  ( option==1 )  
    cost += 10 ;
else if ( option==2 )  
    cost += 20 ;
else if ( option==3 )  
    cost += 30 ;
else
    cost += 40 ;

```

---
layout: two-cols-title
---

::title::
## Iterative Statements (3.)

::left::
- The repeated execution of a statement or compound statement is accomplished either by iteration or recursion 

The designer must answer these:

- How is the iteration controlled?
  - Use logical, counting or both.
- Where should the control mechanism appear in the loop statement?
  - It can be anywhere but, the mechanism is executed and affects before or after execution of the statement's body. 

::right::
<div class="mx-auto w-[300px]">

![Iteration](/images/ch8/iteration.png)
</div>

---

https://onlinegdb.com/sjx6nWLT6m

```c
#include <stdio.h>

int main(){
    
    int i=0;
    int j=5;
    
    loop:
        printf("i = %d\n", i);
        i++;
        goto check;
    check:
        if(i<j) goto loop;
    
    return 0;
}
```

---

### Counter-Controlled Loops (3.1)

- A counting iterative statement has a loop variable, and a means of specifying the **loop parameters**: [initial, terminal, stepsize]{class="text-red-500"} values


---

#### Design Issues (3.1.1)

- Design Issues:
  - What are the type and scope of the loop variable?
  - Should it be legal for the loop variable or loop parameters to be changed in the loop body?
---

#### The for Statement of the C-Based Languages (3.1.2)

```c
for ([expr_1] ; [expr_2] ; [expr_3])
    statement
```

- The expressions can be whole statements or statement sequences, separated by commas
  - The value of a multiple-statement expression is the value of the last statement in the expression
  - If second expression is absent, it is an infinite loop

- Design choices:
  - No explicit loop variable → the loop needs not count
  - Everything can be changed in the loop
  - 1st expr evaluated once, others with each iteration

---

```cpp
#include <iostream>
int main(){
    int a;
    for(a = 10;a<=20;a++){
        std::cout << "value of a: \n" << a;
    }
    return 0;
}
```
---

```cpp
#include <iostream>

using namespace std;
int xrandom() {
    return 15;
}
int main()
{
    int b=xrandom();
    int a;
    for(a = 10 ; a < 20 && a <= b ; a++) {
        cout << "\n do someting:" << a ;
    }
    cout << "\n exit value of a: " << a ;
    cout << "\n random of b: " << b ;
    
    return 0;
}

```

---
layout: two-cols-title
---
::title::
[Pascal vs. C]{class="text-2xl"}
::left::
```pascal
program forLoopbreak;
var
   a: integer;
   b: integer; 
   function random():integer;
   begin
    random := 15;
   end;
begin
   b:= random();
   for a := 10  to 20 do
   begin
        if( a > b) then
        break;
        
      writeln(' do someting: ', a);
   end;

   writeln('exit value of a: ', a);
   writeln('random of b: ', b);
end
```

::right::

```c
#include <iostream>

using namespace std;
int xrandom() {
    return 15;
}
int main()
{
    int b=xrandom();
    int a;
    for(a = 10 ; a < 20 && a <= b ; a++) {
        cout << "\n do someting:" << a ;
    }
    cout << "\n exit value of a: " << a ;
    cout << "\n random of b: " << b ;
    
    return 0;
}
```

---

[For loop in C++]{class="text-2xl"}

- C++ differs from earlier C in two ways:
	- The control expression can also be Boolean
	- Initial expression can include variable definitions (scope is from the definition to the end of loop body)
- Java and C#
	- Differs from C++ in that the control expression must be Boolean

```cpp
for (count1 = 0, count2 = 1.0;
     count1 <= 10 && count2 <= 100.0;
     sum = ++count1 + count2, count2 *= 2);
```
---

```cpp
#include <iostream>

using namespace std;
int xrandom() {
    return 15;
}
int main()
{
    int b=xrandom();
    int a;
    for(a = 10 ; a ; a++) {
        cout << "\n do someting:" << a ;
    }
    cout << "\n exit value of a: " << a ;
    cout << "\n random of b: " << b ;
    
    return 0;
}

```

---

#### The for Statement of Python (3.1.3)

```python
for loop_variable in object:
    # loop body
[else:
    # else clause
]
```

```python
for x in range(2):
  print(x)
else:
  print("Finally finished!")

print("end loop")

```

```python
for x in range(6):
  if x == 3: 
    break
  print(x)
else:
  print("Finally finished!")
```
---

[For in Swift]{class="text-2xl"}

```swift
for i in 1...3  {
    print(i)
}
```

```swift
print("Players gonna ") 
 for _ in 1...5 { 
    print("play") 
}
```

```swift
for i in 1...5  where i == 2 || i == 3 {
    print(i)
}

```

---

#### Counter-Controlled Loops in Functional Languages (3.1.4)

- In imperative languages use a counter variable to keep state.
- But the functional languages uses recursion function with parameter to keep state.

https://shorturl.at/ZH7zA

```fsharp
let rec forLoop loopBody reps =
    if reps <= 0 then
        ()
    else
        loopBody()
        forLoop loopBody (reps - 1)

let printHi() = printf "Hi! "
forLoop printHi 3
```

---
layout: two-cols-title
---

::title::
### Logically Controlled Loops (3.2)

- Repetition control based on Boolean expression
- C and C++ have both pretest and posttest forms, and control expression can be arithmetic:
- Java is like C, except control expression must be Boolean (and the body can only be entered at the beginning -- Java has no `goto`)

::left::
```
while(ctrl_expr)
  loop body
```

::right::

```
do
  loop body
while (ctrl_expr)
```
---
layout: two-cols-title
---

::title::

[Example]{class="text-2xl"}

```csharp
using System;
class HelloWorld {
  static void Main() {
    int sum = 0;
    int indat = Int32.Parse(Console.ReadLine());
    while (indat >= 0){
      sum += indat;
      indat = Int32.Parse(Console.ReadLine());
    }
  }
}
```

```csharp
using System;
class HelloWorld {
  static void Main() {
    int value = Int32.Parse(Console.ReadLine());
    int digits = 0;
    do {
      value /= 10;
      digits++;
    } while(value>0);
  }
}
```
---

### User-Located Loop Control Mechanisms (3.3)

- Programmers decide a location for loop control (other than top or bottom of the loop)
- Simple design for single loops (e.g., `break`)
- C , C++, Python, Ruby, C# have unconditional unlabeled exits (`break`), and an unlabeled control statement, `continue`, that skips the remainder of current iteration, but not the loop 
- Java and Perl have unconditional labeled exits (`break` in Java, `last` in Perl) and labeled versions of `continue`

---
layout: two-cols-title
---
::title::
[break Statement]{class="text-2xl"}
- Most languages. such as C/C++,java, 
the break statement terminates the loop when it is encountered.

::left::

```js
for(i=0;true;i++){
  console.log(i);
  if(i<5){
    break;
  }
}
```

::right::

```js
i=0;
while(true){
  console.log(i);
  i++;
  if(i<5){
    break;
  }
}
```

---

[C++: break]{class="text-2xl"}

```cpp
#include <iostream>
using namespace std;

int main() {
    int number;
    int sum = 0;
    while (true) {
        // take input from the user
        cout << "Enter a number: ";
        cin >> number;
        // break condition
        if (number < 0) {
            break;
        }
        // add all positive numbers
        sum += number;
    }
    // display the sum
    cout << "The sum is " << sum << endl;
    return 0;
}
```

---

[Java: break]{class="text-2xl"}

```java
public class Main
{
	public static void main(String[] args) {
		  for (int i = 0; i < 10; i++) {
            // Terminate the loop when i is 5
            if (i == 5)
                break;
            System.out.println("i: " + i);
        }
        System.out.println("Out of Loop");
	}
}

```

---

[Swift: Break label]{class="text-2xl"}

```swift
outerloop: for i in 1...5{

  innerloop: for j in 1...5 {

    if j == 3 {
      print("before i = \(i), j = \(j)")
      break outerloop
    }

    print("i = \(i), j = \(j)")
  }
}
print("end ")

```
---

[Java: Break label]

```java
public class Main
{
	public static void main(String[] args) 
    {
        int i=-1,j=-1;
        // First label
        first:
        for ( i = 0; i < 3; i++) {
        // Second label
        second:
            for ( j = 0; j < 3; j++) {
                if (i == 1 && j == 1) {
 
                    // Using break statement with label
                    System.out.println( "before break -> i = " +i + ", j = " + j);
                    break first;
                }
                System.out.println( "i = " +i + ", j = " + j);
            }
        }
        System.out.println( "after break -> i = " +i + ", j = " + j);
	}
}
```
---
layout: two-cols-title
---

::title::
[Python: break]{class="text-2xl"}

::left::

```python
for x in range(2):
  print(x)
else:
  print("Finally finished!")

print("end loop")

```

::right::

```python
for x in range(6):
  if x == 3: break
  print(x)
else:
  print("Finally finished!")
```

---
layout: two-cols-title
---

::title::
[continue Statement]{class="text-2xl"}

- The `continue` statement is used to skip the current iteration of the loop and the control of the program goes to the next iteration

::left::

```js
for(i=0;i<10;i++){
  if(i%2==0){
    continue;
  }
}
````

::right::

```js
i=0;
while(i<10){
  if(i%2==0){
    continue;
  }
}
````
---

[continue in C/C++,C#]{class="text-2xl"}

```cpp
#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 5; i++) {
        // condition to continue
        if (i == 3) {
            continue;
        }

        cout << i << endl;
    }

    return 0;
}


```

---

### Iteration Based on Data Structures (3.4)

- Number of elements in a data structure control loop iteration
- Control mechanism is a call to an iterator function that returns the next element in the data structure in some chosen order, if there is one; else loop is terminated
- C's for statement can be used to build a user-defined iterator:

```
for(p=root; p==NULL; traverse(p)){}
```

---
layout: two-cols-title
---

::title::
[PHP vs. Java]{class="text-2xl"}

::left::
```php
<?php
$list = array("apple", "banana", "cherry", "date");

reset($list);
print("1st: ".current($list)."<br />");
while($current_value = next($list))
    print("next: ".$current_value."<br />");
?>
```

::right::

```java
import java.util.ArrayList;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        var tokens = new ArrayList<>(Arrays.asList("One", "Two", "Three"));
        for(String token: tokens) {
            System.out.println(token);
        }
    }
}
```
---

[Python]{class="text-2xl"}

```python
fruits = ["apple", "cake", "banana", "cherry"]
count = 0;
for x in fruits:
  if x == "cake":
    continue
  print(x)
  count+=1
  if x == "banana":
    break
print (count);
```
---

[C#]{class="text-2xl"}

```csharp
using System;
using System.Collections;
class HelloWorld {
  static void Main() {
   		// adding elements using ArrayList.Add() method
		var arlist1 = new ArrayList();
		arlist1.Add(1);
		arlist1.Add("Bill");
		arlist1.Add(" ");
		arlist1.Add(true);
		arlist1.Add(4.5);
		arlist1.Add(null);
		foreach(var i in arlist1) {
			Console.WriteLine( i );
		}
  }
}
```

---

[Swift]{class="text-2xl"}

```swift
let languages = ["Swift", "Java", "Go", "JavaScript"]

for language in languages where language != "Java"{
  print(language) 
}
```

---

[JavaScript]{class="text-2xl"}

```js
tokens = ["one","two","three"]

for(let token of tokens){
    console.log(token)
}
```

```js
const person = {fname:"John", lname:"Doe", age:25};
let text = "";
for (let x in person) {
  text += person[x] + " ";
}
```

---

## Unconditional Branching (4.)

- Transfers execution control to a specified place in the program, e.g., goto
- Major concern: readability
  - Some languages do not support goto statement (e.g., Java)
  - C# offers goto statement (can be used in switch statements)
- Loop exit statements are restricted and somewhat hide away goto’s

---
layout: two-cols-title
---

::title::
https://onlinegdb.com/Hw2Ke1R85

::left::

```cpp
#include<iostream>
using namespace std;
void checkGreater()
{
    int i, j;
    i=2;j=5;
    if(i>j)
        goto iGreater;
    else
        goto jGreater;
    iGreater:
        cout<<i<<"\n i is greater";
        goto end;
    jGreater:
    cout<<j<<"\n j is greater";
end:;
     cout<<"\n end" ;
    return;
}
int main()
{
    checkGreater();
    return 0;
}

```

<ArrowDraw color="red" v-drag="[522,96,40,40,116]"/>
<ArrowDraw color="red" v-drag="[525,230,40,40,248]"/>

::right::


```
goto label;
...
...
label:
...
...
```

```
label:
...
...
goto label;
...
...
```
---

https://onlinegdb.com/tZI0grDB5

```cpp
#include <iostream>
using namespace std;
int main()
{
    float num, average, sum = 0.0;
    int i, n;
    cout << "Maximum number of inputs: ";
    cin >> n;
    for(i = 1; i <= n; ++i)
    {
        cout << "Enter n" << i << ": ";
        cin >> num;
        if(num < 0.0)
        {
           // Control of the program move to jump:
            goto jump;
        } 
        sum += num;
    }
jump:
    average = sum / (i - 1);
    cout << "\nAverage = " << average;
    return 0;
}

```

---
layout: full
---

<div class="mx-auto w-[250px]">

![controversy](/images/ch8/controversy.png)
</div>

---
layout: two-cols-title
---

<Admonition v-drag="[14,478,953,67]" title="Info" color="teal-light" width="300px">
Controversy = a serious disagreement or debate where people have strong, opposing opinions about something.
</Admonition>

::title::
# The controversy: 

::left::

1. Dijkstra (1968) - Famously wrote "Go To Statement Considered Harmful," arguing that goto makes programs:
  - Hard to follow logically
  - Difficult to understand and debug
  - Prone to creating "spaghetti code" (tangled, messy program flow)
  
::right::

2. Donald Knuth (1974) - Took a more nuanced view, arguing that:
  - In some cases, goto can make code more efficient
  - Complete elimination isn't always necessary
  - Sometimes goto can actually be clearer than alternatives

---

<div class="mx-auto w-[210px]">

![example](/images/ch8/example_goto.png)
</div>
---

https://onlinegdb.com/8MX4zlOgL

```cpp
#include <iostream>
using namespace std;
int main()
{
    float num, average, sum = 0.0;
    int i, n;
    cout << "Maximum number of inputs: ";
    cin >> n;
    if( n > 1000)
     goto inloopfor;
    for(i = 1; i <= n; ++i)
    {
    inloopfor :;
        cout << "Enter n" << i << ": ";
        cin >> num;
        if(num < 0.0)
        { goto jump; } 
        sum += num;
    }
jump:     
    average = sum / (i - 1);
    cout << "\nAverage = " << average;
    return 0;
}
```
---

- Uncomment Goto inloopfor & inloopfor label
https://onlinegdb.com/N7MwKb4xh

```csharp
using System;
class HelloWorld {
  static void Main() {
   float num=0; float average =0; float sum = 0;
    int i, n;
    Console.WriteLine ( "Maximum number of inputs: ");
    n = Convert.ToInt32(Console.ReadLine());
    if( n > 1000) {
     // goto inloopfor;
      Console.WriteLine  ( "n > 1000 ");
    }
    for(i = 1; i <= n; ++i)
    {
        //inloopfor :;
         Console.WriteLine  ( "Enter n : " );
        n = Convert.ToInt32(Console.ReadLine());
        if(num < 0.0)
        { goto jump; } 
        sum += num;
    }
jump:     ;
    average = sum / (i - 1);
  }
}

```


---

## Guarded Commands (5.)

- Designed by Dijkstra
- Purpose: to support a new programming methodology that supports verification (correctness) during development
- Basis for two linguistic mechanisms for concurrent programming (in CSP and Ada)
- Basic Idea: if the order of evaluation is not important, the program should not specify one

---

### Selection Guarded Command

```
if <Boolean exp> -> <statement>
[] <Boolean exp> -> <statement>
 ...
[] <Boolean exp> -> <statement>
fi
```

- Semantics: 
  - Evaluate all Boolean expressions
  - If > 1 are true, choose one non-deterministically
  - If none are true, it is a runtime error
  - Prog correctness cannot depend on statement chosen

---
layout: two-cols-title
---

::title::
- Key Difference

::left::

```ada
if x > 0 then
  y := y + 1
elif x = 0 then
  y := 0
else
  y := y - 1
end if
```

::right::

```
if x > 0 -> y := y + 1
[] x = 0 -> y := 0
[] x < 0 -> y := y - 1
```

- ถ้ามีหลาย Guard และมี Boolean Expression มีค่าเป็นจริงพร้อมกัน จะสามารถเลือกได้ทุก Path

---

```
if buffer_not_full -> produce()
[] buffer_not_empty -> consume()
fi
```

- ถ้า buffer ทั้ง **ไม่เต็มและไม่ว่าง** → เลือกได้ทั้ง `produce()` หรือ `consume()`
- ไม่ต้องกำหนดว่าต้องเลือก `produce()` ก่อน `consume()` เสมอ → ลด bias ในการออกแบบ

---
layout: two-cols-title
---

::title::

[Example]{class="text-2xl"}

::left::

https://onlinegdb.com/nKC6ffutN

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int main() {
    int x, y = 0;
    printf("Enter x: ");
    scanf("%d", &x);

    int choice = -1;
    if (x > 0 && x == 0 && x < 0) {
        // logically impossible all at once
    }

```

::right::
```c
    // Determine which guards are true
    int guards[3], count = 0;
    if (x > 0) guards[count++] = 1;
    if (x == 0) guards[count++] = 2;
    if (x < 0) guards[count++] = 3;

    srand(time(NULL));
    if (count > 0) {
        choice = guards[rand() % count];
        switch(choice) {
            case 1: y = y + 1; break;
            case 2: y = 0; break;
            case 3: y = y - 1; break;
        }
    }
    printf("y = %d\n", y);
    return 0;
}
```
---

### Loop Guarded Command

```
do <Boolean> -> <statement>
[] <Boolean> -> <statement>
 ...
[] <Boolean> -> <statement>
od
```

- Semantics: for each iteration
  - Evaluate all Boolean expressions
  - If more than one are true, choose one non-deterministically; then start loop again
  - If none are true, exit loop

---
layout: two-cols-title
---

::title::
### Swift Guard Command

::left::

- Condition is true

<ArrowDraw color="green" v-drag="[210,216,140,52,180]" />

```swift
guard true else {
  // If false do these
  // some code
  // some code
}
// If true do these
// code after guard
```
::right::

- Condition is false

<ArrowDraw color="red" v-drag="[677,153,140,52,180]" />

```swift
guard false else {
  // If false do these
  // some code
  // some code
}
// If true do these
// code after guard
```

---

- Example

https://onlinegdb.com/y05_xjRZg

```swift
var i = 2

while (i <= 10) {
    
  // guard condition to check the even number 
  guard i % 2 == 0 else {
   
     i = i + 1
    continue
  }

  print(i)
  i = i + 1
} 
```

---

- Example : Improve read ability

https://onlinegdb.com/WEHrc8eWZ

```swift
func anyValue(_ value:String?) -> String {
    guard let string = value else {
        return "no value"
    }
    return string
}
func anyValue2(_ value:String?) -> String {
    if let string = value {
        return string
    }
    return "no value"
}
print( anyValue("Hello, World!"))
print( anyValue(nil))
print( anyValue2("Hello, World!"))
print( anyValue2(nil))
```

---

## Conclusions (6.)

- Variety of statement-level structures
- Choice of control statements beyond selection and logical pretest loops is a  trade-off between language size and writability
- Functional and logic programming languages are quite different control structures
