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
    this.test = function () {
      return;
    };
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
    if (typeof callback !== "function") {
      throw new Error("PLease enter a function");
    }
    let queue = new Array(this.root);
    while (queue.length > 0) {
      if (queue[0] === null) {
        return "end of queue";
      }
      callback(queue[0]);
      if (queue[0].left && queue[0].right) {
        queue.push(queue[0].left);
        queue.push(queue[0].right);
      } else if (!queue[0].left) {
        queue.push(queue[0].right);
      } else if (!queue[0].right) {
        queue.push(queue[0].left);
      } else {
        queue.shift();
      }
      queue.shift();
    }
  }

  inOrderTraversal(callback) {
    if (typeof callback !== "function") {
      throw new Error("PLease enter a function");
    }
    return this.inOrder(callback, this.root);
  }

  inOrder(callback, node) {
    if (node === null) {
      return null;
    }
    this.inOrder(callback, node.left);
    callback(node);
    this.inOrder(callback, node.right);
  }

  preOrderTraversal(callback) {
    if (typeof callback !== "function") {
      throw new Error("PLease enter a function");
    }
    return this.preOrder(callback, this.root);
  }

  preOrder(callback, node) {
    if (node === null) {
      return null;
    }
    callback(node);
    this.preOrder(callback, node.left);
    this.preOrder(callback, node.right);
  }

  postOrderTraversal(callback) {
    if (typeof callback !== "function") {
      throw new Error("PLease enter a function");
    }
    return this.postOrder(callback, this.root);
  }

  postOrder(callback, node) {
    if (node === null) {
      return null;
    }

    this.postOrder(callback, node.left);
    this.postOrder(callback, node.right);
    // console.log(`Callback: ${callback(node)}`);
    callback(node);
  }

  height(node) {
    return this.findHeight(node);
  }

  findHeight(node) {
    if (node === null) {
      return 0;
    }
    const lDeph = this.findHeight(node.left);
    const rDeph = this.findHeight(node.right);
    return Math.max(lDeph, rDeph) + 1;
  }

  deph(node) {
    return this.findDeph(this.root, node, 0);
  }

  findDeph(root, node, count) {
    if (root === node) {
      console.log("match");
      return count;
    } else if (root === null) {
      return null;
    }

    let left = this.findDeph(root.left, node, count + 1);
    let right = this.findDeph(root.right, node, count + 1);
    return Math.max(left, right);
  }
  printNode(node) {
    console.log(node);
  }

  isBalanced(root = this.root) {
    const left = this.height(root.left);
    const right = this.height(root.right);
    if (Math.max(left, right) - Math.min(left, right) <= 1) {
      return true;
    } else {
      return false;
    }
  }

  rebalance() {
    // console.log(this.addArr(arr, this.root));
    if (this.isBalanced(this.root)) {
      return "The tree is balanced";
    } else {
      let arr = this.addArr(new Array(), this.root);
      this.root = this.buildTree(arr);
    }
  }
  addArr(arr, root) {
    if (root === null) {
      return null;
    }
    this.addArr(arr, root.left);
    this.addArr(arr, root.right);
    arr.push(root.value);
    return arr;
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

const randomArray = () => {
  let arr = [];
  while (arr.length < 15) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
};

testArr = [7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 30, 34, 32, 31];

test = new BinaryTree(randomArray());
prettyPrint(test.root);
