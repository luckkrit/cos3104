---
layout: section
---

# Subprograms

---

# Contents

<Toc minDepth="2" columns="2"/>

---

## Introduction (1.)

A programming language include 2 fundamental abstractions:

1. Process Abstraction is the form of subprograms that reuse collections of instructions in several parts of a program. When calling a subprogram, it hides details, which increases readability of the program. The methods of object-oriented languages are closely related to subprograms. The difference is the way they are called and their associations with classes and objects.
2. Data Abstraction will be discussed in a later chapter

---

## Fundamentals of Subprograms (2.)

it divides into 4 topics

1. General subprogram characteristics
2. Basic Definitions
3. Parameters
4. Procedures and Functions


---

#### General Subprogram Characteristics (2.1)

The characteristics of subprograms are the following:

Each subprogram has a single entry point.
The calling program unit is suspended during the execution of the called subprogram, which implies that there is only one subprogram in execution at any given time.
Control always returns to the caller when the subprogram execution terminates.

Alternatives to these characteristics include `coroutines` and `concurrent` units, which will be discussed in a later chapter. Most subprograms have names, although some are anonymous.

---

#### Basic Definitions (2.2)

- A subprogram definition describes both the interface and the implementation of the subprogram abstraction.
- A subprogram call is the explicit request that a specific subprogram be executed.


There are 2 kinds of subprograms: `procedures` and `functions`.

---

A subprogram header has 3 main goals:

1. It specifies that the following syntactic unit is a procedure or function, with or without special words.
2. If it is not anonymous, the header provides a name for the subprogram.
3. It specifies a list of parameters.

Header examples: 

- In python, `def adder(parameters):`

Body of subprogram in C-based languages is delimited by braces `{}` but Python uses indent or `pass` for skip its body.

```c
int main(){/** Body */}
```

```python
def adder(parameters):
    pass
```

---

The executable of function in python is the called of `def` statement.

```python
if True:
    def fun():
        pass
else:
    def fun():
        pass
```

---

Ruby is different than the other languages.

1. Ruby methods are often defined in class definitions but can also be defined outside class definitions, in which case they are considered methods of the root object, `Object`. 

https://onlinegdb.com/EzcGX5IiCk

```ruby
# This method is defined outside any class
# It becomes a method of the root Object
def greet(name)
  puts "Hello, #{name}!"
end

# Can be called without an object receiver
greet("Krit")  # Output: Hello, Krit!

# This is actually calling: self.greet("Krit")
# where self is the main Object
self.greet('Krit')
```

---

2. Calling method without a receiver.

https://onlinegdb.com/PGKFyZ6Os

```ruby
class Person
  def initialize(name)
    @name = name
  end
  
  def greet
    puts "Hi, I'm #{@name}"
  end
  
  def introduce
    greet  # No receiver - assumes self.greet
    # Same as: self.greet
  end
end

person = Person.new("Krit")
person.introduce  # Output: Hi, I'm Krit
```

---

3. Method search up to Object

- Example 1

https://onlinegdb.com/h8pOYMrVbK

```ruby
class Animal
  def speak
    "Some sound"
  end
end

class Dog < Animal
  def bark
    speak  # Searches Dog class, then Animal class
  end
end

dog = Dog.new
puts dog.bark  # Output: Some sound
```

---


- Example 2

https://onlinegdb.com/qKSEE8U28

```ruby
def helper_method
  "I'm a top-level method"
end

# This method is actually added to Object
puts Object.private_methods.include?(:helper_method)  # true

# Can be called anywhere
class MyClass
  def test
    helper_method  # Works! Searches up to Object
  end
end

puts MyClass.new.test  # Output: I'm a top-level method
```

---

- The parameter profile of a subprogram includes:

    1. Total number of parameters
    2. Order of parameters
    3. Types of parameters


- The protocol of a subprogram includes:

    1. The parameter profile
    2. The return type (if any, for functions)

- The C/C++ language supports subprogram declarations as well as definitions - called Prototypes.

```c
int area(int width, int height);
```

---

- Other languages (such as JavaScript) do not require subprograms to be defined before they are called.

