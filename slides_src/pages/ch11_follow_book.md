---
layout: section
transition: fade
---

# Exception Handling

---

# Contents

<Toc minDepth="2" columns="2"/>

---

## Introduction

- Most computer hardware systems can detect certain runtime errors(like floating-point overflow)

**Early Programming Languages:**
- Could not detect or handle runtime errors
- Transferred control to the OS when errors occurred
- OS displayed error message (meaningful or cryptic)
- Program was then terminated

---

- Fortran can handle `end-of-file` and `error` during `READ` operation by separate `label statements`.

```
Read(Unit=5, Fmt=1000, Err=100, End=999) Weight
```

- The serious error like array subscript range errors are almost never detected by hardware but found in generated code by the compiler which is by language design.

- In Java, subscript range checking is done at runtime by code the compiler generates. In C, such checking is typically omitted for performance reasons. Some languages make this checking optional (can be enabled/disabled).

```java
int points = new int[3];
points[3] = 40; // ❌ array index out of range
```

---

[For better understanding]{class="text-2xl"}

Runtime Error Detection:

- Hardware detects: floating-point overflow, division by zero
- Compiler-generated code detects: array subscript range errors (hardware cannot detect)
    - Java: Always checks at runtime (throws exception)
    - C: No checking (performance reasons)
    - Some languages: Optional checking (can enable/disable)