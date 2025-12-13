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
    <div class="p-2">

**Chapter 5.** Names, Bindings, and Scopes
   
   </div>
    <div class="p-2">

**Chapter 6.** Data Types

</div>
    <div class="border border-red-500 bg-neutral-100 p-2">

**Chapter 7.** Expressions and Assignements Statements

</div>
    <div class="p-2">

**Chapter 8.** Statement-Level Control Structures
</div>
    <div class="p-2">

**Chapter 9.** Subprograms
</div>
</div>

---

# Contents

<Toc minDepth="2" columns="2"/>


---

## Type of Expression

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
layout: section
---

### Arithmetic expression

- An arithmetic expression is an expression that uses numbers and arithmetic operators and produces a numeric value.
    - Operator : +, / , *, mod 

---
layout: section
---

### Relational expression 

- A relational expression compares two values and produces a boolean result (true or false).
    - Operator : ==,!= , >, < ,

---
layout: section
---

### Boolean Expressions

- A boolean expression is an expression that evaluates to true or false, often using logical operators.
    - Operator :  AND , OR , not


---

## Expression Design Issues

<div class="flex ns-c-tight">

<div>

**Arithmetic**:
   1. Type System Design
      - Type conversion rules (coercion hierarchy)
      - Mixed-mode operation support
   2. Operator Design
      - Precedence
      - Associativity
      - Overloading
   3. Evaluation Design
      - Order of operand evaluation
      - Side effects

</div>
<div>

**Relational**:
   1. Type System Design
      - Mixed-mode operation support
      - Type conversion rules
      - Result type (boolean)
   2. Operator Design
      - Precedence (relative to arithmetic/boolean)
      - Associativity (non-associative in most languages)
      - Overloading
   3. Evaluation Design
      - Order of operand evaluation
      - Side effects in operands

</div>
<div>

**Boolean**:
   1. Type System Design
      - Type representation (dedicated boolean vs. numeric)
      - Truthiness rules (if applicable)
   2. Operator Design
      - Precedence (AND, OR, NOT hierarchy)
      - Associativity
      - Overloading (bitwise vs. logical)
   3. Evaluation Design
      - Short-circuit evaluation
      - Order of evaluation
      - Side effects

</div>
</div>

---
layout: side-title
---

::title::

### Arithemetic Expression Design Issues

::content::

**Arithmetic**:
   1. [Type System Design]{class="text-red-500"}
      - Type conversion rules (coercion hierarchy)
      - Mixed-mode operation support
   2. Operator Design
      - Precedence
      - Associativity
      - Overloading
   3. Evaluation Design
      - Order of operand evaluation
      - Side effects

---


# Type conversion (1.1)

- A narrowing converion converts a value to a type that cannot store even approximations of all of the values of the original type. In Java, converting `double` to `float` is a narrowing conversion.

- A widening conversion converts a value to a type that can include at least approximations of all of the values of the origirnal type. In Java, converting `int` to `float` is a widening conversion.

- In general, widening conversion is safer than narrowing, but in some conversions the precision may be lost. For example, 32-bit integers allow at least 9 decimal digits of precision. But 32-bit floating-point values have only about seven decimal digits of precision (because of the space used for the exponent).

- The type of conversions can be either **explicit** or **implicit**.

---

# Type Mixing (Mixed-Mode Expressions) (1.2)

   1. Mixed-mode operation is an arithmetic expression where operands have different numeric data types (int, float) , causing the language to perform implicit numeric type conversion (also called numeric promotion) so the operation can be evaluated.

   - Example: 
      - `int` + `float` → automatic coercion to `float` which is an implicit type conversion that is initiated by the compiler or runtime system.
      - `int a = (int)5.0;` - this is an explicit type conversion (cast) requested by the programmer, not coercion. 

---

   2. Coercion (implicit type conversion) = one way to handle mixed-mode expressions by automatically converting types.

   - Coercion can reduce program reliability because errors may occur when the compiler automatically converts between incompatible types without the programmer's explicit approval.


   - Coercion can cause `overflow` or `underflow` when the converted value cannot fit in the target type
   - Other run-time errors from type operations include division by zero, which raises an exception.

```python
x = 5 + 3.14  # This is a mixed-mode expression (int + float)
```

