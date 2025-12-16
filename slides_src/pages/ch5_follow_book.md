---
layout: section
---

# Expressions and Assignment Statements

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

<Box v-drag="[68,306,180,52]" shape="s-s-1-100" color="red-light" width="300px" />

::right::

<div class="grid grid-cols-1">
    <div>Chapter 5. Names, Bindings, and Scopes</div>
    <div>Chapter 6. Data Types</div>
    <div class="border border-red-500">Chapter 7. Expressions and Assignements Statements</div>
    <div>Chapter 8. Statement-Level Control Structures</div>
    <div>Chapter 9. Subprograms</div>
</div>

---

# Contents

<Toc minDepth="2" columns="2"/>


---

## Introduction (1.)

Introduction to Expressions

- Expressions are the fundamental means of specifying computations in a programming language
  - Syntax: how expressions are written
  - Semantics: what expressions mean and how they are evaluated

- To understand expression evaluation, we must know:
  - Operator precedence (which operations are performed first)
  - Operator associativity (left-to-right or right-to-left evaluation)
  - Operand evaluation order (when operands are computed)

- These rules vary between programming languages

---

# Type of Expression

<Box v-drag="[399,234,329,78]" shape="s-s-0-100" color="white" >
X   =  ( Y+1*Z <= Z+10 ) and (A > B )
</Box>

<Box v-drag="[336,361,264,64]" color="blue-light" >

Arithmetic Expr. (+,/,*,- , mod)
</Box>

<Box v-drag="[576,134,225,41]" color="red-light" >

Boolean Expr. (and , or )
</Box>

<Box v-drag="[334,104,150,63]" color="green-light" >

Relational Expr. (==,<=,>=,!=)
</Box>

<ArrowDraw color="red" v-drag="[605,187,66,40,131]" />
<ArrowDraw color="red" v-drag="[446,184,90,40,64]" />
<ArrowDraw color="red" v-drag="[425,291,86,40,270]" />

---

# Type of Expression

- Arithmetic expression : 
    - An arithmetic expression is an expression that uses numbers and arithmetic operators and produces a numeric value.
    - Operator : +, / , *, mod 

- Relational expression : 
    - A relational expression compares two values and produces a boolean result (true or false).
    - Operator : ==,!= , >, < ,

- Boolean Expressions :
    - A boolean expression is an expression that evaluates to true or false, often using logical operators.
    - Operator :  AND , OR , not



---

Side Effects in Different Paradigms

Imperative Languages:
- Assignment statements change variable values (side effects)
- Expressions can modify program state during evaluation

```cpp
#include <iostream>
using namespace std;
int main(){
  int x = 5;
  x = x + 1;  // x is modified to 6
  cout << x << "\n";
  return 0;
}
```

---

Functional Languages:
- Variables are bound to values (immutable)
- No side effects from expression evaluation
- Values cannot be changed after binding

https://onlinegdb.com/2a43AxUxKr

```haskell
main = do
  let x = 5
  let x = x + 1 {- immutable, Recursive loop -}
  print x
```


https://onlinegdb.com/6p-RW3Tgs

```haskell
main = do
  let x = 5
  let y = x + 1 {- new binding, x unchanged -}
  print x
  print y
```
---

## Arithmetic Expressions (2.)

Components of arithmetic expressions:
- Operators (e.g., +, -, *, /, %)
- Operands (variables, constants, or sub-expressions)
- Parentheses (for grouping and overriding precedence)
- Function calls (e.g., sqrt(x), pow(a, b))

```
 (a + b) * sqrt(c) - d / 2
```

---

Types of Operators

Based on number of operands:

1. Unary operators (single operand)
   - Prefix notation: operator before operand
     Example: `-x, ++i, !flag`
   - Postfix notation: operator after operand
     Example: `i++, x--`

2. Binary operators (two operands)
   - Infix notation: operator between operands
     Example: `a + b, x * y, p / q`

3. Ternary operators (three operands)
   - Example: `condition ? expr1 : expr2`
     (only common ternary operator in most languages)

---

Implementation of Arithmetic Expressions

Hardware-level execution involves:

1. Fetch operands
   - Retrieve values from memory or registers
   - May involve multiple memory accesses

---

2. Execute arithmetic operation
   - Perform computation using ALU (Arithmetic Logic Unit)
   - Store result in register or memory

Example execution of: `result = a + b * c`
   - Step 1: Fetch `b` and `c` from memory
   - Step 2: Multiply `b * c` (temporary result)
   - Step 3: Fetch `a` from memory
   - Step 4: Add `a + (b*c)`
   - Step 5: Store in result

---

Design Issues for Arithmetic Expressions

1. Operator Precedence Rules
   - Which operators are evaluated first?
   - Example: `2 + 3 * 4 = ?`

