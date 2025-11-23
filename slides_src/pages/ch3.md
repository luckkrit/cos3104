---
layout: section
---

# Names, Bindings, and Scopes

---

# Contents

<Toc minDepth="2" columns="2"/>

---

## Introduction (1.)

- Programming Languages
  - Imperative programming languages
    - C/C++, Java, C#, etc.

  - Imperative/multi-paradigm programming languages
    - C/C++, PHP, C#, Java, Kotlin, Python

  - Pure functional programming languages
    - Haskell, Lisp, Scheme, Clojure, Erlang, F#, OCaml, Scala

Reference: [https://en.wikipedia.org/wiki/List_of_programming_languages_by_type#Imperative_languages](https://en.wikipedia.org/wiki/List_of_programming_languages_by_type)

---

<TLDraw2 :class="'inset-0 w-full h-full'" :doc="'tldraw/memory_cell.tldr'" ></TLDraw2>

---

## Design Issues (2.)

- Name Forms
  - A **name** is a string of characters used to identify some entity in a program.
  - The naming rule is a letter followed by a string consisting of letters, digits, and underscore characters ( \_ ).
    - Excepts:
      - PHP uses [$]{class="text-red-500"} at the beginning of variable name
      - Perl uses [$, @, %]{class="text-red-500"} at the beginning of variable name
      - Ruby uses [@ or @@]{class="text-red-500"} at the beginning of variable name
  - The name length can be varied on languages.
  - Case Sensitive – [rose, ROSE]{class="text-red-500"} are hard to read - **Readability**
    - Function naming can lead to **writability problem**. For example, In Java, **parseInt** is allowed but [ParseInt]{class="text-red-500"} and [parseint]{style="color:red"} is not allowed.

---

```cpp
int x = 5;    // global name x
void foo() {
    int x = 10;  // local name x
    scanf ( “%d”, &x  );
}
```

- [x]{class="text-red-500"} -> variable name ( global & local variable)
- [foo & scanf]{class="text-red-500"} -> function name

---

- Special Words – reserve word
  - To make program more [readable]{class="text-red-500"}.
  - [ Cannot ]{class="text-red-500"} be used as a name of variable.
    - In COBOL, there are 300 reserved words, and most of them are common for programmers like LENGTH, BOTTOM, DESTINATION and COUNT.
  - [ Cannot ]{class="text-red-500"} redeclare variable that import from libraries that are defined in other programs units like Java import C and C++ libraries because [reserved words]{class="text-red-500"} might conflict with [ variable ]{class="text-red-500"} name.

<ArrowDraw color="red" v-drag="[207,423,81,43,180]" />

```csharp
using System;

public class HelloWorld
{
    public static void Main(string[] args)
    {
        var _x = 100;
        int var = 5;
        //float int =9;
        Console.WriteLine ("_x = {0}  ,  var = {1}" , _x,var);
    }
}

```

---

## Variables (3.)

A program variable is an abstraction of a computer memory cell or collection of cells.

- **Name** – Variable names
- **Address** - The address of a variable is the machine memory address with which it is associated.
- **Type** - The type of a variable determines the range of values the variable can store and the set of operations that are defined for values of the type.
- **Value** - The value of a variable is the contents of the memory cell or cells associated with the variable.

---

- Compiler stores variables in Symbol Table

| Name | Type  | Address | Value |
| :--: | :---: | :-----: | :---: |
|  x   |  int  | 0x0318  |   3   |
|  y   | char  | 0x031c  |  'A'  |
| sum  | float | 0x0320  |  5.5  |

<Admonition color="amber-light" textAlign="left" title="Note">
	Address in the table is not the actual address, it is symbolic address
</Admonition>

---

## The Concept of Binding(4.)

1. Binding of Attributes to Variables
2. Type Bindings

   2.1 Static Type Bindings

   2.2 Dynamic Type Bindings

3. Storage Bindings and Lifetime

   3.1 Static Variables

   3.2 Static-Dynamic Variables

   3.3 Explicit Heap-Dynamic Variables

   3.4 Implicit Heap-Dynamic Variables

---

**Binding**

- A binding is an association between **an attribute** and **an entity**, such as between a variable and its type or value, or between an operation and a symbol.
- The time at which a binding takes place is called **binding time**. Binding and binding times are prominent concepts in the semantics of programming languages.
- Bindings can take place at language design time, language implementation time, compile time, load time, link time, or run time.

---
layout: top-title-two-cols
columns: is-6
align: l-lt-lt
---


::title::

Example


::left::

```c
int x = 10;
```

Type of binding:

1. NAME BINDING (Identifier Binding)
   - The identifier "x" is bound to a variable
   - Binding Time: Compile time
2. TYPE BINDING
   - x is bound to type "int"
   - Binding Time: Compile time

::right::

3. STORAGE BINDING (Address Binding)

- x is bound to memory address 0x0318
- Binding Time: Load/Run time

4. VALUE BINDING
   - x is bound to value 10
   - Binding Time: Run time

---

## Binding of Attributes to Variables (4.1)

- A binding is **static** if it first occurs before run time begins and remains [unchanged]{class="text-red-500"} throughout program execution. 
- If the binding first occurs during run time or can [change]{class="text-red-500"} in the course of program execution, it is called **dynamic**. 
- The physical binding of a variable to a storage cell in a virtual memory environment is complex – page or segment of the address space is changed frequently (managed by computer hardware) .

---

```csharp
using System;
 
class GFG {
    static int f2() {
        return 10;
    }
 
    static string f1() {
        return "string f1";
    }
    // Main Method
    static public void Main()
    {
        dynamic val1 = f1(); //dynamic binding
        Console.WriteLine("type of val1: {0} ,val1 = {1}",
         val1.GetType().ToString(),val1);
        val1 = f2();
        Console.WriteLine("type of val1: {0},val1 = {1}", 
                          val1.GetType().ToString(),val1);
        var val3 = f2();    //static binding
        Console.WriteLine("type of val3: {0},val3 = {1}", 
                          val3.GetType().ToString(),val3);
         //val3 =  "new value";   
        
    }
}

```

---

## Type Bindings (4.2)

- Before **a variable can be referenced** in a program, it must be **bound to a data type**. The two important aspects of this binding are how the type is specified and when the binding takes place.


---

### Static Type Bindings (Compile-Time) (4.2.1)

- **Explicit** declaration – use keyword like let, var, const to introduce variable.
	- int a = 0;  (C/Java)
	- let a = 0; (JavaScript)
	- var a = 0; (JavaScript)
	- const a = 0; (JavaScript)
- **Implicit** declaration
	- a = 0;
	- Type inference – another kind of implicit type declarations uses **context**. 
		- var a = 0; - infer as int
		- var b = “Smith” – infer as string

---

### Dynamic Type Bindings (Runtime) (4.2.2)

- [Variables are bound when it is assigned a value]{class="text-red-500"} in an assignment statement.
- It is good for assigned value from external source that is unknown type.
- However, it is less reliable because dynamic type binding allows any variable to be assigned. 
- To check type must be **check at Runtime** by implementing dynamic attribute binding which is the disadvantage.

---

```python
def func(max):
	imaxx = range(max)
	print("Name 2")
	for i in imaxx:
		x = 1
	print(x)

func(2) # func(0) //what happend?

```


<Admonition color="amber-light" textAlign="left" title="Note">

- Python check type at runtime
</Admonition>
---

## Storage Bindings and Lifetime (4.3)

- The **storage bindings** for its variables is the process of allocation or deallocation memory cell from a pool of available memory.  
	- **Allocation** - The variable is bound to a memory cell.
	- **Deallocation** – The variable is unbound from memory cell then return memory cell to the pool of available memory.
- The **lifetime** of a variables is the time during which the variable is bound to a specific memory cell.

---

<TLDraw2 :class="'inset-0 w-full h-full'" :doc="'tldraw/memory_layout.tldr'" ></TLDraw2>

---

### Static Variables (4.3.1)

- A static variable is one that is bound to a memory cell before program execution begins and remains bound to that same memory cell until program execution terminates.
	- For example, Global Variables or Class Variables. 
	- The advantage of global variables is efficient because of accessing memory directly.

---

<TLDraw2 :class="'inset-0 w-full h-full'" :doc="'tldraw/static_variables.tldr'" ></TLDraw2>
---

https://onlinegdb.com/ELsXA6jjK

```cpp
#include <iostream>
using namespace std;
int factorial(int n) {
    static int result = 1;  // Static variable - มี 1 ที่เดียว!
    
    if (n <= 1) return result;
    
    result = n * factorial(n - 1);  // ทุก call ใช้ result ตัวเดียวกัน!
    return result;
}

int main(){
	cout << "First call:  " << factorial(3) << "\n";   // ✅ ได้ 6
    cout << "Second call: " << factorial(3) << "\n";   // ❌ ได้ 36 (ผิด!)
    cout << "Third call:  " << factorial(4) << "\n";   // ❌ เพี้ยนไปเลย!
}
```

---

- The disadvantages are following:
1. **Reduced Flexibility** (Cannot Support Recursion)
	- **The Problem:** [Static variables]{class="text-red-500 font-bold"} are bound to memory at compile time and keep the [same memory location]{class="text-red-500 font-bold"} for the entire program execution.
	- **The Consequence:** A function that uses local static variables cannot call itself recursively.
	- **Why?** Recursion requires that every time a function calls itself, it gets a fresh, unique copy of its local variables and parameters. Since a static variable has only one memory location, every recursive call would try to write to the same spot, corrupting the data from the previous calls and making recursion impossible.

---

### Stack-Dynamic Variables (4.3.2)

- **Stack-dynamic variables** are those whose storage bindings are created when their declaration statements are [ elaborated ]{class="text-red-500"}, but whose types are statically bound. It is created from the [run-time stack]{class="text-red-500"}.

https://onlinegdb.com/JKUvXRUygU

```c
#include <iostream>
using namespace std;
void function(){
	int x = 10;
}
int main(){
	function();
	return 0;
}
```

<Admonition color="amber-light" textAlign="left" title="Note">
	elaborated = when the declaration is executed at runtime
</Admonition>

- **The disadvantage** is the [run-time overhead]{class="text-red-500"} of allocation and deallocation, possibly slower accesses because indirect addressing is required.


---

https://onlinegdb.com/fn1b39X6_

```python
def hello(x):
    if x==1:
        return "op"
    else:
        u=1
        e=12
        s=hello(x-1)
        e+=1
        print(s)
        print(x)
        u+=1
    return e

hello(3)

```

---

- What happend?

https://onlinegdb.com/xEg4b8Rqq

```cpp
#include <iostream>
using namespace std;
int dof1(int run)
{
	char x[1024*1024];
	printf("\nrun=%d, &run=%p, &x[0]=%p",run,&run,&x[0]);
	if(run > 0) {
		dof1(run-1);
		return 0;
	}
	return 1;
}
int main() {
	dof1( 10);
	return 0;
}

```

<v-click>

- Buffer overflow!
</v-click>

---

## Scope (5.)

- The **scope** of a variable is the range of statements in which the variable is visible. A variable is **visible** in a statement if it can be referenced or assigned in that statement.
- A variable is **local** in a program unit or block if it is declared there.
- The **nonlocal** variables of a program unit or block are those that are visible within the program unit or block but are not declared there.
- **Global** variables are a special category of nonlocal variables. 

---

Why variable scope?
- Given multiple bindings of a single name, how do we know which binding does an occurrence of this name refer to?
	- Two bindings for "x"
		- one of type *int*
		- another *float*

```cpp
#include <iostream>
using namespace std;

int x;
void foo(int y)
{
	float x;
	x = 10;
}
int main(){
	foo(x);
	return 0;
}
```

---

### Static Scope (5.1)

- Scope of a variable can be statically determined
	- Based on program text, a spatial concept
- To connect a name reference to a variable, you (or the compiler) must find the declaration
	- First search locally, then in increasingly larger enclosing scopes, until one is found for the given name, or an undeclared variable error

- Variables can be hidden from a unit by having a "closer" variable with the same name
	- C++ and Ada allow access to "hidden" variables:
		- unit.name (in Ada) 
		- class_name::name (in C++)

---

- **Block**: a method of creating new static scopes inside program units (from ALGOL 60)
	- e.g.: C and C++ in any compound statement

	```c++

	for (...) {
		int index;
		...
	}
	```

---

<TLDraw2 :class="'inset-0 w-full h-full'" :doc="'tldraw/static_scope.tldr'" ></TLDraw2>

---

### Dynamic Scope (5.2)

- Based on calling sequences of program units, not their textual layout (temporal versus spatial)
	- Can only be determined at run time

- References to variables are connected to declarations by searching back through the chain of subprogram calls that forced execution to this point

---
layout: two-cols
---



::left::

- What scope is it?

<v-click>

- Dynamic
</v-click>

https://onlinegdb.com/n9E-USPy3

```perl
#!/usr/bin/perl
# A perl code to demonstrate dynamic scoping

$y = 1;
$z = 2;
$a = 3;
$b = 4;

sub f {
    print "a = ".$a."\n";
    print "b = ".$b."\n";
    print "x = ".$x."\n";
    print "y = ".$y."\n";
    
    return $x;
}


```

::right::

```perl

sub g {
    # Since local is used, x uses
    # dynamic scoping.
    local $x = 20;
    print "\ng = ".f()."\nend\n\n";
}
sub g2 {
    # Since local is used, y uses
    # dynamic scoping.
    local $y = 200;
    print "\ng = ".f()."\nend\n\n";
}

$x = 10;
print "\n 1. f = ".f()."\n";
g();
g2();
#print "\n 2. f = ".f()."\n";
```


---
layout: two-cols
---


::left::

- What scope is it? 

<v-click>

- Static
</v-click>

https://onlinegdb.com/_FsIPoinF

```cpp
#include <iostream>
using namespace std;
int x=10;
int y=1;
int z=2;
int a=3;
int b=4;
int f(int x,int y)
{
   cout <<"\n" << a <<"\n"<< b<<"\n" << x <<"\n"<<y <<"\n";
   return x;
}
void  g () 
{
   int x=20;
   cout << "\ng.f " << f (x,y);
}
```

::right::

```cpp

void  g2 () 
{
    int y=200;
    cout << "\ng2.f " << f (x,y);
}
int main()
{
    cout << "\nmain.f " << f (x,y);
    g();
    g2();
    //cout << "\n main.f " << f (x,y,z,a,b);
    return 0;
}
```

---
layout: two-cols
---

::left::

- What scope is it?

<v-click>

- Dynamic
</v-click>

https://onlinegdb.com/-XkqNlZN2p

```perl
# A perl code to demonstrate dynamic scoping
$x = 10;
sub f
{
   print "   x = ".$x."\n";
   return $x;
}

```

::right::

```perl

sub g
{
   # Since local is used, x uses
   # dynamic scoping.
   print  "2. g  \n";
   local $x = 20;
   f();
}


print " 1. m \n";
f();
g();

```

---


<TLDraw2 :class="'inset-0 w-full h-full'" :doc="'tldraw/static_dynamic_scope.tldr'" ></TLDraw2>

---
layout: two-cols
---

- Perl supports both scopes

::left::

- Static scoping (my)

https://onlinegdb.com/UDBpkpqsA

```perl
#!/usr/bin/perl
# Static (Lexical) Scoping

my $a;  # MAIN's a

sub P1 {
    print "P1 prints a = $a\n";
}

sub P2 {
    my $a = 0;  # my = lexical scope (local to P2 only)
    P1();       # P1 sees MAIN's $a = 7
}

# MAIN
$a = 7;
P2();

# Output: P1 prints a = 7
```

::right::

- Dynamic scoping (local)

https://onlinegdb.com/YzAwoAViw

```perl
#!/usr/bin/perl
# Dynamic Scoping

$a = undef;  # MAIN's a (global)

sub P1 {
    print "P1 prints a = $a\n";
}

sub P2 {
    local $a = 0;  # local = dynamic scope
    P1();          # P1 sees P2's $a = 0
}

# MAIN
$a = 7;
P2();

# Output: P1 prints a = 0
```

---
layout: two-cols
---

::left::

- Static Scoping

https://onlinegdb.com/FM1p6DtZ5

```pascal
program MAIN;
var a : integer;

procedure P1;
begin
    writeln('P1 prints a = ', a);
end;

procedure P2;
var a : integer;
begin
    a := 0;
    P1;  { P1 sees MAIN's a = 7 (static) }
end;

begin
    a := 7;
    P2;
end.

{ Output: P1 prints a = 7 }
```

::right::

- Dynamic Scoping

https://onlinegdb.com/M5vbgOKhQ

```pascal
#!/bin/bash
a=7
P1() {
    echo "P1 prints a = $a"
}
P2() {
    local a=0
    P1
}

echo "=== Dynamic Scoping in Bash ==="
echo "MAIN sets a = 7"
P2
echo "Result: P1 prints 0 (dynamic scope)"
```

---
layout: two-cols
---

::left::

https://onlinegdb.com/l1xTlIlxJ

- Static Scoping

```cpp
#include <iostream>
using namespace std;

int a;  // MAIN's a

void P1() {
    cout << "Static: P1 prints a = " << a << "\n";
}

void P2() {
    int a = 0;  // local a in P2
    P1();  // P1 sees global a = 7 (static scoping)
}

int main() {
    a = 7;
    P2();
    return 0;
}
// Output: Static: P1 prints a = 7
```

::right::

https://onlinegdb.com/HVYi71luP

- Dynamic Scoping

```cpp
#include <iostream>
using namespace std;

int a;  // global a

void P1() {
    cout << "Dynamic: P1 prints a = " << a << "\n";
}

void P2() {
    int saved_a = a;  // save old value
    a = 0;            // modify global (simulate dynamic)
    P1();             // P1 sees modified a = 0
    a = saved_a;      // restore
}

int main() {
    a = 7;
    P2();
    return 0;
}
// Output: Dynamic: P1 prints a = 0
```

---

## Scope and Lifetime (6.)

Scope and lifetime are different concepts:
- Scope: Where in the code a variable is accessible (textual/spatial)
- Lifetime: When during execution a variable exists in memory (temporal)

---
layout: two-cols
---

::left::

Example: C++ static local variable

```cpp
#include <iostream>
using namespace std;

void printheader() {
    cout << "\n=== Computing Sum ===\n";
}

void compute() {
    static int sum;  // static local variable
    printheader();   // calls another function
    
    sum += 10;
    cout << "Sum = " << sum << "\n";
}

```

::right::

```cpp

int main() {
    cout << "Call 1:";
    compute();  // sum = 10
    
    cout << "\nCall 2:";
    compute();  // sum = 20 (keeps value!)
    
    cout << "\nCall 3:";
    compute();  // sum = 30 (keeps value!)
    
    return 0;
}
```

- Scope of sum: Only inside compute() function 
- Lifetime of sum: Entire program execution 
- Result: When printheader() executes, sum exists in memory but printheader() cannot access it (scope restriction) 
- Key insight: A variable can be alive but invisible!


---

## Summary

- Variables are abstractions for memory cells of the computer and are characterized by name, address, value, type, lifetime, scope
- Binding is the association of attributes with program entities: type and storage binding
- Scope determines the visibility of variables in a statement


---

- Exercise

จงอธิบายข้อดีของ static local ของภาษา C/C++ เมื่อเปรียบเทียบกับตัวแปร global ?