```js {monaco-run}

main()

function main(){
    area(2,3);
}

function area(width, height){
    console.log(width * height);
}


```

---

#### Parameters (2.3)

Subprograms need to access data for computation in two ways:

1. Direct access to nonlocal variables (global variables or class variables)

    - Not reliable because accessing nonlocal data and modifying it can cause side effects, which are common in C and other imperative languages.
    - Pure functional programming languages such as Haskell avoid changing data by making variables immutable.


2. Access through parameter passing can perform computation on whatever data it receives through its parameters.

---

Parameters can be described from two points of view:

1. **Formal parameters** are the parameters in the subprogram header. They are sometimes called dummy variables because they are bound to storage only when the subprogram is called.
2. **Actual parameters (arguments)** are the parameters in the subprogram call statement. They provide the values or variables that are bound to the formal parameters.

```js
// Formal parameters: width, height
function area(width, height) {
    return width * height;
}

// Actual parameters: 5, 10
let result = area(5, 10);
```
---

The binding of actual parameters to formal parameters is done by position. These parameters are called **positional parameters**.

```js
function greet(firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName}`);
}

// Positional binding: "John" → firstName, "Doe" → lastName
greet("John", "Doe");  // Position matters!

```

To avoid the mistake of passing parameters in the wrong order, use **keyword parameters**. Python allows Keyword and positional parameters can be mixed.

https://onlinegdb.com/R8HHMS1cLH

```python
# Positional parameters - order matters!
def greet(prefix,firstName, lastName):
    print(f"Hello, {prefix} {firstName} {lastName}")

greet("Mr.","Doe", "John")  # Wrong! Output: Hello, Mr. Doe John

# Keyword parameters - order doesn't matter!
greet("Mr.",lastName="Doe", firstName="John")  # Correct! Output: Hello, Mr. John Doe
```

- The limitation is when a keyword parameter appears in the list, all remaining parameters must be keyworded.

---

The formal parameters can have default values which can be found in Python, Ruby, C++ and PHP

```python
def compute_pay(income, exemptions = 1, tax_rate):
    pass

pay = compute_pay(20000.0, tax_rate = 0.15)
```

In C++, does not support keyword parameters except default parameters must appear last in the list.

```cpp
float compute_pay(float income, float tax_rate,
int exemptions = 1){return 0;}

pay = compute_pay(20000.0, 0.15);
```

---

1. In most languages that do not have default values for formal parameters, the number of actual parameters in a call must match the number of formal parameters in the subprogram definition.

2. However, in C, C++, Perl, and JavaScript, fewer actual parameters can be passed than formal parameters. In these cases, it is the programmer's responsibility to ensure that the positional parameter correspondence and subprogram execution are sensible.

For example, `printf` in C. 

https://onlinegdb.com/OFqUuWudA

```c
#include <stdio.h>

int main()
{
    int x=0, y=1;
    printf("%d %d",x);

    return 0;
}
```


---

In C#, methods accept a variable number of parameters, as long as they are of the same type using `params` modifier.

```csharp
using System;
class Myclass {
  static void Main() {
    Myclass myObject = new Myclass();
    int[] myList = new int[6] {2, 4, 6, 8, 10, 12};
    myObject.DisplayList(myList);
    Console.WriteLine("===============");
    int x = 2;
    myObject.DisplayList(2, 4, 3 * x - 1, 17);
  }
  public void DisplayList(params int[] list){
      foreach(int next in list){
        Console.WriteLine("Next value {0}", next);   
      }
  }
}
```
---
layout: two-cols
---

::left::

In Ruby, supports:
  - positional parameter - p1
  - array formal parameter - *p_list
  - keyword parameter - mon:, tue:, wed: 

https://onlinegdb.com/k93KhL4hP



```ruby
def tester(p1, *p_list, mon:, tue:, wed:)
    # p1 = 'first'
    # p_list = [2, 4, 6, 8]
    # mon = 72
    # tue = 68
    # wed = 59
    
