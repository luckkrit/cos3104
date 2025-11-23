---
layout: section
---

# Names, Bindings, and Scopes

---

# Contents

<Toc minDepth="2"/>

---

## 1. Introduction

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

## 2. Design Issues

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
    int x = 10;  // local name x shadows global x
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

## 3. Variables

A program variable is an abstraction of a computer memory cell or collection of cells.

- Name – Variable names
- Address - The address of a variable is the machine memory address with which it is associated.
- Type - The type of a variable determines the range of values the variable can store and the set of operations that are defined for values of the type.
- Value - The value of a variable is the contents of the memory cell or cells associated with the variable.
