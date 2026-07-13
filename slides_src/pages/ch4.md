---
layout: section
---

# Type Binding
### Data Types in Programming Languages

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

