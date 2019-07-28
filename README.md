
# Bakery Tech Evaluation
 - Name: **Jitendra Gehlot**
 - email: **jitengehlot@gmail.com**
 - phone: **+61 410 655 878** 

## Summary
 - it's a "bin-packing" problem
 - tree search, depth first, with child node population subset  
 - [readable code](https://github.com/jitengehlot/bakery-tech-eval/tree/master/code)
 - [requirements](https://github.com/jitengehlot/bakery-tech-eval/blob/master/doc/bakery.pdf)
 - [core of the solution as code](https://github.com/jitengehlot/bakery-tech-eval/blob/master/code/Bakery.class.js#L115)
  
## 1. Explanation of the bakery packing algorithm 
The Bakery packing problem, belongs the bin-packing family of algorithms. i.e. "how to select the smallest number of; (baskets, bins, items) to fulfil the total requested items". The goal of a good bin-packing algorithm is to achieve a result within low-order polynomial time, I attempt to achieve this through sorting, and logical subsets. 

### 2. My Solution
If we accept that the number of pack configurations will be finite then we know the number of solutions, must be either finite, or unsolvable, this led me to think of it as a tree, with branches for calculation and nodes for decisions.
   
 1. The root node contains the original value 'requested number of items', 
 1. We create child nodes,  with each child node being assigned the value of a pack size, until all pack sizes have been allocated. **note:** _we only create a child node for a pack that is; less than or equal to, the 'number of items'_  
 1. Then perform an integer division at the node -producing the edge- using the 'requested number of items' by the 'node value' (pack size), resulting in; a count of packs -for that node-, and a remaining 'number of items'
    1. if the integer division does not have a remainder, we record the node value (pack size) and the whole number count, and return to the parent node 
    1. a remainder of the division indicates we have not fulfilled the 'requested number of items'.  
        1. We now create a new set of child nodes, below the current node, similar to step [2]. note: that child nodes values (pack size we want to search) from here; will be less than of equal to the remainder, therefore limiting the search space  
        1. perform the actions of [3], on this set of nodes.


#### 2.1 Pseudo code

  - **input**: _numberOfItems_
  - sort pack sizes for the item type in descending order 
  - extract the numberOfItems
  - loop through the pack sizes for the item type  
    - is numberOfItems a multiple of a single pack (division) with no remainder
      - YES ---> return the multiple as a count 
      - NO 
        -- we take the remainder of the division and test equal or smaller sized packs             
        -- repeat until remainder is zero or no solution can be found 
  - **output**: pack of size & (count of packs of a certain size)


## 3 Steps to compile and run the code  

### 3.1 download code

#### 3.1.1 via GitHUB
To download the full code please clone the following repository on GitHUB 
 - `git clone https://github.com/jitengehlot/bakery-tech-eval BakeryTechEval`  

### 3.2 execute code 

#### 3.2.1 locally 
 - `git clone https://github.com/jitengehlot/bakery-tech-eval BakeryTechEval`
 - `cd BakeryTechEval`
 - `google-chrome app.html`  (assuming UNIX command line, with Google Chrome installed)
 
## 4. Tests 
 
### 4.1 test cases 
 - PASS - working solution with array input 
 - PASS - working solution with string input
 - PASS - invalid input with number input
 - PASS - random working and invalid lines
 - PASS - empty array
 - PASS - null input
 - PASS - no solution
 - PASS - empty string

### 4.2 test execution

#### 4.2.1 locally
 - `git clone https://github.com/jitengehlot/bakery-tech-eval BakeryTechEval`
 - `cd BakeryTechEval`
 - `google-chrome tests.html`  (assuming UNIX command line, with Google Chrome installed)


## 5. Data 
The data format, structure and order are important. Here I have restructured the data to allow for efficient access.  
By denormalising the item code and name (as per the JSON version), we can save on storage space, search time, and indexing (depending on the backend storage solution) 
 
### 5.1 Original 

|  Name                | Code | Packs      |
| -------------------- | ---- | ---------- | 
| **Vegemite Scroll**  | VS5  | 3 @ $ 6.99 | 
|                      |      | 5 @ $ 8.99 |
|                      |      |            |
| **Blueberry Muffin** | MB11 | 2 @ $ 9.95 |  
|                      |      | 5 @ $16.95 |  
|                      |      | 8 @ $24.95 | 
|                      |      |            |
| **Croissant**        | CF   | 3 @ $ 5.95 |  
|                      |      | 5 @ $ 9.95 |  
|                      |      | 9 @ $16.99 | 
|                      |      |            |

### 5.2 table format 

| key   |  Name                | Code | pack_size  | price |
| ----- | -------------------- | ---- | ---------- | ----- | 
| VS5_3 | Vegemite Scroll      | VS5  | 3          |  6.99 | 
| VS5_5 | Vegemite Scroll      | VS5  | 5          |  8.99 |
| MB11_2| Blueberry Muffin     | MB11 | 2          |  9.95 |  
| MB11_5| Blueberry Muffin     | MB11 | 5          | 16.95 |  
| MB11_8| Blueberry Muffin     | MB11 | 8          | 24.95 | 
| CF_3  | Croissant            | CF   | 3          |  5.95 |  
| CF_5  | Croissant            | CF   | 5          |  9.95 |  
| CF_9  | Croissant            | CF   | 9          | 16.99 | 


### 5.3 JSON format
```json
{
    "name": {
      "VS5":  "Vegemite Scroll",
      "MB11": "Blueberry Muffin",
      "CF":   "Croissant" 
    },
    "products": {
      "VS5": {
        "5": 8.99,
        "3": 6.99
      },
      "MB11": {
        "8": 24.95,
        "5": 16.95,
        "2": 9.95
      },
      "CF": {
        "9": 16.99,
        "5": 9.95,
        "3": 5.95
      }
    }
}
```



## 6. Decisions & Assumptions

### 6.1 Assumptions
 - only solutions that provide whole number matching pack sizes will be accepted

### 6.2 No Solution
If there was not complete solution, i.e. the number of request items could not be packed with the pack size configurations supplied, then the request was marked with "No Solution".
 - A solution this issue could be: increasingly add 1 to the number of items request until we find a solution, of course this would increase the cost price etc. leading to a new search domain, "what is the lowest cost for extra items ... "

### 6.3 Language selection
_**ECMAScript6** (aka ES6, JavaScript, or NodeJS)_
