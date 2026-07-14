---
layout: section
---

# Type Binding
### Data Types in Programming Languages

---
layout: two-cols-title
---

::title::

## Outline

::left::

- Primitive Data Types 
  - Integer, Floating-point, Decimal, Boolean, Character, Complex

- Character String Types 
  - String

- Array Types 
  - Array
  - Associative Array



::right::


- Pointer and Reference Types 
  - Pointer
  - Reference

- Optional Types 
  - Optional

- User-Defined Data Types 
  - Enumeration
  - Record
  - Tuple
  - Union
  - List


::default::

---

## Introduction to Data Types

- A **data type** is a collection of data used to represent real-world information
- Supporting data types is a fundamental part of what every programming language must provide

---

## Evolution of Data Types

- The concept has evolved continuously over several decades
- Early languages had only a limited set of built-in data structures
  - e.g., **Fortran** used arrays to simulate linked lists or binary trees
- Later, languages introduced **user-defined types**
  - Significantly improved **readability**
- Eventually, the concept of **abstract data types (ADTs)** emerged
  - Separates the **representation** of data from its **use**

---

## Why Types Matter

- Helps **reduce errors** by checking data correctness wherever it is used
- Supports **system documentation** — makes clear what kinds of data a program works with

---

## Data Types Across Paradigms

- **Imperative languages**: commonly use **arrays** and **records**
- **Functional languages** (e.g., **Lisp**): rely on **lists** as a core data type
- Lists were later adopted into imperative languages too
  - e.g., **C#** includes `List` even though it's primarily imperative

---

## Type Specifiers in C

- C uses **type operators** to indicate composite types:
  - **Brackets `[]`** → array
  - **Asterisks `*`** → pointer

---

## Static vs. Dynamic Variables

- **Static**: type info recorded by the **compiler** in the **symbol table**
- **Dynamic**: type is only known **at run time**

---

# Primitive Types

- Built directly into the language
- Stores one simple value
- Has a fixed size in memory
- Example
  - Integer
  - Character
  - Floating point /Real
  - Complex
  - Decimal


---

## 1. Integer

- Hardware-based integer types vary by language
  - e.g., **Java**: `byte`, `short`, `int`, `long`
- **C++** and **C#** add **signed** / **unsigned**
  - **Unsigned** — often used for raw binary data
  - **Signed** — leftmost bit represents the sign (+/−)
- Some types aren't directly supported by hardware:
  - **Arbitrary-precision integers** in **Python** and **F#**
  - Python 2 used an `L` suffix (`10L`); **Python 3 removed it** — every `int` is arbitrary precision by default
- Negative values use **two's complement**

---

## Integer — Bit Manipulation

```c
int x = 11;                // 00001011

int multiplied = x << 1;   // 22 — shift left = multiply by 2
int divided    = x >> 1;   // 5  — shift right = divide by 2
```

⚠️ ใช้ได้ชัวร์เฉพาะเลขบวก — right shift (`>>`) ของเลขติดลบเป็น
**implementation-defined** ใน C ไม่การันตีว่าเท่ากับ `/` เสมอไป

https://onlinegdb.com/HM8xgZ9bC

---

## 2. Float

- Represents an **approximation** of a real number — cannot store all values exactly
  - e.g., 0.1 in binary ≈ `0.0001100110011...` (repeating)
- Two common sizes: **float** (4 bytes) and **double** (8 bytes, double the storage)
- Stored per the **IEEE Floating-Point Standard 754** (32-bit and 64-bit forms)

---

## IEEE 754 Layout

<div class="grid grid-cols-2 gap-4">
<div>

**32-bit (single precision)**
- 1 sign bit
- 8 exponent bits
- 23 fraction bits

</div>
<div>

**64-bit (double precision)**
- 1 sign bit
- 11 exponent bits
- 52 fraction bits

</div>
</div>

---

## 3. Complex

- Found in **Fortran** and **Python**
- Consists of a **real part** and an **imaginary part**
- Imaginary part ends with `j` or `J`

```python
z = 7 + 3j
z = complex(7, 3)
```

https://onlinegdb.com/3LMAIWC0o

---

## 4. Decimal