```

::right::

```ruby

    # Fix 2: Use the parameters defined in the signature
    puts "p1 is #{p1}"
    # *p_list catches all positional arguments after p1
    puts "p_list (Array) is #{p_list.inspect}" 
    puts "mon is #{mon}"
    puts "tue is #{tue}"
    puts "wed is #{wed}"
end

list = [2, 4, 6, 8]

# Call is now valid with all keywords defined
# Positional arguments: 'first' and *list (2, 4, 6, 8)
# Keyword arguments: mon: 72, tue: 68, wed: 59
tester('first', *list, mon: 72, tue: 68, wed: 59)
```
---

#### Procedures and Functions (2.4)

Subprogram has two form:
  - Functions which do return values
  - Procedures do not return values

- Procedures can cause side effects by two methods:
  1. They can modify variables that are visibile and are not formal parameters. (modify non-local variable)
  2. The caller can get modified data when formal parameters are changed during execution.(modifying parameters passed by reference or output parameters)

- Functions follow the mathematical model, have no side effects, which return values and do not modify variables outside them.

---

## Design Issues for Subprograms (3.)

The issues of subprograms are:

1. Are local variables statically or dynamically allocated?
2. Can subprogram definitions appear in other subprogram definitions?
3. What parameter-passing method or methods are used?
4. Are the types of the actual parameters checked against the types of the formal parameters?
5. If suprograms can be passed as parameters and subprograms can be nested, what is the referencing environment of a passed subprogram?

---

#### Cont.

6. Are functional side effects allowed?
7. What types of values can be returned from functions?
8. How many values can be returned from functions?
9. Can subprograms be overloaded?
10. Can subprogram be generic?
11. If the language allows nested subprograms, are closures supported?

---


## Local Referencing Environments (4.)

The issuses are the following topics

---

#### Local Variables (4.1)

Local variables can be either static or stack-dynamic:

1. Stack-dynamic local variables:

- Bound to storage when the subprogram begins execution
- Unbound (deallocated) when execution terminates
- Requires run-time allocation/deallocation
- **Advantages**: Flexibility, supports recursion, storage can be shared among inactive subprograms
- **Disadvantages**: Allocation/deallocation overhead, indirect access, cannot be history-sensitive

---

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

---
layout: two-cols
---


::left::

In Python, the global variable can accessible in method but cannot be change.
To change its value, need to decalre global to variable.


https://onlinegdb.com/OTUmMSDLf

```python
total = 0

def sum(count):
    print(total, count)

sum(5)

```


https://onlinegdb.com/tlytmFYkT

```python
total = 0

def sum(count):
    total = count   
    print(total, count)
    
sum(5)  
print(total)   
```

::right::

https://onlinegdb.com/imlY1Qi3gV

```python
total = 0

def sum(count):
    global total  
    total = count
    print(total, count)
    
sum(5)  # Output: 5 5
print(total)  
```
---

2. Static local variables:

- Bound to the same memory location throughout program execution
- No run-time allocation/deallocation needed
- **Advantages**: More efficient (direct access), allows history-sensitive subprograms
- **Disadvantages**: Cannot support recursion correctly (all calls share the same storage), storage cannot be shared

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

#### Nested Subprograms (4.2)

- C is not allow nested function.

```c
int outer() {
    int inner() { 
        return 5;
    }
    return inner();
}
```

---

- Modern languages allow nested functions.

```js 

function calculator(x) {
    function add(y) {
        return x + y;
    }
    
    function multiply(y) {
        return x * y;
    }
    
    return {
        add: add,
        multiply: multiply
    };
}

const calc = calculator(5);
console.log(calc.add(3));       // Output: 8
console.log(calc.multiply(3));  // Output: 15

