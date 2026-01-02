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

- Fortran can handle `end-of-file` and `input error` during `Read` operation by separate `label statements`. The `end-of-file` and `input error` are detected by the `input device hardware`.

```
Read(Unit=5, Fmt=1000, Err=100, End=999) Weight
```

- The serious error like array subscript range errors are almost never detected by hardware but found in generated code by the compiler which is by language design.

- In Java, subscript range checking is done at runtime by code the compiler generates. In C, such checking is typically omitted for performance reasons. Some languages make this checking optional (can be enabled/disabled).

```java
int points = new int[3];
points[3] = 40; // ❌ array index out of range
```

<ArrowDraw color="red" v-drag="[232,12,56,40,36]" />

<Box color="amber-light" v-drag="[177,0,56,40]">
Event
</Box>

<ArrowDraw color="red" v-drag="[423,13,53,40,153]" />

<Box color="red-light" v-drag="[476,4,50,40]">
Error
</Box>

---

[For better understanding]{class="text-2xl"}

Runtime Error Detection:

- Hardware detects: floating-point overflow, division by zero
- Compiler-generated code detects: array subscript range errors (hardware cannot detect)
    - Java: Always checks at runtime (throws exception)
    - C: No checking (performance reasons)
    - Some languages: Optional checking (can enable/disable)

---

- ### Basic Concepts (1.1)

- An `exception` is any unusual event (such as `end-of-file`) or error that is detectable by either hardware or software and may require special processing.
- The special processing that is required when an exception is detected is called `exception handling`.
- Exception handling is performed by a code unit or segment called an exception handler.
- An exception is `raised` or `throw` when its associated event occurs.

---

[User-defined Exceptions]{class="text-2xl"}

- Even without built-in exception-handling facilities, languages can handle user-defined, software-detected exceptions.
- **How it works:**
    - Exception is `detected within` a program unit (the function/subprogram)
    - Exception is `handled by` the unit's caller


---
layout: two-cols-title
---

::title::
[Design 1]{class="text-2xl"}

::left::
1. **Status variable (parameter)**: Pass an auxiliary parameter; the called function sets its value to indicate success/failure  https://onlinegdb.com/8xXau0Gu9

```c
void readFile(char* filename, int* status) {
    FILE* f = fopen(filename, "r");
    if (f == NULL) {
        *status = ERROR_FILE_NOT_FOUND;  // Detected here
        return;
    }
    *status = SUCCESS;
}
void main() {
    int status;
    // Pass status variable
    readFile("data.txt", &status);  
    if (status == ERROR_FILE_NOT_FOUND) {  // Handle here
        printf("Error: File not found!\n");
    }
}
```

::right::


2. **Return value (C style)**: The function returns a value that serves as an error indicator https://onlinegdb.com/wbrpVM0QF

```c
// Called function detects error and returns status
int readFile(char* filename) {
    FILE* f = fopen(filename, "r");
    if (f == NULL) {
        return ERROR_FILE_NOT_FOUND;  // Detected and returned
    }
    // ... read file ...
    return SUCCESS;
}

// Caller handles the error
void main() {
    int result = readFile("data.txt");
    
    if (result == ERROR_FILE_NOT_FOUND) {  // Handle here
        printf("Error: File not found!\n");
    }
}
```
::default::

---

[Design 1]{class="text-2xl"}

3. **Multiple Return Values (Go style)**: https://onlinegdb.com/uyio-GGST

```go
func readFileDetailed(filename string) (content string, bytesRead int, err error) {
	data, err := os.ReadFile(filename)
	
	if err != nil {
		return "", 0, fmt.Errorf("error reading %s: %w", filename, err)
	}
	
	if len(data) == 0 {
		return "", 0, fmt.Errorf("file %s is empty", filename)
	}
	
	return string(data), len(data), nil
}
```

---

[Design 2]{class="text-2xl"}

- Pass a label parameter to the subprogram https://onlinegdb.com/qFM6qngRE


```fortran-fixed-form
          CALL DIVIDE(X, Y, RESULT, *100, *200)
          
          PRINT *, 'Result:', RESULT
          GOTO 999
          
  100     PRINT *, 'ERROR: Division by zero!'
          GOTO 999
          
  200     PRINT *, 'ERROR: Overflow!'
          
  999     STOP
```

---
layout: two-cols-title
---

::title::
[Design 3]{class="text-2xl"}

