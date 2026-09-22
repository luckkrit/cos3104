---

<!-- 

---
layout: section
---

# Enumeration Types

---

## What Is an Enumeration?

- A type whose possible values are all **named constants**
- In many languages (C, C++, C#), constants map to integers starting at **0** by default — and can be assigned explicitly:

```c
enum Colors { Red = 1, Blue = 4 };
```

---

## Enum — Design Issues

1. Can the same enumeration constant appear in **more than one** type definition? If so, how is its type checked?
2. Can an enum value be **coerced** to `int` automatically?
3. Can another type be **coerced** to an enum automatically?

All three concern **type checking**: coercion in either direction weakens the guarantees an enum is supposed to provide.

---

## C: Weak Type Checking

```c
enum Colors { Red = 1, Blue = 4 };

enum Colors c = 99;  // Compiles! Even though 99 is neither Red nor Blue
int x = Blue + 10;   // Also compiles — enum flows freely into int
```

Assigning **any** integer to an enum variable means it may not match any defined constant — C gives almost no real type checking for enums.

---

## C++: Fixes One Direction

```cpp
enum colors {red, blue, green, yellow, black};
colors myColor = blue;

int x = myColor + 10;   // OK — enum → int still coerces (x = 11)
myColor = 4;             // ERROR — int → enum requires a cast
myColor = (colors)4;    // OK — explicit cast required
myColor++;                // ERROR — needs int → enum, the blocked direction
```

`enum class` (C++11) closes **both** directions — casts required everywhere.

---

## C#: Closes Both Directions

```csharp
enum Colors { Red = 1, Blue = 4 }
Colors c = Colors.Blue;

int x = c;               // ERROR — must cast: (int)c
Colors d = 4;             // ERROR — must cast: (Colors)4
int y = (int)c + 10;    // OK — explicit cast
```

---

## Enum Evaluation

**Readability:** named values are clearer than coded numeric values

**Reliability (in theory):**
1. No arithmetic on enum values
2. No assigning values outside the defined range

| Language | (1) No arithmetic? | (2) No out-of-range values? |
|---|---|---|
| **Java 5.0** | ✅ True — no operators; must call `ordinal()` | ✅ True — no int→enum path at all, even with a cast |
| **C#** | ❌ False — allows `enum + int`, `enum - int`, bitwise ops without a cast (only `enum + enum` is blocked) | ⚠️ Casting is allowed; must check manually with `Enum.IsDefined` |
| **C** (plain) | ❌ Not restricted | ❌ Not restricted |

-->