```
---

## Parameter-Passing Methods (5.)

1. Semantics Models of Parameter Passing
2. Implmentation Models of Parameter Passing 

---

### Semantics Models of Parameter Passing (5.1)

The characteristics of formal parameters:

1. `in mode` - receive data from actual parameters.
2. `out mode` - send data to actual parameters.
3. `inout mode` - both receive/send data.

There are two data transfer models in parameter transmission:

1. pass by value - an actual value is copied (this can be to the caller, to the called subprogram, or both ways).
2. pass by reference - an access path is transmitted (most commonly a pointer or reference).

---

### Implmentation Models of Parameter Passing (5.2)

![Parameter passing models](/images/ch7/parameter_passing_models.png)

---

#### Pass-by-Value (5.2.1)

- Pass-by-value is an implementation of in-mode semantics where the value of the actual parameter is copied to initialize the formal parameter, which then acts as a local variable in the subprogram.

There are 2 reasons why copying is better:

1. Efficiency
  - Accessing throught a pointer/reference is slower than direct access
  - Copy makes it faster to work with the value inside the subprogram

2. Enforcement
  - Copying ensures the subprogram cannot change the original value
  - Even if the subprogram passes it to another subprogram, the original stays safe
  - This protects `in-mode` semantics (receive only, not modify)

---

Advantage and Disadvantages:

- Scalars like `int`, `float` are small, so copying is fast for both transfer and access.
- Large arrays ned more memory and time to copy and transfer data, making it inefficient.

```cpp
void add(int x, int y) {  // x and y are COPIES
    x = x + 10;           // changing x here doesn't affect the original
}

int main() {
    int a = 5;
    add(a, 3);           // value 5 is COPIED to x
    // a is still 5!     // original is unchanged
}
```

---

```cpp
#include <iostream>
#define MAX_STUDENTS 10000
#define MAX_SCORE 100

void processGrades(int grades[MAX_STUDENTS]){
    int sum = 0;
    for(int i=0;i<MAX_STUDENTS;i++){
        sum += grades[i];
    }
    std::cout << "Total score of "<< MAX_STUDENTS << " students is " << sum << std::endl;
    std::cout << "Average score of "<< MAX_STUDENTS << " students is " << (sum*1.0)/MAX_STUDENTS << std::endl;
}

int main()
{
    srand(time(0));
    int grades[MAX_STUDENTS]{};
    for(int i=0;i<MAX_STUDENTS;i++){
        int score = (MAX_SCORE+1) * (rand() / (RAND_MAX + 1.0));
        // std::cout << "Student's score: " << i+1 << " gets " << score << std::endl;
        grades[i] = score;
    }
    processGrades(grades);
    return 0;
}
```

---
layout: two-cols
---

::left::

#### Pass-by-Result (5.2.2)

- Pass-by-result implements out-mode semantics where no value is transmitted to the subprogram.
- The formal parameter acts as a local variable, and its value is copied back to the actual parameter when the procedure returns.

::right::

- Advantages: Same as pass-by-value (caller's original data is protected during execution)
- Disadvantages:

  - Requires extra storage for the local parameter
  - Requires copy operation when returning (expensive for large data)
  - Difficulty ensuring the initial value of the actual parameter is not used in the subprogram

---
layout: two-cols
---

::left::
https://onecompiler.com/ada/446rhecbx

```ada
with Ada.Text_IO; use Ada.Text_IO;
with Ada.Integer_Text_IO; use Ada.Integer_Text_IO;

procedure PassByResult is
   
   -- Pass-by-result example
   procedure Calculate_Sum(total : out Integer) is
   begin
      -- 'total' is NOT initialized from caller
      -- It acts as a local variable
      total := 0;
      total := total + 50;
      total := total + 50;
      -- Value is COPIED BACK to caller 
      -- when procedure returns
   end Calculate_Sum;
   
   sum : Integer := 999;  -- Initialize with 999
```

::right::
```ada
   
begin
   Put_Line("Before calling procedure:");
   Put("sum = "); Put(sum); New_Line;
   
   Calculate_Sum(sum);  -- sum is 'out' parameter
   
   Put_Line("After calling procedure:");
   Put("sum = "); Put(sum); New_Line;  -- Now sum = 100
   
end PassByResult;
```

---
layout: two-cols
---

::left::

- Another problem is use same actual parameters twice.
- Modern Ada compiler can detect aliasing problem.

https://onecompiler.com/ada/446rkcuw6

```ada
with Ada.Text_IO; use Ada.Text_IO;
with Ada.Integer_Text_IO; use Ada.Integer_Text_IO;

