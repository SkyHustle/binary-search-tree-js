const Tree   = require('../lib/tree');
const Node   = require('../lib/node');
const assert = require('assert');

describe('initializes with a root node', function() {
  it('creates the root from the first value passed in', function() {
    var tree = new Tree(1);

    assert.equal(tree.root.data, 1);
  });

  it('sets a higher value passed in as its right node', function() {
    var tree = new Tree(6);
    tree.addValue(10);

    assert.equal(tree.root.data, 6);
    assert.equal(tree.root.right.data, 10);
  });

  it('sets a lower value passed in as its left node', function() {
    var tree = new Tree(6);
    tree.addValue(4);

    assert.equal(tree.root.data, 6);
    assert.equal(tree.root.left.data, 4);
  });

  it('sets a third value correctly in the tree', function() {
    var tree = new Tree(6);
    tree.addValue(4);
    tree.addValue(2);

    assert.equal(tree.root.data, 6);
    assert.equal(tree.root.left.data, 4);
    assert.equal(tree.root.left.left.data, 2);
  });

  it('sets a fourth value correctly in the tree', function() {
    var tree = new Tree(6);
    tree.addValue(4);
    tree.addValue(2);
    tree.addValue(5);

    assert.equal(tree.root.data, 6);
    assert.equal(tree.root.left.data, 4);
    assert.equal(tree.root.left.left.data, 2);
    assert.equal(tree.root.left.right.data, 5);
  });

  it('sets values correctly in the tree', function() {
    var tree = new Tree(10);
    tree.addValue(8);
    tree.addValue(6);
    tree.addValue(4);
    tree.addValue(11);
    tree.addValue(14);
    tree.addValue(12);

    assert.equal(tree.root.data, 10);
    assert.equal(tree.root.left.data, 8);
    assert.equal(tree.root.left.left.data, 6);

    assert.equal(tree.root.right.data, 11);
    assert.equal(tree.root.right.right.data, 14);
    assert.equal(tree.root.right.right.left.data, 12);
  });
});
