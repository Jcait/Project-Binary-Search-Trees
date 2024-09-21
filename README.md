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
