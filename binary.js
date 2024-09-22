class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(arr) {
    this.root = this.buildTree(arr);
  }

  buildTree(arr) {
    let newArr = this.cleanArr(arr);
    return this.setValue(newArr, 0, newArr.length - 1);
  }
  setValue(arr, start, end) {
    // Case to end the recursion
    if (start > end) {
      return null;
    }
    let mid = Math.floor((start + end) / 2);
    let root = new BinaryTreeNode(arr[mid]);

    root.left = this.setValue(arr, start, mid - 1);
    root.right = this.setValue(arr, mid + 1, end);
    return root;
  }

  cleanArr(arr) {
    let sortedArr = arr.sort(function (a, b) {
      return a - b;
    });
    let removeDupe = [...new Set(sortedArr)];
    return removeDupe;
  }
  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  insertNode(root, value) {
    if (root.value === value) {
      return false;
    }
    if (value < root.value) {
      if (!root.left) {
        root.left = new BinaryTreeNode(value);
        return root;
      } else {
        this.insertNode(root.left, value);
        return root;
      }
    }
    if (value > root.value) {
      if (!root.right) {
        root.right = new BinaryTreeNode(value);
        return root;
      } else {
        this.insertNode(root.right, value);
        return root;
      }
    }
  }
  deleteItem(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return null;
    }
    if (root.value > value) {
      root.left = this.deleteNode(root.left, value);
      return root;
    } else if (root.value < value) {
      root.right = this.deleteNode(root.right, value);
      return root;
    } else {
      if (!root.right && !root.left) {
        return null;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      } else {
        let tempValue = this.findMin(root.right);
        root.value = tempValue.value;

        root.right = this.deleteNode(root.right, tempValue.value);
        return root;
      }
    }
  }

  findMin(current) {
    while (current.left) {
      current = current.left;
    }
    return current;
  }
  find(value) {
    return this.match(this.root, value);
  }

  match(root, value) {
    if (!root) {
      return "Value not Found";
    }
    if (root.value === value) {
      return root;
    } else if (root.value > value) {
      return this.match(root.left, value);
    } else if (root.value < value) {
      return this.match(root.right, value);
    } else {
      return "Value not Found";
    }
  }

  levelOrder(callback) {
    let queue = [];
    queue.push(this.root, this.root);
    return queue;
  }

  printNode(node) {
    node.forEach((x) => {
      return x;
    });
  }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

testArr = [7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 30, 34, 32, 31];

test = new BinaryTree(testArr);