- To have handler defined as a separate subprogram whose name is passed as a parameter to the called unit. https://onlinegdb.com/-LvA9FQ98

::left::

```csharp
using System;
class Program
{
    // Handler subprogram (defined by caller)
    static void ErrorHandler(string message)
    {
        Console.WriteLine($"ERROR: {message}");
    }
    // Called unit (receives handler as parameter)
    static void Divide(int a, int b, out int result, 
        Action<string> handler)
    {
        if (b == 0)
        {   // Calls the handler
            handler("Division by zero!");  
            result = 0;
            return;
        }
        result = a / b;
    }
```
::right::

```csharp 
    static void Main()
    {
        int result;
        // Must pass handler EVERY time
        // Uses handler
        Divide(10, 0, out result, ErrorHandler);  
        // Must pass even if not needed
        Divide(10, 2, out result, ErrorHandler);  
        Console.WriteLine($"Result: {result}");
    }
}
```

<StickyNote color="amber-light" textAlign="left" width="180px" title="Note" v-drag="[469,386,409,131]">

- You need to pass a handler subprogram with every call to every subprogram, whether it is needed or not
- To handle several different exception types, several handler routines must be passed, which complicates the code
</StickyNote>

::default::


---
layout: two-cols-title
---

::title::
[Why Built-in Exception Handling is Good]{class="text-2xl"}

::left::

<Thumb color="red-light" width="300px" dir="down" v-drag="[221,82,40,40,180]" />

**Without it:**

- Must write `if (error) { handle }` everywhere
- Code becomes messy and long
- Same checking code repeated many times

```java
// Without exception handling - CLUTTERED CODE
if (row >= 0 && row < 10 && col >= 0 && col < 20)
    sum += mat[row][col];
else
    System.out.println("Index range error on mat, row = " 
    + row + " col = " + col);

// Later in code...
if (row >= 0 && row < 10 && col >= 0 && col < 20)
    result = mat[row][col];
else
    System.out.println("Index range error...");
```

::right::

<Thumb color="green-light" width="300px" v-drag="[690,81,40,40]" />

**With it:**

- Write clean code
- Compiler adds checks automatically
- Code is shorter and cleaner

```java
// With exception handling - CLEAN CODE
try {
    sum += mat[row][col];      // No manual checking!
    result = mat[row][col];    // No manual checking!
    mat[row][col] = value;     // No manual checking!
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Index error: " + e.getMessage());
}

// The compiler inserts bounds checking automatically
// You don't see it, but it's there!
```

::default::

---
layout: two-cols-title
---

::title::
[Exception Propagation]{class="text-2xl"}

**What is Exception Propagation?**

- An exception raised in one function can be handled in a different function (usually the caller).

::left::

- Example Without Propagation (Old Way)

```java
// Function 1
void readFile() {
    // Must handle error HERE
    if (file not found) {
        System.out.println("Error!");
    }
}
// Function 2
void writeFile() {
    // Must handle error HERE
    if (file not found) {
        System.out.println("Error!");
    }
}
```

::right::

- Example With Propagation (Modern Way)

```java
void readFile() throws IOException {
    // No error handling here
    // Just let exception propagate
}
void writeFile() throws IOException {
    // No error handling here
    // Just let exception propagate
}
void main() {
    try {
        readFile();
        writeFile();
    } catch (IOException e) {
        // ONE handler for all file errors!
        System.out.println("File error: " + e.getMessage());
    }
}
```

::default::


---
layout: two-cols-title
---

::title::
[Exceptions supports in languages]{class="text-2xl"}

::left::

**Languages Without Built-in Exception Handling**

| Language | Error Handling Method | Year |
|----------|----------------------|------|
| **C** | Return codes, errno | 1972 |
| **Go** | Multiple return values (result, error) | 2009 |
| **Rust** | Result<T, E> type | 2010 |
| **Zig** | Error unions | 2016 |
::right::

**Languages WITH Built-in Exception Handling**

| Language | Exception Syntax | Year |
|----------|------------------|------|
| **Lisp** | First language with exceptions | 1960s |
| **Ada** | exception handling blocks | 1980 |
| **C++** | try/catch/throw | 1985 |
| **Java** | try/catch/throw/finally | 1995 |
| **Python** | try/except | 1991 |
| **C#** | try/catch/throw/finally | 2000 |
| **Scala** | try/catch/throw | 2004 |