---

The **operator precedence** rules are usually based on the **hierarchy of operator priorities**.
The **unary addition** is called the **identity operator** because it usually has no effect on its operand, while the **unary minus** causes side effects. For example, in Java and C#, unary minus also causes the implicit conversion of `short` and `byte` operands to `int` type.


https://onlinegdb.com/jZAyTK_ds3

```csharp
using System;
class HelloWorld {
  static void Main() {
    byte b = unchecked((byte)-1);  // OK: Explicit conversion from int to byte
    Console.WriteLine(b);           // Output: 255 (wraps around)
    Console.WriteLine(b.GetType()); // Output: System.Byte
  }
}
```

The `a + - b * c` is not legal.

To allow unary minus must use parenthesis `a + (-b) * c`.

---

The three expressions:

1. `- a / b`
2. `- a * b`
3. `- a ** b`

The first two cases (`-`, `/` and `*`), the precedence is no effect.

1. `(-a) / b` is the same as `- (a / b)`
2. `(-a) * b` is the same as `- (a * b)`

The last case `**` has effect the result.

3. `(-a) ** b` is different than `-(a ** b)`


---

- Example of precedence rule

![Precedence Rules](/images/ch5/precedence_rules.png)

---


2. Operator Associativity Rules
   - Left-to-right or right-to-left for same precedence?
   - Example: `8 - 4 - 2 = ?` (left: 2, right: 6)

---

- Example of assoicate rule (common language)

![Assoicate Rule](/images/ch5/assoicate_rule.png)

<Admonition color="amber-light" textAlign="left" title="Note">
	APL has single precedence, evaluate from right-to-left
</Admonition>
---

The computer cannot evaluate correctly and shows overflow instead. The actual result is -4294965296.

https://onlinegdb.com/09BHMaY25

```c
#include <stdio.h>
#include <limits.h>
int main() {
    int A = 1000; int B = INT_MIN;  // Most negative int value (-2147483648 on 32-bit)
    int C = 1000; int D = INT_MIN;  // Most negative int value
    printf("A = %d\n", A);
    printf("B = %d\n", B);
    printf("C = %d\n", C);
    printf("D = %d\n\n", D);
    // This will cause overflow
    int result = A + B + C + D;
    printf("A + B + C + D = %d\n", result);
    // Step by step to show where overflow occurs
    printf("Step by step:\n");
    int step1 = A + B;
    printf("A + B = %d\n", step1);
    int step2 = step1 + C;
    printf("(A + B) + C = %d\n", step2);
    int step3 = step2 + D;
    printf("((A + B) + C) + D = %d (OVERFLOW!)\n", step3);
    return 0;
}
```

---

Parenthesis also causes confusion and hard to read.

```c
// Unnecessary parentheses
int result = ((a) + (b)) * ((c) - (d));

// Cleaner with precedence rules
int result = (a + b) * (c - d);
```

---

Ruby Expression 

1. `a` is an object (everything in Ruby is an object)
2. `+` is a method defined in `a`'s class
3. `b` is passed as a parameter to the + method
4. The object referenced by `a` calls its + method with the object referenced by `b` as an argument

https://onlinegdb.com/l8tLqydBQ

```ruby
a = 3;
b = 5;
print(a+b);
print("\n");
print(a.+b);
```

---

Lisp Expression

In this expression, `+` and `*` are the names of functions.

https://onecompiler.com/commonlisp/4464sj7vu

```lisp
(print (let ((a 1) (b 2) (c 3)) 
         (+ a (* b c))))
```

---

3. Operand Evaluation Order
   - Variables are loaded from memory as operands
   - If an operand is a parenthesized expression, all of the operators it contains must be evaluated before its value can be used as an operand.

---

4. Side Effects in Operands
   - A side effect of a function occurs when the function modifies one of its parameters or a global variable.

   - A variable's value may depend on the order of evaluation when operands have side effects. This problem occurs in imperative languages but not in functional programming.

https://onlinegdb.com/Gj3hwDF5c

```c
#include <stdio.h>

int a = 5;
int fun1(){
    a = 17;
    return 3;
}
int main()
{
    printf("Before call: a = %d\n", a);
    a = a + fun1();
    printf("After call: a = %d\n", a);
    return 0;
}

```

---

The solutions are:
1. Disallow functional side effects. 
   - C/C++ would need major restrictions: no global variable access, no pass-by-reference, everything returns through return values.
   - This would make programming very inconvenient (having to return structs for multiple values).
   - Therefore, C/C++ allows side effects but does not specify evaluation order to allow compiler optimization.

---

2. Guarantee the order of evaluation of operands in expressions, which is implemented by Java (left-to-right).

https://onlinegdb.com/7gzusYWHXB

