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

  cleanArr(arr) {
    let sortedArr = arr.sort(function (a, b) {
      return a - b;
    });
    let removeDupe = [...new Set(sortedArr)];
    return removeDupe;
  }
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

testArr = [7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

test = new BinaryTree(testArr);
