(cond ((> 3 2) "greater")
    ((< 3 2) "lesser")) ; has the value greater

(cond ((> 3 3) "greater")
    ((< 3 3) "lesser")
    (else "equal") ; has the value equal
)

(define n -5)
(cond ((< n 0) "negative")
    ((> n 0) "positivie")
    (else "zero")
) ; has the value negative