The language can handle this mixed-mode situation in different ways:

   - With coercion: Automatically convert 5 to 5.0 and perform float addition
   - Without coercion: Raise a type error and require explicit conversion

---

# List of languages that support mixed-mode

|Language|Mixed-Mode Supported?|Example|Result|
|---|---|---|---|
|C|Yes|3 + 3.14|double|
|C++|Yes|3 + 3.14|double|
|Java|Yes|3 + 3.14|double|
|C#|Yes|3 + 3.14|double|
|Python|Yes|3 + 3.14|float|
|Go|No|3 + 3.14|Error|
|Swift|No|3 + 3.14|Error|
|Rust|No|3 + 3.14|Error|

---

https://onlinegdb.com/ZBXHlEY3m

```swift
//let r = 3 + 3.14    // ERROR
let r = Double(3) + 3.14   // OK
print(r)
```

---
layout: side-title
---

::title::

### Arithemetic Expression Design Issues

::content::

**Arithmetic**:
   1. Type System Design
      - Type conversion rules (coercion hierarchy)
      - Mixed-mode operation support
   2. [Operator Design]{class="text-red-500"}
      - Precedence
      - Associativity
      - Overloading
   3. Evaluation Design
      - Order of operand evaluation
      - Side effects

---


# Types of Operators 

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

# Operator Precedence Rules (2.1)

- operator-precedence design is NOT the same across programming languages.

- Operator precedence determines which operator is evaluated first when no parentheses appear.

---

# Operator Precedence Table

| Rank | C | Pascal | Python |
| :---: | :---: | :---: | :---: |
| **1** | * | not | power (**) |
| **2** | + | * | not |
| **3** | ==, != | + | * |
| **4** | <, >, <=, >= | <, >, =, <> | + |
| **5** | not (!) | and | <, >, == |
| **6** | and (&&) | or | and |
| **7** | or | | or |
| **8** | = | := | = |

---
layout: two-cols
---


::left::

Are these result the same?

https://onlinegdb.com/Km2_c0xlp

```cpp
#include <iostream>

int main()
{
    int a = 1;
    int b = 6;  
    bool c1 = !a*5 == b;
    bool c2 = !(a*5 == b);
    std::cout<< "\n !a*5 == b   ->" << c1  ;
    std::cout<< "\n !(a*5 == b)  ->" << c2  ;

    return 0;
}

```

::right::

https://onlinegdb.com/mQ-2N3Tkxt

```python
a = 1
b = 6
print("!a*5 == b" , not a*5 == b)
print("not (a*5 == b)" , not (a*5 == b))

```

---
layout: two-cols-title
---

::title::

# Operator Associativity Rules (2.2)


|Concept|Controls|Question it answers|
|---|---|---|
|Precedence|Which operator goes first|Which operator is evaluated first?|
|Associativity|Evaluation direction|Left to right or right to left?|

::left::

<div class="w-full">

```js {monaco-run}
z = 1 + 2 - 3
z = 3 - 3
console.log(z)
```
</div>

- same precedence `+` `-`, then associativity rule `Left to Right`

::right::

<div class="w-full">

```js {monaco-run}
z = 1 + 2 * 3
z = 1 + 6
console.log(z)
```
</div>

- difference precedence `*` (higher) `+` (lower), then associativity rule `Right to Left`

::default::

<Admonition v-drag="[14,478,953,67]" title="Info" color="teal-light" width="300px">

Most programming languages follow similar operator-precedence rules.

</Admonition>

---

<div class="text-xs">

| **Feature** | **Java** | **C** | **C#** | **Python** |
| :--- | :--- | :--- | :--- | :--- |
| **Unary precedence** | +, -, ++, -- | +, -, ++, -- | +, -, ++, -- | +, -, ~, ++ (if it existed) |
| **Multiplicative** | *, /, % | *, /, % | *, /, % | *, /, //, % |
| **Additive** | +, - | +, - | +, - | +, - |
| **Associativity (binary ops)** | L -> R | L -> R | L -> R | L -> R |
| **Associativity (unary)** | R -> L | R -> L | R -> L | R -> L |
| **Associativity (`**`)** | — | — | — | R -> L (**) |
| **Guaranteed operand evaluation order?** | Yes (left -> right) | No | Yes | Yes |
</div>

