'() ; ()
'(I) ; (I)
'(I LIKE) ; (I LIKE)
'(I LIKE PROGRAMMING) ; (I LIKE PROGRAMMING)

(list) ; ()
(list 'I) ; (I)
(list 'I 'LIKE) ; (I LIKE)
(list 'I 'LIKE 'PROGRAMMING) ; (I LIKE PROGRAMMING)

(equal? '() (list)) ; #t
(equal? '(I) (list 'I)) ; #t
(equal? '(I LIKE) (list 'I 'LIKE)) ; #t
(equal? '(I LIKE PROGRAMMING) (list 'I 'LIKE 'PROGRAMMING)) ; #t