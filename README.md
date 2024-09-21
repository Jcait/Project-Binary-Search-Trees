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