procedure Test is

  procedure Swap(x : out Integer; y : out Integer) is
  begin
     x := 10;
     y := 20;
     -- When procedure returns:
     -- Which value is copied back to 'a' first? 10 or 20?
  end Swap;
  a : Integer := 5;
  b : Integer := 7;

```

::right::

```ada
  begin
    
    
    Put("Before: a = ");
    Put(a);
    Put(", b = ");
    Put(b);
    New_Line;
    
    Swap(a, b); 
    -- Swap(a, a);  -- This not allow
    
    Put("After: a = ");
    Put(a);
    Put(", b = ");
    Put(b);
    New_Line;
end Test;


```

---
layout: two-cols
---

::left::

- C# `out` provides out-mode semantics (cannot read uninitialized value)
- C# implements out-mode using pass-by-reference (not true pass-by-result), so addresses are always bound at call time
- True pass-by-result would bind addresses at return time (copy-back), but C# doesn't do this
- Languages that don't fully specify pass-by-result implementation details can lead to compiler-dependent behavior, making programs unportable (different compilers may give different results).


::right::

https://onlinegdb.com/HoFEak_5p

```csharp
using System;
class HelloWorld {
  void DoIt(out int x, int index) {
       x = 17;
       index = 42;
   }
  static void Main() {
    int[] list = new int[43];
    for(int i=0;i<43;i++){
        list[i] = 0;
    }
    int sub = 21;
    HelloWorld f = new HelloWorld();
    f.DoIt(out list[sub], sub);
    Console.WriteLine(list[sub]+ " "+list[42]);
  }
}
```


---

#### Pass-by-Value-Result (5.2.3)

- Pass-by-value-result is an implementation model for inout-mode parameters where actual values are copied.
- The formal parameters are initialized by copying the value of the actual parameter (copy-in).
- Each formal parameter has its own local storage.
- On entry to the subprogram, the actual parameter's value is copied to the formal parameter's local storage; on return, the final value is copied back to the actual parameter (copy-out).
- Disadvantages:
  - Requires more storage (like pass-by-value)
  - Requires time to copy data twice (copy-in and copy-out)

- Advantages:
  - Discussed in next section.

---

#### Pass-by-Reference (5.2.4)

The advantages:
  - Shares the access path (memory address) between caller and callee. 
  - More efficient: uses less time and memory space (no duplication/copying)

The disadvantages:
  - Require an additional level of indirect addressing to access the value.
  - Actual parameters can be unintentionally modified in the subprogram (side effects).
  - Aliasing problems: When multiple parameters reference the same memory location, programs become harder to understand and verify.

---

https://onlinegdb.com/ZROFtAbYft

```cpp
#include <iostream>

void passByValue(int x){
    x = 10;
}

void passByReference(int *x){
    *x = 10;
}

int main()
{
    
    int x = 5;
    passByValue(x); // direct access
    std::cout << "x = " << x << std::endl;
    passByReference(&x); // indirect access
    std::cout << "x = " << x << std::endl;
    return 0;
}
```

---

- Alasing problem

```cpp
#include <iostream>

void add(int *x, int *y) {
    *x = *x + *y;
}

