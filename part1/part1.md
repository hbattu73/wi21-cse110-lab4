
# Part 1: Intro to Javascript
## Variables and Scoping
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
## Basic Operators & Type Conversion 
### Arithmetic
13. a. student[name]
    
    b. student['Grad Year']
    
    c. student.greeting()
    
    d. student['Favorite Teacher'].name
    
    e. student[courseLoad][0]
 
14. a. The output is '32'. If you add a string to a number (or other value) everything is converted into a string first.

    b. The output is 1. 3 is treated as a number here because we are subtracting, instead of adding. 
    
    c. The output is 3. null is evalued to 0 in mathematical expressions.
    
    d. The output is '3null'. Everything is converted into a string first when adding to a string. 
    
    e. The output is 4. true is evaluated as 1 in mathematical expressions. 
    
    f. The output is 0. Both null and false are evaluated as 0 in mathematical expressions.
    
    g. The output is '3undefined'. Everything is converted into a string first when adding to a string.
    
    h. The output is NaN. undefined is evaluated as NaN in mathematical expressions. Therefore, a valid output cannot be evaluated.
### Comparison
15. a. The output is true. When comparing values of different type, Javascript converts the values to numbers. The string '2' becomes the number 2.

    b. The output is false. Strings are compared letter-by-letter. The character '2' is greater than the character '1'.
    
    c. The output is true. When comparing values of different type, the values get converted to numbers. The string '2' becomes the number 2.
    
    d. The output is false. A strict equality operator === checks the equality without type conversion. 2 is a different type than '2'.
    
    e. The output is false. When comparing values of different type, the values get converted to numbers. true is evaluated as 1.
    
    f. The output is true. Values that are intuitively "non-empty" become true in a Boolean conversion. Both values are then of the same type and same value. 

16. If the operands are of different types, the equality operator (==) attempts to convert the operands to the same type before comparing. The strict equality operator (===) always considers operands of different types to be different.  
17. The output is 'How are you?'. The first if-statement gets skipped because values of different type get converted to numbers. Since true is evaluated to 1, the first if-statement is false. The second if-statement is true because 2 is intuitively "non-empty", and thus is converted to true.
18. Check js file.
19. The output is [6, 8, 10]. The order of logic is as follows:
    * For every item in [1, 2, 3]:
        * call `doSomething(item, function(x))`
        * `doSomething(item, function(x))` returns `function(item + 2)`
    Thus, we return the array where every item in the array is first added with 2, and this value is passed as an input to `function(x)`, which multiplies the value by 2. 
20. Check js file.
21. The output is 
    > 1
    > 4
    > 3
    > 2
