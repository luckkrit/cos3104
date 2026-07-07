2 ; an atom
+ ; procedure
* ; procedure
(+) ; value 0
(*) ; value 1
(2) ; *** ERROR IN console@26:1 -- Operator is not a PROCEDURE
(list 2) ; a list (2)
(list 2 3 4)      ; PROCEDURE: Evaluates arguments and ALLOCATES a NEW list (2 3 4).
(quote (2 3 4))   ; SPECIAL FORM: Returns a POINTER to a LITERAL list (2 3 4).
'(2 3 4)          ; SHORTHAND: Identical to (quote (2 3 4)); returns a POINTER.