int main() {
    int a = 5;
    
    // Normal case - different variables
    int b = 10;
    std::cout << "Before: a = " << a << ", b = " << b << std::endl;
    add(&a, &b);
    std::cout << "After add(&a, &b): a = " << a << ", b = " << b << std::endl;
    std::cout << std::endl;
    
    // Aliasing problem - same variable twice
    a = 5;  // Reset
    std::cout << "Before: a = " << a << std::endl;
    add(&a, &a);  // ALIASING!
    std::cout << "After add(&a, &a): a = " << a << std::endl;
    std::cout << "Expected 10 (5+5), got " << a << std::endl;
    
    return 0;
}
```

---

#### Pass-by-Name (5.2.5)

- Pass-by-Name is an inout-mode parameter transmission method that does not correspond to a single implementation model.
- The formal parameters are bound by textual substitution of the actual parameters at the call time.
- To implement Pass-by-Name for the formal parameters, a subprogram must be passed to the called subprogram to evaluate the address or value.
- This subprogram/referencing environment is called a `closure` which is both complex and inefficient and adds significant complexity to the program, thereby lowering its readability and reliability.
- It is not part of any widely used languages but is used at compile time by the macros in assembly languages and for the generic parameters of generic subprograms in C++, Java, and C#.
---

### Implementing Parameter-Passing Methods (5.3)

- Parameter communication takes place through the run-time stack.
- The run-time stack is initialized and maintained by the run-time system.
- Subprograms use the run-time stack for control linkage and parameter passing.

Four implementation methods:

1. Pass-by-value: Values are copied into stack locations that serve as storage for the formal parameters.
2. Pass-by-result: Values assigned to pass-by-result actual parameters are placed in the stack, where they can be retrieved by the calling program upon termination of the called subprogram.
3. Pass-by-value-result: Implemented as a combination of pass-by-value and pass-by-result. The stack location is initialized by the call and then used like a local variable in the called subprogram.
4. Pass-by-reference: Perhaps the simplest to implement. Most languages only allow variables to be passed by reference. Fortran passes all forms - for literals, the address is put in the stack; for expressions, the compiler builds code to evaluate them and puts the result address in the stack.

---

### Parameter-Passing Methods of Some Common Languages (5.4)

---

### Type Checking Parameters (5.5)

- Software reliability demands that the types of actual parameters be checked for consistency with the types of corresponding formal parameters.
- This type checking can occur at compile-time or run-time.
- Early detection of type inconsistencies allows more meaningful error messages, leading to more reliable programs and less development time.
- Languages that do not require parameter type checking make errors difficult to diagnose because they are not detected until runtime.

---

### Multidimensional Arrays as Parameters (5.6)

---

### Design Considerations (5.7)

Two important considerations for choosing parameter-passing methods:

1. Efficiency
2. Whether one-way or two-way data transfer is needed

The semantics of parameter passing:
- in-mode parameters should be used whenever no data are to be returned to the caller (one-way: caller → subprogram)
- out-mode parameters should be used when no data are transferred TO the called subprogram, but the subprogram must transmit data back to the caller (one-way: subprogram → caller)
- inout-mode parameters should be used only when data must move in both directions between caller and called subprogram

---

Practical efficiency consideration (conflicts with principles):

- Small data: pass-by-value is efficient
- Large data (e.g., large arrays): pass-by-value is costly in time and space, so large arrays are often passed by reference even for one-way transfer
- Solutions: Ada 83 allows implementors to choose; C++ offers constant reference parameters; or allow users to choose between methods


---

### Examples of Parameter Passing (5.8)

---

## Parameters That Are Subprograms (6.)

- Subprogram names can be sent as parameters to other subprograms
- Example: A numerical integration subprogram that samples a mathematical function - the function name should be sent as a parameter so it doesn't need to be rewritten for every function to integrate

Two implementation issues:
1. Type checking:

- In C and C++, functions cannot be passed as parameters, but pointers to functions can
- The type of a pointer to a function includes the function's protocol (all parameter types)
- This allows complete type checking of parameters passed to subprogram parameters

---

2. Referencing environment (for nested subprograms):

- The issue: What referencing environment should be used for executing the passed subprogram?
- This issue only appears with languages that allow nested subprograms

Three choices for referencing environment:

1. Shallow binding: The environment of the call statement that enacts the passed subprogram
2. Deep binding: The environment of the definition of the passed subprogram
3. Ad hoc binding: The environment of the call statement that passed the subprogram as an actual parameter

---

## Calling Subprograms Indirectly (7.)

---

## Design Issues for Functions (8.)

---

### Functional Side Effects (8.1)


---

### Types of Returned Values (8.2)


---

### Number of Returned Values (8.3)

---

## Overloaded Subprograms (9.)


---

## Generic Subprograms (10.)

---

## User-Defined Overloaded Operators (11.)

---

## Closures (12.)

---

## Coroutines (13.)

---