- Designed to store business-critical data with a specific number of decimal digits
- Found in **COBOL**, **C#**, **F#**
- **Limitation:** cannot store exponents
- Uses considerable storage — encoded digit-by-digit like character data, via **Binary Coded Decimal (BCD)**
  - 1 digit/byte, or **packed**: 2 digits/byte (4 bits/digit)

---

## Why BCD Is Costly

- 6-digit number in **packed BCD** → 24 bits
- Same number in plain **binary** → ~20 bits (since 2<sup>20</sup> ≈ 1,000,000)
- **BCD wastes space** compared to binary
- If hardware doesn't support decimal arithmetic natively, it must be simulated in software — **slower**

---

## 5. Boolean

- First appeared in **ALGOL 60** — `true` / `false`
- **C89** has **no Boolean type at all** — uses numeric values instead
  - `0` = false, non-zero = true
- **C99** added a Boolean type (`_Bool`)
- **C++** has `bool` with `true` / `false`

https://onlinegdb.com/evowgBnjE

---
layout: two-cols-title
---

::title::
## C# Example

::left::

```cpp

#include <iostream>

using namespace std;

int main()
{
    int b1 = -1;
    int b2 = 0;
    
    if(b1) {
        cout << "\nb1 = " << b1;
    }
    if(!b1) {
        cout << "\nnot b1 = " << b1;
    }
    if(!b2) {
        cout << "\nb2 = " << b2;
    }

    return 0;
}


```

https://onlinegdb.com/Pzlh5xpWn


::right::

```csharp

using System;

public class HelloWorld
{
    public static void Main(string[] args)
    {
        bool b1 = true;
        bool b2 = false;
        
        if(b1) {
             Console.WriteLine("b1 = {0}",  b1);
        }
        if(!b1) {
            Console.WriteLine("not b1 = {0}", b1);
        }
        if(!b2) {
            Console.WriteLine( "b2 = {0}", b2);
        }
    }
}

```

https://onlinegdb.com/tgDQYLmuV

::default::






---

## 6. Character