```java
public class Main
{
    static int a = 5;
    
    static int fun1(){
        a = 17;
        return 3;
    }
    
    public static void main(String args[]){
        a = a + fun1();
        System.out.println(a);
    }    
}
```

---

Referential transparency means:
A function call can be replaced with its return value without changing program behavior.

https://onlinegdb.com/YW2-7AiS1

```c
#include <stdio.h>

int fun2(int x){
    return x + 5;
}

int main()
{
    int x = 5;
    int y = fun2(x);

    printf("x = %d, y = %d\n", x, y);
    return 0;
}

```

<Admonition color="amber-light" textAlign="left" title="Note">
Programs with referential transparency are easier to understand because they avoid global variables and side effects.
</Admonition>


---

## Operator Overloading (3.)
   - Can users define operators for custom types?
   - Example: C++ allows, Java does not (except +)

---

https://onlinegdb.com/2fr0bnJrf0

```cpp
#include <iostream>
using namespace std;
class Complex {
private: double real, imag;
public:
    Complex(double r = 0, double i = 0) : real(r), imag(i) {}
    // Overload + operator
    Complex operator+(const Complex& other) {
        return Complex(real + other.real, imag + other.imag);
    }
    // Overload * operator
    Complex operator*(const Complex& other) {
        return Complex(real * other.real - imag * other.imag, real * other.imag + imag * other.real);
    }
    ostream& print(ostream& os) const {
        return os << real + imag << endl;
    }
};
ostream& operator<<(ostream& os, Complex& obj) { return obj.print(os); }
int main(){
    Complex c1(3, 4);
    Complex c2(1, 2);
    Complex c3 = c1 + c2;  // Now + works with Complex objects
    cout << c3;
    return 0;
}

```

---

```cpp
// Without operator overloading:
Complex c3;
c3 = c1.add(c2.multiply(c3));  // Hard to read

// With operator overloading:
Complex c3 = c1 + c2 * c3;     // Natural and intuitive
```

A user-defined overloading can be harmful to readability. For example, programmer can define + to mean multiplication.

---

## Type conversion (4.)

- A narrowing converion converts a value to a type that cannot store even approximations of all of the values of the original type. In Java, converting `double` to `float` is a narrowing conversion.

- A widening conversion converts a value to a type that can include at least approximations of all of the values of the origirnal type. In Java, converting `int` to `float` is a widening conversion.

In general, widening conversion is safer than narrowing, but in some conversions the precision may be lost. For example, 32-bit integers allow at least 9 decimal digits of precision. But 32-bit floating-point values have only about seven decimal digits of precision (because of the space used for the exponent).

The type of conversions can be either **explicit** or **implicit**.

---

Type Mixing (Mixed-Mode Expressions)
   - Can different types be mixed in expressions?
   - Example: 
      - `int` + `float` → automatic coercion to `float` which is an implicit type conversion that is initiated by the compiler or runtime system.
      - `int a = (int)5.0;` - this is an explicit type conversion (cast) requested by the programmer, not coercion. 
   - Coercion can reduce program reliability because errors may occur when the compiler automatically converts between incompatible types without the programmer's explicit approval.

   - Coercion can cause `overflow` or `underflow` when the converted value cannot fit in the target type
   - Other run-time errors from type operations include division by zero, which raises an exception.

---

## Relational and Boolean Expressions (5.)

- A relational operator is an operator that compares the values of its two oprands. 
- A relational expresion has two operands and one relational operator. The value of a relational expression is Boolean, except when Boolean is not a type included
in the language.

```js {monaco-run}
console.log("7" == 7) // coercion string to int
console.log("7" === 7) // no coercion
```


---

- The relational operators always have lower precedence than the arithmetic operators. `a + 1 > 2 * b` - the arithmetic expressions are evaluated first. 

```js {monaco-run}
let a = 0
let b = 3
console.log(a + 1 > 2 * b)
```

---

## Short-Circuit Evaluation (6.)

- A short-circuit evaluation of an expression is one in which the result is determined without evaluating all of the operands and/or operators.

- Most of C based languages, the Boolean type is short-circuit except Bitwise AND, OR.

```js {monaco-run}
let a = -1;
let b = 2;
console.log((a >= 0) && (b < 10));
```

---

- If the programmer wants `b` to be changed then `a <= b` but it is not use a short-circuit.

```js {monaco-run}
let a = 1;
let b = 1;

console.log((a > b) || ((b++) / 3))

console.log("b = ",b)
```

- use short circuit, the program will fail.

```js {monaco-run}
let a = 2;
let b = 1;

console.log((a > b) || ((b++) / 3))

console.log("b = ",b)
```
---

- Bitwise - no short-circuit

```js {monaco-run}
let count = 0;

// Logical AND - short-circuits
false && (count++);
console.log(count); // 0 - increment never happened

// Bitwise AND - no short-circuit
false & (count++);
console.log(count); // 1 - increment happened!
```