::default::

---

### Design Issues (1.2)

The design issues for an exception-handling system in programming language.

- Predefinded Exceptions
    - Implicitly raised by errors detected by hardware
- User-defined Exception
    - Exlicitly raided by user code

---

[First Design Issue: Binding Exceptions to Handlers]{class="text-2xl"}
This occurs at two levels:

- Unit Level:

    - How to handle multiple exceptions that can be raised by different statements within a single unit
    - Example: A division-by-zero error handler might need to handle multiple division operations
    - The handler may need to identify which specific statement raised the exception

---

[First Design Issue: Binding Exceptions to Handlers]{class="text-2xl"}

- Higher Level (Propagation):

    - What happens when there's no local exception handler in the unit where the exception is raised?
    - The language designer must decide whether to propagate the exception to another unit, and if so, where
    - Trade-off:

        - If handlers must be local → many handlers must be written, complicating code
        - If exceptions propagate → a single handler might handle exceptions from several program units, requiring the handler to be more general than ideal


    - The challenge is making information about the exception available to the handler

---

[Second Design Issue: Control Flow After Handler Execution]{class="text-2xl"}

- After an exception handler executes, control can either:

1. Transfer outside the handler (to somewhere else in the program)
2. Terminate the program

- Terminology:

    - Continuation: Control continues after the handler executes
    - Resumption: In cases where the error is not fatal, execution can resume

---

[Second Design Issue: Control Flow After Handler Execution]{class="text-2xl"}

- Considerations:

    - Returning to the statement that raised the exception may seem logical, but it's only useful if the handler can modify values to prevent re-raising the exception
    - Otherwise, the exception will simply be re-raised
    - The required modification for an error exception is often difficult and may not be sound practice
    - This allows removing the problem without removing its cause

---

[Second Design Issue: Control Flow After Handler Execution]{class="text-2xl"}

- Related Concept: Finalization

    - When exception handling is included, a subprogram can terminate in two ways:

        1. Normal completion
        2. Encountering an exception


    - Finalization: The ability to specify code that must execute regardless of how the subprogram terminates
    - This is important for cleanup operations (closing files, releasing resources, etc.)

---

[Third Design Issue: User-Defined Exception Specification]{class="text-2xl"}

- How are user-defined exceptions specified?
- The usual answer: require declaration in a specification part of the program unit where they can be raised
- The scope of a declared exception is typically the scope of the program unit containing the declaration

---

[Fourth Design Issue: Predefined Exceptions]{class="text-2xl"}

When a language provides predefined exceptions, several design issues arise:

1. Default Handlers: Should the language run-time system provide default handlers for built-in exceptions, or should users be required to write handlers for all exceptions?
2. Explicit Raising: Can predefined exceptions be raised explicitly by the user program? (This is useful for testing or when the same error condition is detected by software)
3. Scope and Convenience: Whether predefined exceptions can be raised explicitly depends on convenience—are there software-detectable situations where users would want to use a predefined handler?

---

[Fifth Design Issue: Hardware-Detectable Errors]{class="text-2xl"}

- Can hardware-detectable errors be handled by user programs?
- If user programs cannot handle exceptions (those obviously caused by software error), the related question is: should there be any predefined exceptions at all?
- Predefined exceptions are implicitly raised by either hardware or system software

---

[Summary of Exception-Handling Design Issues]{class="text-2xl"}

The exception-handling design issues can be summarized as follows:

- Handler Specification and Scope: How and where are exception handlers specified, and what is their scope?
- Binding Exceptions to Handlers: How is an exception occurrence bound to an exception handler?
- Information Passing: Can information about an exception be passed to the handler?
- Control Flow (Continuation/Resumption): Where does execution continue, if at all, after an exception handler completes its execution?
- Finalization: Is some form of finalization provided?
- User-Defined Exceptions: How are user-defined exceptions specified?

---

[Summary of Exception-Handling Design Issues]{class="text-2xl"}

- Default Handlers for Predefined Exceptions: If there are predefined exceptions, should there be default exception handlers for programs that do not provide their own?
- Explicit Raising of Predefined Exceptions: Can predefined exceptions be explicitly raised?
- Hardware Errors as Exceptions: Are hardware-detectable errors treated as exceptions that may be handled?
- Existence of Predefined Exceptions: Are there any predefined exceptions?