<Admonition  title="Info" color="teal-light" width="100%">
the arithmetic precedence and associativity rules in all major languages (C, C++, Java, C#, Python, Pascal, Ada) are very similar, with only a few differences.

</Admonition>

---
layout: side-title
---


::title::

### Arithemetic Expression Design Issues

::content::

**Arithmetic**:
   1. Type System Design
      - Type conversion rules (coercion hierarchy)
      - Mixed-mode operation support
   2. Operator Design
      - Precedence
      - Associativity
      - Overloading
   3. [Evaluation Design]{class="text-red-500"}
      - Order of operand evaluation
      - Side effects

---


# Operand Evaluation Order (3.1)

https://onlinegdb.com/tqcgS8RGv

```c
#include <stdio.h>
//https://onlinegdb.com/tqcgS8RGv
//19 for c14
//18 for turboc
int main()
{
    int x = 5;
    int y = x++ + ++x * 2; 
    printf("x = %d , y = %d", x, y);

    return 0;
}
```

---

<div class="text-xs">

| **Language** | **Has Operator Side Effects?** | **Safe?** | **Example** | **Notes** |
| :---: | :---: | :---: | :--- | :--- |
| **C/C++** | Yes | Unsafe (undefined behavior) | y=x++ + ++x*2 | Lang order unspecified $\to$ results unpredictable |
| **Java** | Yes | Safe (defined order) | y=x++ + ++x*2 | Always evaluated left $\to$ right |
| **C\#** | Yes | Safe (defined order) | y=x++ + ++x*2 | Same guarantee as Java |
| **Python** | No | Very safe | N/A (++ not allowed) | No operator affects variables inside expressions |

</div>
---
layout: two-cols
---

::left::

https://onlinegdb.com/IgHNe1zG8g


```java
public class Main {
    public static void main(String[] args) {
        int x = 5;
        int y = x++ + ++x * 2;

        System.out.println("x = " + x + ", y = " + y);
    }
}
```

::right::

# ✓ Java Rules

- Java always evaluates left → right

- So evaluation is predictable:
  - step1: `x++` → returns 5, `x` becomes 6
  - step2: `++x` → `x` becomes 7, returns 7
  - step3: 5 + 7 * 2 = 19

---

https://onlinegdb.com/RK8qnvWlN

```csharp
using System;

class Program
{
    static void Main()
    {
        int x = 5;
        int y = x++ + ++x * 2;

        Console.WriteLine($"x = {x}, y = {y}");
    }
}

```

---

# Side Effects in Operands (3.2)


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


- A side effect of a function occurs when the function modifies one of its parameters or a global variable.

https://onlinegdb.com/uxHHMfBom


```c
#include <stdio.h>
//pass-by-ref "C"
int myfunction(int *A ){
      *A  = *A +10 ;
     return 0; 
}
int main( ){  
    int A = 20, B=5;
    int result  = A*B + myfunction( &A )  ;
    printf(" result = %d",result );
    return 1;
}
```

- The result in C14 is `20 * 5 = 100`
- The result in TurboC is `30 * 5 = 150`

---

# Solution for modifying parameter side effect

1. define the language by disallowing functional side effects
   - No two-way parameters in functions
   - No non-local references in functions
   - Disadvantage: inflexibility of one-way parameters and lack of non-local references

2. write the language definition to demand that operand evaluation order be fixed

   - Disadvantage: limits some compiler optimizations
   - Java requires that operands appear to be evaluated in left-to-right order

---

<div class="ns-c-tight text-sm">

| **Language** | **Guaranteed Left-to-Right Evaluation?** | **Safe With Side-Effects in Expressions?** | **A * B + MyFunction(ref A)** | **Notes** |
|----------|--------------------------------------|----------------------------------------|---------------------------|-------|
| Ada | ✅ Yes | ⚠️ Safe but should avoid complex side effects | Predictable | Ada strictly defines left-to-right evaluation |
| C/C++ | ❌ No | ❌ Unsafe (undefined behavior) | Unpredictable | Order of operands often unspecified; modifications cause UB |
| Java | ✅ Yes | 👍 Safe (well-defined order) | No support | Java always evaluates left→right for operands & function calls |
| C# | ✅ Yes | 👍 Safe | Predictable | C# guarantees left→right operand evaluation |
| Python | ✅ Yes | 👍 Safe | No support | Python always evaluates expressions left→right |
</div>

---

# For C/C++

- C/C++ is not fully defined, which can cause unpredictable results when side effects occur.


The solutions are:

- C/C++ would need major restrictions: 
   - no global variable access, 
   - no pass-by-reference, 
   - everything returns through return values.

---

# For C#

- guaranteed to evaluate from left to right

https://onlinegdb.com/V8oDXBC59


```csharp
using System;

class Program
{
    // pass-by-ref in C#
    static int MyFunction(ref int A)
    {
        A = A + 10;
        return 0;
    }

    static void Main()
    {
        int A = 20, B = 5;
        //20*5 and call 
        int result = A * B + MyFunction(ref A) /*+A * B*/ ;

        Console.WriteLine("result = " + result);
    }
}
```

---

# For Java

- It does not support pass by ref method

---
layout: two-cols
---


::left::
# For Ada

- Not allow modifiy parameter

https://onecompiler.com/ada/447bau984

```ada
with Ada.Text_IO; use Ada.Text_IO;
with Text_IO;
with Ada.Integer_Text_IO; use Ada.Integer_Text_IO;
procedure Hello is
 
FUNCTION myfunction ( p :  in out INTEGER  ) return Integer is
BEGIN
    Put_Line("DoIt  before - > p = " & Integer'Image (p) );
    p := p + 10;
    Put_Line("DoIt  after - > p = " & Integer'Image (p) );
    return 0;
END myfunction;

```

::right::

```ada
 A : Integer ; 
 B  : Integer;
 result :  Integer;
begin
  
  A := 20;
  B := 5;
  Put_Line("  main before - > A = " & Integer'Image (A) );
  Put_Line("  main before - > B = " & Integer'Image (B) );
  Put_Line("  main before - > result1 = " & Integer'Image (result) );

end Hello;
```

---
layout: two-cols
---

::left::

# Function Side Effect: global modifies

- A side effect of a function occurs when the function modifies a global variable

https://onlinegdb.com/ERl7JIKMl

```c

#include <stdio.h>

int a = 5;
int b = 10;
int fun1(){
    a = 17;
    return 3;
}
int main()
{
    printf("Before call: a = %d\n", a);
    a = a*b + fun1();
    printf("After call: a = %d\n", a);
    return 0;
}


```

::right::

The value computed for a in main depends on the order of evaluation of the 
operands in the expression `a*b + fun1()`. 
 1. `53` :if a is  evaluated first
 2. `173` : if the function call is evaluated first.

---
layout: side-title
---

::title::

### Relational Expression Design Issues

::content::


**Relational**:
   1. [Type System Design]{class="text-red-500"}
      - Mixed-mode operation support
      - Type conversion rules
      - Result type (boolean)
   2. Operator Design
      - Precedence (relative to arithmetic/boolean)
      - Associativity (non-associative in most languages)
      - Overloading
   3. Evaluation Design
      - Order of operand evaluation
      - Side effects in operands
---

# Relational Operator (1.1)

| Operation | Swift | C# | C++ | Pascal |
|-----------|-------|-----|-----|--------|
| Equal | == | == | == | = |
| Not Equal | != | != | != | <> |
| Less Than | < | < | < | < |
| Greater Than | > | > | > | > |
| Less or Equal | <= | <= | <= | <= |
| Greater or Equal | >= | >= | >= | >= |

---

| Language | Example |
|----------|---------|
| C | `bool r = (3 < 4);` // binary<br><br>`int r = (x > 0) ? x : -x;` //ternary |
| Python | `r = 3 < 4` # binary<br><br>`r = x if x > 0 else -x` # ternary<br>#equ to `int r = (x > 0) ? x : -x;` |
| Standard Pascal | `r := 3 < 4;` { binary } |

---

# Mixed-mode operation support (1.2)

- Mixed-mode operation is an relation expression where operands have different numeric data types (int, float) , causing the language to perform implicit numeric type conversion (also called numeric promotion) so the operation can be evaluated.

- A mixed-mode operation occurs when a relation operator is applied to two operands of different numeric types (such as int, float, double).

---

```c
int x = 5;
float y = 3.14;

if (x < y) {  // Mixed-mode relational expression
    // Step 1: x (int) and y (float) - different types
    // Step 2: Coerce x to float: 5 → 5.0
    // Step 3: Compare: 5.0 < 3.14 → false
    // Step 4: Result is boolean: false
}

// Example 1: int vs float
10 > 9.5     // → 10.0 > 9.5 → true

// Example 2: char vs int (in C)
'A' == 65    // → 65 == 65 → true (char promoted to int)

// Example 3: Different precision
5 == 5.0     // → 5.0 == 5.0 → true

// Example 4: Precision issues!
0.1 + 0.2 == 0.3  // → false (floating-point error!)
```

---

| **Language** | **Mixed-Mode Supported?** | **Example** | **Result** |
|----------|----------------------|---------|--------|
| C | ✓ Yes | 3 < 3.14 | Int |
| C++ | ✓ Yes | 3 < 3.14 | Int |
| Java | ✓ Yes | 3 < 3.14 | boolean |
| C# | ✓ Yes | 3 < 3.14 | boolean |
| Python | ✓ Yes | 3 < 3.14 | boolean |
| Go | ❌ No | 3 < 3.14 | Error |
| Swift | ❌ No | 3 < 3.14 | Error |
| Rust | ❌ No | 3 < 3.14 | Error |

---

https://onlinegdb.com/YeyNdvdThN

```swift
let x = 5     // Int
let y = 5.0   // Double

let b = Double (x) == y

print(b)

```

---

# Type conversion rules (1.3)

- When comparing different types, convert to the type that can hold more information (no data loss).

- **Type Hierarchy (Widening Path)**

```
char → int → long → float → double
      (narrower)  →  (wider)
```


**Conversion Rules:**

1. Integer vs Float/Double

```c
int x = 5;
double y = 3.14;

x < y  // Convert: int → double
       // Compare: 5.0 < 3.14 → false
```

**Rule**: Integer converts to floating-point

---

2. Different Integer Sizes

```c
short a = 10;
long b = 20;

a < b  // Convert: short → long
       // Compare: 10L < 20L → true
```

**Rule**: Smaller integer converts to larger

3. Float vs Double

```c
float x = 3.14f;
double y = 2.71;

x > y  // Convert: float → double
       // Compare: 3.14 > 2.71 → true
```

**Rule**: Float converts to double

---

4. Character vs Integer

```c
char c = 'A';
int x = 65;

c == x  // Convert: char → int
        // Compare: 65 == 65 → true
```

**Rule**: Character converts to integer (ASCII/Unicode value)

**Result Type Rule:**

ALL relational expressions return BOOLEAN (or int in C/C++)

```c
// C/C++: returns int (0 or 1)
int result = (5 < 10);  // result = 1

// Java/C#/Python: returns boolean
boolean result = (5 < 10);  // result = true
```

---
layout: side-title
---

::title::

### Relational Expression Design Issues

::content::


**Relational**:
   1. Type System Design
      - Mixed-mode operation support
      - Type conversion rules
      - Result type (boolean)
   2. [Operator Design]{class="text-red-500"}
      - Precedence (relative to arithmetic/boolean)
      - Associativity (non-associative in most languages)
      - Overloading
   3. Evaluation Design
      - Order of operand evaluation
      - Side effects in operands
---

# Precedence (2.1)

<div class="text-xs">

| **Language** | **Higher Precedence** | **Lower Precedence** | **Notes** |
|----------|-------------------|------------------|-------|
| C / C++ | < , <= , > , >= | == , != | Two distinct levels |
| Java | < , <=, > , >= | ==, != | Same as C/C++ (except instanceof) |
| C# | <, <= , > , >= | == , != | Same as C/Java |
| Python | <, <=, >, >=, == , != | (Same level) | All comparison operators have the **same precedence** |

</div>

<Admonition v-drag="[14,478,953,67]" title="Info" color="teal-light" width="300px">

the relation precedence in all major languages (C, C++, Java, C#, Python, Pascal, Ada) are very similar, with only a few differences.

</Admonition>
---

# Associate rule (2.2)

<div class="text-xs">

| **Language** | **Higher Precedence** | **Lower Precedence** | **Notes** |
|----------|-------------------|------------------|-------|
| C / C++ | < , <= , > , >= | == , != | Two distinct levels |
| Java | < , <=, > , >= | ==, != | Same as C/C++ (except instanceof) |
| C# | <, <= , > , >= | == , != | Same as C/Java |
| Python | <, <=, >, >=, == , != | (Same level) | All comparison operators have the **same precedence** |

</div>
---
layout: two-cols-title
---

::title::

# C vs Python

::left::

https://onlinegdb.com/LA8FCEFS1


```cpp
#include <iostream>

using namespace std;

int main()
{
    if(3<4 == 2<3) {  //3<4 == 2<3 will evaluate to true
        cout<<"3<4 == 2<3 => true";
    }
    else {
        cout<<"3<4 == 2<3 => false";
    }
    

    return 0;
}

```

::right::

https://onlinegdb.com/qa5zqQgNb

**Chained (special)**

`(3 < 4) and (4 == 2) and (2 < 3)`

```python
if 3<4 == 2<3 :
    print("3<4 == 2<3 => true")
else :
    print("3<4 == 2<3 => false")

```

---
layout: side-title
---

::title::

### Relational Expression Design Issues

::content::


**Relational**:
   1. Type System Design
      - Mixed-mode operation support
      - Type conversion rules
      - Result type (boolean)
   2. Operator Design
      - Precedence (relative to arithmetic/boolean)
      - Associativity (non-associative in most languages)
      - Overloading
   3. [Evaluation Design]{class="text-red-500"}
      - Order of operand evaluation
      - Side effects in operands
---

# Order of operand evaluation and Side effects in operands (3.1, 3.2)

https://onlinegdb.com/gh1xyx_rd

# C/C++ - Unspecified Order

```c
int x = 5;
int result = (++x + 1) < (x++ + 2);
//            ^^^^^^^     ^^^^^^^
//              Left        Right
// Which x++ happens first? UNSPECIFIED!

// Possible outcomes:
// Scenario 1: Left first  → 6 < 8 → true  (x becomes 7) Turbo C
// Scenario 2: Right first → 8 < 7 → false (x becomes 7) C14
// UNDEFINED BEHAVIOR!
```

**Problem**: C/C++ doesn't guarantee left-to-right evaluation!

---

# Java - Left-to-Right (Safe!)

https://onlinegdb.com/ZwrH4Lfsi

```java
public class Main
{
	public static void main(String[] args) {
	    int x = 5;
        boolean result = (++x + 1) < (x++ + 2);
		System.out.println("result = " + result +", x = " + x);
	}
}

```

**Safe**: Java always evaluates left-to-right!


---
layout: side-title
---

::title::

### Boolean Expression Design Issues

::content::

**Boolean**:
   1. [Type System Design]{class="text-red-500"}
      - Type representation (dedicated boolean vs. numeric)
      - Truthiness rules (if applicable)
   2. Operator Design
      - Precedence (AND, OR, NOT hierarchy)
      - Associativity
      - Overloading (bitwise vs. logical)
   3. Evaluation Design
      - Short-circuit evaluation
      - Order of evaluation
      - Side effects

---

# Type representation (dedicated boolean vs. numeric) (3.1)

- Modern languages include a Boolean type which represents `true` and `false`.
- It increases readability and writability.
- It does not allow implicit conversion to integer without explicit cast to prevent mixed usage of integers and booleans.

```java
boolean flag = true;
```

- Older languages like C (before C99) use `0` for `false` and any non-zero value for `true` (though `1` is conventionally used).

```c
int flag = 1;  // true
if (flag) {    // any non-zero is true
    // executes
}
```

---
layout: two-cols-title
---


::title::

# Truthiness rules (3.2)

- Truthiness extends beyond simple true/false values to describe how different types of values are evaluated in boolean contexts (like conditional statements). This concept is particularly important in dynamically-typed languages.

::left::

**Falsy Values**

-Most languages that support truthiness define a specific set of values that evaluate to false. Common falsy values include:

**JavaScript and Python** both treat these as falsy:

- The boolean false itself
- Numeric zero (0, 0.0, -0)
- Empty strings ("" or '')
- null (JavaScript) or None (Python)
- undefined (JavaScript only)
- NaN (JavaScript)
- Empty collections (Python: [], {}, set())

::right::

```python
if not "":
    print("Empty string is falsy")  # This executes

if []:
    print("This won't execute")
else:
    print("Empty list is falsy")    # This executes

```
---