---

## Assignment Statements (7.)

- Simple Assignments
  - Mostly used `=` but in some languages, ALGOL 60 and Ada use `:=` to avoid confusion for assign value to variable.

---
layout: two-cols
---

::left::

- Conditional Targets

- Like Perl, PHP, C/C++, JavaScript, C# ,etc.

 https://onlinegdb.com/5gV2yswTgd 

```perl
$flag = 0;
($flag ? $count1 : $count2) = 0;
print "flag = ".$flag." count 1 = " . $count1 . 
" count2 = " . $count2 . "\n";

if($flag){
    $count1 = 0;
}else{
    $count2 = 0;
}
print "flag = ".$flag." count 1 = " . $count1 . 
" count2 = " . $count2 . "\n";

```

::right::

```perl

$flag = 1;
($flag ? $count1 : $count2) = 0;
print "flag = ".$flag." count 1 = " . $count1 . 
" count2 = " . $count2 . "\n";

if($flag){
    $count1 = 0;
}else{
    $count2 = 0;
}
print "flag = ".$flag." count 1 = " . $count1 . 
" count2 = " . $count2 . "\n";
```

---

- A compound assignment operator is a shorthand method of specifying a commonly needed from of assignment.

- In C like language, `sum += value;` is equal to `sum = sum + value;`

---

Unary operators like increment (++) and decrement (--) can appear in two forms:

- Pre-increment (++count): increments first, then uses the new value
- Post-increment (count++): uses the current value, then increments

For example:

- `sum = ++count;` is equivalent to: `count = count + 1; sum = count;`
- `sum = count++;` is equivalent to: `sum = count; count = count + 1;`

- When two unary operators apply to the same operand, the association is right to left.

- `- count ++` is equal to `- (count ++)`

---

- In the C-based languages, Perl, and JavaScript, the assiignment statement produces a result, which is the same as the value assigned to the target.

https://onlinegdb.com/GbYKGFkpy

```c
#include <stdio.h>

int main()
{
    char name[30] = {'H','e','l','l','o',',',' ','s','t','u','d','e','n','t','.','\0'};
    char c;
    int i = 0;
    while((c = name[i])!='\0'){
        i++;
    }
    printf("Total characters of \"%s\" = %d",name, i);
    return 0;
}

```

---

- The disadvantage of assignment as an expresion is hard to read.

https://onlinegdb.com/5a2xCMhF8i

```c
#include <stdio.h>

int main()
{
    int a,b=1,c,d=2;
    
    a = b + (c=d/b) - 1;
    printf("a = %d, b = %d, c = %d, d = %d",a,b,c,d);
    return 0;
}

```

To explain:

- Assign d / b to c
- Assign b + c to temp
- Assign temp - 1 to a

---

- In python, allows the effect of multiple-target assignments 

`sum = count = 0`

- In C and C++, the compiler allows the folling expression which is safety indeficiencies.

```c
#include <stdio.h>

int main()
{
    int x,y=1;
    if(x=y){
        printf("x = %d, y = %d\n", x, y);
    }else{
        printf("x = %d, y = %d\n", x, y);
    }
    return 0;
}

```

---

- Serveral languages like Perl and Ruby provide multiple-target assignment statements.

https://onlinegdb.com/XOTAs8NL2f

```perl
($first, $second, $third) = (20,40,60);
print "first = $first, second = $second, third = $third\n";

($first, $second) = ($second, $first);
print "first = $first, second = $second, third = $third\n";
```

---

Assignment in Functional Programming

F# Assignment:

- For F#, when a variable name is assigned a value, it never changes.
- To change it, create a new scope with a new binding not related to previous one which is hiding.

https://shorturl.at/OTJOw

```fsharp
// This works - nested scope
let demo() =
    let cost = 10 * 5
    printfn "First cost: %d" cost    // 50
    
    let cost = 20 * 3                // OK - new scope shadows previous
    printfn "Second cost: %d" cost   // 60

demo()
```

---

ML Assignment:

- In ML, `val` does not create a new scope; it creates a new binding that shadows the previous one.


https://shorturl.at/C7RLz


```ocaml
val cost = 10 * 5;
val cost = 20 * 3;
print (Int.toString cost ^ "\n");
```

- ML's `val` declarations are often nested in `let` constructs for scoping. (`let...in...end`)

```ocaml
val cost = 10 * 5;
print (Int.toString cost ^ "\n");  (* prints 50 *)

val result = let
    val cost = 20 * 3
    val tax = cost div 10
in
    cost + tax
end;

print (Int.toString cost ^ "\n");    (* prints 50 - unchanged! *)
print (Int.toString result ^ "\n");  (* prints 66 *)
```