- Originally 8 bits — **ASCII** (values 0–127)
- Then **ISO 8859-1** — still 8 bits, extended to 256 characters
- As computing spread globally, ASCII could no longer cover enough characters
- **Unicode** emerged as a character set covering scripts worldwide
  - **UCS-2**: a 16-bit *encoding* of Unicode; first 128 characters still match ASCII (used by **Java**'s `char`)
- Later, **UCS-4 / UTF-32** appeared, part of **ISO/IEC 10646**

---

# String Types

A sequence of characters, used for output/input of text — usually called a *string*

---

## String — Design Questions

1. Should a string be a special kind of character **array**, or a **primitive** type?
2. Should its size be **fixed** or **flexible**?

---

## String Operations (5 kinds)

1. Assignment
2. Catenation
3. Substring reference
4. Comparison
5. Pattern matching

Some languages support these natively; others rely on library functions or classes.

---

## 1. Assignment

**Python** — string is primitive:
```python
a = "Python"
```

**C** — no primitive string type, uses a `char` array:
```c
char str[] = "apples";
```

- Terminated with a **null character** (`0`)
- Copying/assigning to a new variable requires a function like `strcpy`
- Risk: the array's fixed size may be too small for the new content

---

## Example

```c
// C — แยก initialization กับ assignment ออกจากกัน (กฎไม่เหมือนกัน!)
 
// Initialization (ตอนประกาศ) — ใช้ = ได้ตรงๆ
char a[] = "Hello";
 
// Assignment (หลังประกาศแล้ว มาเปลี่ยนค่าทีหลัง) — ใช้ = ไม่ได้!
char b[20];
// b = "World";       // ❌ compile error: assignment to expression with array type
strcpy(b, "World");    // ✅ ต้องใช้ strcpy แทน
```

```cpp
// C++
std::string a = "Hello";
```
 
```csharp
// C#
string a = "Hello";
```
 
```python
# Python
a = "Hello"
```
 
```java
// Java
String a = "Hello";
```

---

## Example

```c

#include <iostream>
using namespace std;
#include <string.h> //examples of strlen function
int main ( )
{
   char unix1[ ] = { 'u','n','i','1','\0' ,'x','y' }; // 5 elems
   char unix2[5] = { 'u','n','i','x','2' }; // 5 elems
   char unix3[ ] = "uni3"; //5 elems include '\0'
   char unix4[5] = "uni4"; //5 eles include '\0'
   char unix5[ ] = { 'u','n','i','5' }; // 4 elems
   char *unix6   = "uni6";  //5 elems include '\0'

   cout<<"unix1 : " << unix1 << "\t\tstrlen = " << strlen(unix1) << "\tsizeof = "<< sizeof(unix1) << '\n';
   cout<<"unix2 : " << unix2 << "\tstrlen = " << strlen(unix2) << "\tsizeof = "<< sizeof(unix2) << '\n';
   cout<<"unix3 : " << unix3 << "\t\tstrlen = " << strlen(unix3) << "\tsizeof = "<< sizeof(unix3) << '\n';
   cout<<"unix4 : " << unix4 << "\t\tstrlen = " << strlen(unix4) << "\tsizeof = "<< sizeof(unix4) << '\n';
   cout<<"unix5 : " << unix5 << "\tstrlen = " << strlen(unix5) << "\tsizeof = "<< sizeof(unix5) << '\n';
   cout<<"unix6 : " << unix6 << "\t\tstrlen = " << strlen(unix6) << "\tsizeof = "<< sizeof(unix6) << '\n';

}

```

https://onlinegdb.com/Ni_L2g-oW

---

## Example 

```cpp

#include <iostream>
using namespace std;
#include <string.h> //examples of strlen function
int main ( )
{
   char source[ ] = "source1234567890";
   char dest[2];
   char other[ ] = "other";  
  cout << "-- before--" << endl;
  cout << "source = " << source << endl;
  cout << "dest = " << dest << endl;
  cout <<  "other = " <<other << endl;
  strcpy( dest,source );
  cout << "--after--" << endl;
  cout <<  "source = " <<source << endl;
  cout <<  "dest = " <<dest << endl;
  cout <<  "other = " <<other << endl;
  
}
```


https://onlinegdb.com/x0_lbe2oI

<v-click>stack buffer overflow — dest จองที่ไว้แค่ 2 bytes แต่ strcpy เขียนข้อมูลลงไป 17 bytes เขียนทะลุขอบเขตที่จองไว้ ไปทับ memory ของตัวแปรอื่นบน stack</v-click>

---

## 2. Catenation

**Python** (primitive type → native operator):
```python
a = "Python"
b = "I love " + a
```

- **C** needs a function: `strcat`
- **Java** treats `String` as a class but still supports the `+` operator

---

## Example

```c
// C
char b[20] = "Hello";
strcat(b, " World");   // ⚠️ buffer ต้องใหญ่พอ ไม่งั้น overflow (ดูตัวอย่าง buffer overflow ก่อนหน้า)
```
 
```cpp
// C++
std::string b = "Hello";
b += " World";
std::string c = b + "!";
```
 
```csharp
// C#
string b = "Hello";
b = b + " World";
string c = string.Concat(b, "!");
```
 
```python
# Python
b = "Hello"
b = b + " World"
c = b + "!"
```
 
```java
// Java
String b = "Hello";
b = b + " World";
String c = b.concat("!");
```

---

## 3–4. Substring & Comparison

- **Substring reference** — works naturally in **Python** or **Java** via array-like indexing
  - Remember: strings are **immutable**, so this never modifies the original
- **Comparison**
  - **C** requires `strcmp`
  - **Python** can use `==` directly

---

## Example

```c
// C — ไม่มี method สำเร็จรูป ต้องเขียนเอง
char c[] = "Hello World";
char sub[6];
strncpy(sub, c + 6, 5);
sub[5] = '\0';   // ต้อง null-terminate เอง
```
 
```cpp
// C++
std::string d = "Hello World";
std::string sub = d.substr(6, 5);   // (start, length)
```
 
```csharp
// C#
string d = "Hello World";
string sub = d.Substring(6, 5);   // (start, length) — เหมือน C++
```
 
```python
# Python
d = "Hello World"
sub = d[6:11]   # (start, end) — คนละแบบกับ C++/C#!
```
 
```java
// Java
String d = "Hello World";
String sub = d.substring(6, 11);   // (start, end) — เหมือน Python!
```

---

## Example

```c
// C
int cmp = strcmp("apple", "banana");   // ค่าลบ = apple มาก่อน
```
 
```cpp
// C++
bool eq = (std::string("apple") == "banana");   // false — เทียบ content ได้ตรงๆ
```
 
```csharp
// C#
bool eq = ("apple" == "banana");   // false — เทียบ content ได้ตรงๆ เหมือน C++
```
 
```python
# Python
eq = ("apple" == "banana")   # False
```
 
```java
// Java — ⚠️ กับดักที่สำคัญที่สุดในเอกสารนี้!
String x = "apple";
String y = new String("apple");   // สร้างด้วย new จงใจให้เป็นคนละ object
 
x.equals(y);   // true  — เทียบ content ถูกต้อง
x == y;        // false — เทียบ reference ไม่ใช่ content! (คนละ object กัน)
```
---

### เข้าถึงตัวอักษรเดี่ยว (single character) — กรณีพิเศษของ substring ที่ยาว 1 ตัว
 
| ภาษา | Index Operator | Index เริ่มที่ | หมายเหตุ |
|---|---|---|---|
| C | `[]` | 0 | string คือ `char[]` ตรงๆ |
| C++ | `[]` หรือ `.at()` | 0 | `.at()` เช็ค range ให้ |
| C# | `[]` | 0 | indexer เช็ค range ให้ |
| **Java** | **`.charAt(i)` เท่านั้น** | 0 | **ไม่มี `[]` ให้ใช้กับ String เลย** |
| Python | `[]` | 0 | รองรับ index ติดลบด้วย (`s[-1]`) |
| JavaScript | `.charAt(i)`, `[]`, หรือ `.at(i)` | 0 | **`.at()`** (ES2022) เท่านั้นที่รองรับ index ติดลบ — `.charAt()`/`[]` ไม่รองรับ |
| **Pascal** | `[]` | **1** | **ภาษาเดียวในตารางที่เริ่มนับจาก 1 ไม่ใช่ 0** |

---

```c
// C
char d[] = "Hello World";
char ch = d[6];   // 'W' — array indexing ธรรมดา
```
 
```cpp
// C++
std::string d = "Hello World";
char ch = d[6];      // 'W' — indexing ตรงๆ
char ch2 = d.at(6);  // 'W' — เหมือนกัน แต่เช็ค range ให้ (throw exception ถ้าเกิน)
```
 
```csharp
// C#
string d = "Hello World";
char ch = d[6];   // 'W' — indexer เช็ค range ให้อัตโนมัติ
```
 
```python
# Python
d = "Hello World"
ch = d[6]   # 'W'
```
 
```java
// Java — มีชื่อ method เฉพาะ (ต้นตำรับของคำว่า charAt ที่ JS ก็ยืมไปใช้)
String d = "Hello World";
char ch = d.charAt(6);   // 'W' — เช็ค range ให้ (throw exception ถ้าเกิน)
```
 
```javascript
// JavaScript — มีสามแบบ
let d = "Hello World";
let ch = d.charAt(6);   // 'W' — ชื่อ method ตรงตัว ปลอดภัยกว่า (index เกินได้ "" ไม่ error)
let ch2 = d[6];           // 'W' — indexing ก็ใช้ได้เหมือนกัน (index เกินได้ undefined)
let ch3 = d.at(6);        // 'W' — เหมือนกัน แต่ .at() รองรับ negative index ด้วย (ES2022)
```

---

## Example

```pascal
{ Pascal — index เริ่มที่ 1 ไม่ใช่ 0! }
var
  d: string;
  ch: char;
begin
  d := 'Hello World';
  ch := d[7];   { 'W' — ต้องใช้ 7 ไม่ใช่ 6 เพราะนับจาก 1 }
end.
```

---

## 5. Pattern Matching

- **Perl, JavaScript, Ruby, PHP** — regular expressions are built into the language, no extra library needed
- **C++, Java, Python, C#, F#** — rely on a library that ships with the language

---

## Example

```c
// C — ต้อง #include <regex.h>, ใช้งานยุ่งยากสุดในกลุ่มนี้
regex_t regex;
regcomp(&regex, "^[0-9]+$", REG_EXTENDED);
int result = regexec(&regex, "12345", 0, NULL, 0);   // 0 = match
regfree(&regex);
```
 
```cpp
// C++ — ต้อง #include <regex>
std::regex pattern("^[0-9]+$");
bool match = std::regex_match(std::string("12345"), pattern);
```
 
```csharp
// C# — ต้อง using System.Text.RegularExpressions
bool match = Regex.IsMatch("12345", @"^[0-9]+$");
```
 
```python
# Python — ต้อง import re
import re
match = re.match(r"^[0-9]+$", "12345")
```
 
```java
// Java — ต้อง import java.util.regex.Pattern
boolean match = Pattern.matches("^[0-9]+$", "12345");
```
 
```javascript
// JavaScript — เขียน regex ได้ตรงๆ ไม่ต้อง import อะไรเลย!
let match = /^[0-9]+$/.test("12345");
```

---

| Operation | C | C++ | C# | Java | Python |
|---|---|---|---|---|---|
| Assignment | `strcpy()` (หลังประกาศ) / `=` (ตอน initialize เท่านั้น) | `=` | `=` | `=` | `=` |
| Catenation | `strcat()` | `+=` / `+` | `+` | `+` / `.concat()` | `+` |
| Substring | เขียนเอง | `.substr(start, len)` | `.Substring(start, len)` | `.substring(start, end)` | `[start:end]` |
| Comparison | `strcmp()` | `==` | `==` | `.equals()` (⚠️ ห้ามใช้ `==`) | `==` |
| Pattern matching | `<regex.h>` | `<regex>` | `Regex` class | `Pattern` class | `re` module |

---

## String Length Categories

| Category | Behavior | Example languages |
|---|---|---|
| **Static length** | Fixed at object creation; immutable | Python, Java `String` |
| **Limited dynamic length** | Can change, but capped by a declared maximum | C / C++ (bounded by the `char` array size) |
| **Dynamic length** | Unbounded (limited only by available memory) | JavaScript, Perl |

*Static length: reassigning the variable to a new string is fine — the original string object itself is never modified.*

---

## String Evaluation

- **Primitive string type** (e.g. Python): assignment, catenation, comparison work natively (`=`, `+`, `==`)
- **Array-of-char** languages (e.g. C): need loops or library functions (`strcpy`, `strcat`)
- **Dynamic length strings** (e.g. JavaScript): convenient, but the ease trades off against performance — complex string management is hidden underneath

---

## How Strings Actually Work

- Strings run on hardware, but some operations need software support — storage, retrieval, editing
- Once represented as a `char` array, the language layer takes over
- Variables split into **static** and **dynamic**, each described by a **descriptor** holding its attributes

---

## Static-Length String Descriptor

Used only at **compile time** — 3 fields:

1. Type name
2. Length (number of characters)
3. Memory address of the first character

---

## Limited Dynamic-Length String Descriptor

Records:

- **Maximum** possible length
- **Current** length
- Memory address

---

## Dynamic-Length String Descriptor

- Only needed at **run time**
- Stores just the **address** and **current size**
- Everything else lives in the **symbol table**

---

## C / C++ Strings Are Special

- C/C++ strings are **limited dynamic** — but need **no run-time descriptor**
- Why: they're **null-terminated**, and there's no index-range checking at all
- **Static-length** and **limited dynamic-length** strings allocate exactly as much space as the actual string needs

---

## Managing Dynamic-Length Strings

Three common strategies:

1. **Linked list** in the heap — flexible, but complex to update
2. **Array of character pointers** in the heap — faster access
3. **Contiguous storage** — on growth, find a new large-enough block, copy the string over, free the old block

**#3 is the most common in practice** — uses more space than #1, but simpler allocation/deallocation; #2 is faster to search but slower to reorganize than #3.

---
layout: section
---

# Array Types

---

## What Is an Array?

- A **homogeneous aggregate** — every element identified by its position (index), relative to the first
- All elements share the same type
- Referencing an element uses a **subscript expression**
- If the subscript contains a variable (`arr[i]`), the address must be computed **at run time**
  - vs. `arr[3]`, computable at **compile time**

---

## "Same Type" Means Different Things

**C, C++, Java, C#**: every element (and every pointer/reference) must be the *exact same* type

**JavaScript, Python, Ruby**: variables are **typeless references**
- Every element is still the same *kind* of thing — a reference
- But each reference can point to objects of *different* types
- Still counts as homogeneous: what must match is the **type of the element** (the reference), not what it points to

**Swift**: arrays can be **typed** (one type only) or **untyped** (any type)

**C# / Java 5.0**: **generic arrays** whose elements are object references, via the class library

---

## Array — Design Issues

- What types are legal for subscripts?
- Are subscript expressions **range checked**?
- When is the subscript **range** bound?
- When does storage **allocation** happen?
- Ragged, rectangular, or both — for multidimensional arrays?
- Can arrays be **initialized** when storage is allocated?
- What kinds of **slices**, if any, are supported?

---

## Arrays & Indices

- Referenced via two parts: array name + **subscript/index**
- All-constant subscripts → **static selector**; any variable → **dynamic selector**
- Mapping notation: `array_name(subscript_value_list) → element`
- Some languages (e.g. **Ada**) reuse `()` for both array references *and* function calls — hurts readability
  - Most languages besides Fortran/Ada use `[]` instead

---

## Two Distinct Types Involved

- **Element type** — can be anything
- **Subscript type** — usually integer
- Early languages didn't enforce range checks → range errors were common
- Modern languages check subscript ranges: **Java, ML, C#**

---

## Perl's Unusual Subscripts

- Scalars start with `$`, but a whole array's name starts with `@`
- `@list` = the whole array; `$list[1]` = its second element (index 1)
- **Negative subscripts** count from the end: `$list[-2]` on a 5-element array → index 3
- Referencing a nonexistent element yields `undef` — **not an error**

---

## Subscript Binding: 4 Categories

Based on 3 bindings: **subscript range**, **storage**, and **where** storage is allocated from

In the first 3 categories, once bound, both stay fixed for the variable's lifetime.

| Category | Range bound | Storage allocated |
|---|---|---|
| **Static array** | Static (compile time) | Static (before run time) |
| **Fixed stack-dynamic** | Static | At elaboration (run time), on the stack |
| **Fixed heap-dynamic** | Dynamic (at request) | At request, on the heap |
| **Heap-dynamic** | Dynamic, can change repeatedly | Dynamic, can change repeatedly |

---

## Trade-offs by Category

- **Static** — efficient (no dynamic alloc/dealloc), but size is frozen for the whole run
- **Fixed stack-dynamic** — space-efficient (inactive subprograms can share stack space); costs allocation/deallocation time
- **Fixed heap-dynamic** — sized exactly to need each time; heap allocation is slower than stack
- **Heap-dynamic** — maximum flexibility, grows/shrinks anytime; frequent alloc/dealloc can be slow

---

## Categories in Practice

- **C/C++**: `static` keyword → static array; no `static` → fixed stack-dynamic
- **C/C++ heap arrays**: `malloc`/`free` (C), `new`/`delete` (C++) — array is a pointer to a block of storage, indexable like normal
- **Java**: all non-generic arrays are **fixed heap-dynamic**
- **C#**: plain arrays are also **fixed heap-dynamic** (size fixed after creation)

---

## C# `List<T>` — True Heap-Dynamic

```csharp
List<String> stringList = new List<String>();
stringList.Add("Michael");
```

- Created empty, grows as needed — unlike C#'s plain (fixed) arrays
- Accessed via subscript

**Java's `ArrayList`** is similar but **doesn't support subscripting** — must use `get`/`set` (plain Java arrays still use subscripts normally)

---

## Perl & JavaScript: Growing Arrays

**Perl:**
- `push` / `unshift` add elements; or assign beyond the current highest subscript
- Shrink to empty: assign `()`
- Size = highest subscript + 1

**JavaScript:**
- Same `push` / `unshift`; shrink via empty-list assignment
- **No negative subscripts**
- Arrays can be **sparse** — subscripts don't need to be contiguous

```javascript
list[50] = 42;  // list now has length 51; indices 11..49 are undefined, unallocated
```

---

## Array Initialization

Supported by **C, C++, Java, Swift, C#** at the time storage is allocated:

```c
int list[] = {4, 5, 7, 83};
```

- Compiler sets the length automatically — convenient, but not free
- **Cost:** removes the system's ability to catch a forgotten value — there's no expected size to check against

---

## String Array Initialization (C/C++)

```c
char name[] = "freddie";       // 8 elements — includes the null terminator
char *names[] = {"Bob", "Jake", "Darcie"};   // array of pointers to char
```

- In `name`, the literal is a `char` array directly
- In `names`, each literal becomes a **pointer to its first character**
  - `names[0]` points to `'B'` in `{'B','o','b','\0'}`

Java uses similar syntax for arrays of `String` references:
```java
String[] names = {"Bob", "Jake", "Darcie"};
```

---

## Array Operations

- Operating on the whole array as **one unit**: assignment, catenation, equality/inequality, slicing
- **C family**: none built in, except via methods (Java, C++, C#)
- **Perl**: assignment yes, comparison no

---

## Python & Ruby Arrays

**Python** (`list`) — dynamic, **heterogeneous** (elements can be any type)
- Assignment copies the **reference**, not the value
- `+` catenates, `in` tests membership
- `is` — same object? · `==` — deep equality (recursively compares all referenced objects)

**Ruby** — elements are also object references
- `==` compares length + all corresponding elements (like Python)
- Catenation via the `Array` method

---

## Rectangular vs. Jagged Arrays

- **Rectangular**: every row has the same element count, every column too — models a true rectangular table
- **Jagged**: row lengths can differ — because a multidimensional array is really an **array of arrays**

```
Row 0: 5 elements
Row 1: 7 elements
Row 2: 12 elements
```

---

## Bracket Syntax Reflects the Model

**C, C++, Java** — support jagged, **not** rectangular; each dimension gets its own brackets:
```
myArray[3][7]
```

**C#, F#** — support **both**; rectangular uses one comma-separated bracket:
```
myArray[3, 7]
```

**In short:** jagged arrays are *nested* single-dimensioned arrays; rectangular arrays are treated as multidimensional from the start.

---

## Slices

- A **slice** is a substructure of an array — e.g. a matrix's first row, last row, or first column
- **Not** a new data type — just a mechanism for referencing part of an array as a unit
- If a language can't manipulate arrays as units at all, slices have no use there

```python
vector = [2, 4, 6, 8, 10, 12, 14, 16]
mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

---

## Python Slice Syntax

- Default lower bound is `0`
- `start:stop` — `stop` is the first subscript **after** the last one included

```python
vector[3:6]      # elements at 3, 4, 5 → [8, 10, 12]
mat[1]            # second row → [4, 5, 6]
mat[0][0:2]      # first two elements of row 0 → [1, 2]
vector[0:7:2]    # step of 2, every other element → [2, 6, 10, 14]
```

---

## Implementing Array Types

- Needs far more compile-time effort than primitive types
- Access code is generated at compile time, but must **run** at run time to produce the element's address
- No way to precompute the address for a reference like `list[k]` in advance

---

## Single-Dimensioned Arrays

- Implemented as a list of **adjacent memory cells**
- Assume `list`'s subscript lower bound is 0:

```
address(list[k]) = address(list[0]) + k * element_size
```

- First term = constant part; second term = variable part
- If element type and array storage are both static, the constant part is computable **before** run time — but the add/multiply still happen at run time

**General lower bound:**
```
address(list[k]) = address(list[lower_bound]) + ((k - lower_bound) * element_size)
```

---

## Single-Dimension Compile-Time Descriptor

- Array type · Element type · Index type
- Index lower bound · Index upper bound · Address

If there's no run-time range check and every attribute is static, only the access function is needed at run time — **no descriptor required**. If some attribute is dynamic, that part must be kept at run time.

---

## True Multidimensional Arrays

- Not the same as "array of arrays" (jagged) — more complex to implement
- Hardware memory is **linear**, so multi-dimensional data must be mapped onto it
- Two mapping schemes: **row major order** and **column major order** (the latter unused by any widely-used language)

```
Matrix:        Row major order:
3 4 7          3, 4, 7, 6, 2, 5, 1, 3, 8
6 2 5
1 3 8
```

---

## Row-Major Access Function

```
location(a[i,j]) = address of a[0,0] + ((i * n) + j) * element_size
```

- `n` = elements per row
- First term = constant part, last = variable part

**General lower bounds:**
```
location(a[i,j]) = address of a[row_lb, col_lb]
                  - (((row_lb * n) + col_lb) * element_size)
                  + (((i * n) + j) * element_size)
```

- Extends easily to any number of dimensions
- Each dimension adds one multiply + one add to the access function → costly for arrays with many subscripts

---

## Multidimensional Compile-Time Descriptor

- Multidimensioned array · Element type · Index type
- Number of dimensions
- Index range 0 … Index range n − 1
- Address

