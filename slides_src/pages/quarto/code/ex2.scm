(display "this is output") ; this is output
(newline) ; newline
(display 2) ; 2
(newline)
((lambda (x y)
   (display x)
   (display " ")
   (display y))
 2 3)(display ()) ; 2 3