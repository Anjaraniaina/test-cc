# test-cc
## Description
This is a refactor of main.js of a classmate js project.

## Algorithmic Complexity Analysis
### What ?
It's a mean to know how algorithms perform in terms of both time and space.
There are two complexity:
* **time complexity:** it's about how long it will take.
* **space complexity:** it's about how much memory it will take.

### How ?
By following some basic instructions, we can somehow guess it.

* Variable declaration, assignment, and basic arithmetic operations have a constant time complexity O(1).
* Variables have O(1) space complexity if it stay constant.
* Dynamic variables such dynamic array, string or data structure like Map, Set and such can have a O(n) space complexity  
depending on the size of the data structure.
* Conditional statements have a constant time complexity O(1) for each condition check and corresponding code block.
* Loops have a linear time complexity O(n), where n is the size of the input data being iterated.
* Try-catch blocks have a constant time complexity O(1) unless the catch block contains operations with a different complexity.
* Switch statements have a constant time complexity O(1).
* The overall complexity of a block of code is determined by the dominant term.

### Practice
To put what we learned into practice, we will put complexity in comments directly in each of the code,  
both in the main.js and the main_no_refactor.js, then put the result here to compare them.

### Result
When comparing both, the only notable complexity measure is on the `simulateRiceCooker()` function.  
In the **main_no_refactor.js**, there is that `while(true)` condition that have a **O(n)** complexity.
Instead in the **main.js**, there's no such thing so it have a **O(1)** complexity overall.

### Conclusion
From the complexity analysis, the refactored **main.js** have a better score.