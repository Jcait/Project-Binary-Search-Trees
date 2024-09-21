# Project-Binary-Search-Trees

## Assignment

The assignment is to create a balanced Binary Search Tree in Javascript. The full brief can be viewed [here](https://www.theodinproject.com/lessons/javascript-binary-search-trees). at the Odin Project Website

### First Step Node Class

The first step is to create the Binary Tree Node class.

```js
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
```

### Binary Tree Class

As the brief outlines, create the Binary tree class.

```js
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(arr) {
    this.root = arr;
  }
}
```

### Build Tree

The first step to this function was to "clean" the array to speak, removing duplicates and sorting it numerically.

```js
 cleanArr(arr) {
    let sortedArr = arr.sort(function (a, b) {
      return a - b;
    });
    let removeDupe = [...new Set(sortedArr)];
    return removeDupe;
  }
```

Since the project is about Binary Search on an array, the goal was to create a recursive function to build the tree.

First were the initial steps of the function.

```js
let newArr = this.cleanArr(arr);
let start = 0;
let end = newArr.length - 1;
let mid = Math.floor((start + end) / 2);
return new BinaryTreeNode();
```

Since I want it to be recusive, it was time to build the next function inside the `buildTree()`

```js
function setValue(arr, start, end) {
  // Case to end the recursion
  if (start > end) {
    return null;
  }
  let mid = Math.floor((start + end) / 2);
  let root = new BinaryTreeNode(newArr[mid]);
  return root;
}
```

This splits the array up and adds the middle of it to the root of the current node. We can set the left and right nodes to the function by adjusting the start and end parameters for the right and left nodes accordingly.

```js
  buildTree(arr) {
    let newArr = this.cleanArr(arr);
    // function exists so it can be called recursively
    let start = 0;
    let end = newArr.length - 1;
    console.log(newArr);

    function setValue(arr, start, end) {
        // Case to end the recursion
      if (start > end) {
        return null;
      }
      let mid = Math.floor((start + end) / 2);
      let root = new BinaryTreeNode(newArr[mid]);

      root.left = setValue(arr, start, mid - 1);
      root.right = setValue(arr, mid + 1, end);
      return root;
    }
    return setValue(newArr, start, end);
  }
```

Building it with the code above and using the `prettyprint()` function provided by the Odin Project, the tree comes out as below.

```
           ┌── 6345
 │       ┌── 324
 │   ┌── 67
 │   │   │   ┌── 23
 │   │   └── 9
 └── 8
     │       ┌── 7
     │   ┌── 5
     └── 4
        │   ┌── 3
        └── 1
```

###Insert
Again we start with the basics of what the function has to achieve

```js
insert(value) {
    if (value > this.root.value) {
      this.root.right = new BinaryTreeNode(value);
    } else if (value < this.root.value) {
      this.root.left = new BinaryTreeNode(value);
    } else {
      return false;
    }
  }
```

After figuring out the main goal, we create another recusive function to achieve it

```js
  insert(value) {
    let node = this.root;
    function compare(root, value) {
      if (root.value === value) {
        return false;
      }
      if (value < root.value) {
        if (!root.left) {
          root.left = new BinaryTreeNode(value);
        } else {
          compare(root.left, value);
        }
      }
      if (value > root.value) {
        if (!root.right) {
          root.right = new BinaryTreeNode(value);
        } else {
          compare(root.right, value);
        }
      }
    }
    compare(node, value);
  }
```
