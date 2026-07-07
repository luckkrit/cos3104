(define (safe-add a b)
  (if (and (number? a) (number? b))
      (+ a b)
      "Error: Both arguments must be numbers!"))