const Node = require('./node');

function Tree(data) {
  this.root  = new Node(data);
}

Tree.prototype.addValue = function(data) {
  if (this.root.data <= data) {
    if (this.root.right === null) {
      this.root.right = new Node(data)
    } else {
      searchAndAdd(this.root.right, data)
    }
  } else if (this.root.data >= data) {
    if (this.root.left === null) {
      this.root.left = new Node(data)
    } else {
      searchAndAdd(this.root.left, data)
    }
  }
  return this;
}

function searchAndAdd(node, data) {
  if (node.data >= data) {
    if (node.left === null) {
      node.left = new Node(data)
    } else {
      searchAndAdd(node.left, data)
    }
  } else if (node.data <= data) {
    if (node.right === null) {
      node.right = new Node(data)
    } else {
      searchAndAdd(node.right, data)
    }
  }
}

module.exports = Tree;
