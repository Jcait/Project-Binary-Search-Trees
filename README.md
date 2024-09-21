# Project-Binary-Search-Trees

## Assignment

The Assignment is to create a balanced Binary Search Tree in Javascript. THe full brief can be viewed [here](https://www.theodinproject.com/lessons/javascript-binary-search-trees)] at the Odin Project Website

### First Step Node Class

First step is to create the Binary Tree Node class

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

Afterwards as the brief outlines, create the Binary tree class

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

First steps to this function was to "clean" the array to speak, removing duplicates and sorting it numerically

```js
 cleanArr(arr) {
    let sortedArr = arr.sort(function (a, b) {
      return a - b;
    });
    let removeDupe = [...new Set(sortedArr)];
    return removeDupe;
  }
```

Afterwards I looked into building the function, the goal was to have do it recursivly,

first was the initial steps of the function

```js
let newArr = this.cleanArr(arr);
let start = 0;
let end = newArr.length - 1;
let mid = Math.floor((start + end) / 2);
return new BinaryTreeNode();
```

Since I want it to be recusive it was time to build the next function inside the `buildTree()`

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

This splits the array up and adds the middle of it to the root of the current node,we can set the left and right nodes to the function with adjusting the start and end parameters for the right and left nodes repseticvely

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

Building it with the code above and using the `prettyprint()` function provided The Odin Project, the Tree comes out as below

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
