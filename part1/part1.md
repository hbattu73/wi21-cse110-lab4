
# Part 1: Intro to Javascript

1. The length of input variable, `prices`, will be printed to the console. Variables declared using `var` *inside* a function have a function scope and thus can be accessible from
anywhere within a function. Therefore, the value of `i` that will be printed after loop completion is the length of `prices`.
2. The discounted price of the last item in `prices` will be printed, essentially for the same reason as question 1. Variables declared using `var` has function scope when declared inside a function. 
3. The final price of the last item in `prices` will be printed. Since `var` has function scope, it follows that `finalPrice` after loop completion is the final price of the last item in `prices`. 
4. Our output should be: `[50, 100, 150]`. Essentially, we are printing the values of the variables upon loop completion. Because variables declared using `var` inside a function are function-scoped and can be redeclared/modified, they can be modified within the loop and can be accessed outside of the for-loop construct. 3 is the value of `i` after loop completion and 150 are the values of `discountedPrice` and `finalPrice` after the last iteration of the loop.
5. Unlike `var`, variables declared using `let` are block-scope. Because `i` is declared within the for-loop construct, it is loop-local and thus only visible from inside the for- loop. Therefore, console will log an error.
6. Likewise to question 5, we are trying to access `discountedPrice` from outside the for-loop construct from which it was declared and thus, the console will log an error.
7. The final price of the last item in `prices` will be printed to the console because `let` is block-scoped and `finalPrice` is declared within the function and outside of the for-loop. 
8. `let` also does not allow redeclarations and `discountedPrice` is being redeclared for every iteration of the for-loop. This will throw an error.
9. An error will be thrown to console because `let` is block-scoped and `i` is defined within the for-loop construct, and thus it can't be accessible outside of the loop.
10. Likewise to `let`, variables defined using `const` are block-scoped. Thus, `discountedPrice` is loop-local because it is declared within the for-loop construct and thus can't be accessed from outside the loop. An error will subsequently be thrown.
11. I believe this question is kind of vague. `const` variables cannot be reassigned, as any attempt to do so will throw an error. Assuming we ignore this error, then `finalPrice` would get modified in every iteration because it was declared outside of the for-loop. We are then able to access `finalPrice` without error outside of the loop because `const` is block-scoped.
12. Variables defined using `const` cannot be redeclared or reassigned, which is what occurs inside the for-loop. 
14.
    a. The output is '32'. If you add a string to a number (or other value) everything is converted into a string first.
    b. The output is 1. 3 is treated as a number here because we are subtracting, instead of adding. 
    c. The output is 3. null is evalued to 0 in mathematical expressions.
    d. The output is '3null'. Everything is converted into a string first when adding to a string. 
    e. The output is 4. true is evaluated as 1 in mathematical expressions. 
    f. The output is 0. Both null and false are evaluated as 0 in mathematical expressions.
    g. The output is '3undefined'. Everything is converted into a string first when adding to a string.
    h. The output is NaN. undefined is evaluated as NaN in mathematical expressions. Therefore, a valid output cannot be evaluated.
