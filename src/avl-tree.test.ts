import { Tree } from './avl-tree';

test('tree is instantiated', () => {
  const tree = new Tree<number>();
  expect(tree.root).toBe(null);
});

test('values are added to tree', () => {
  const tree = new Tree<number>();
  tree.add(10);
  tree.add(5);
  tree.add(15);
  expect(tree.root.value).toBe(10);
  expect(tree.root.left.value).toBe(5);
  expect(tree.root.right.value).toBe(15);
});

test('values are balanced in tree', () => {
  const tree = new Tree<number>();
  tree.add(1);
  tree.add(2);
  tree.add(3);
  tree.add(4);
  tree.add(5);
  tree.add(6);
  tree.add(7);
  tree.add(8);
  expect(tree.root.value).toBe(4);
});

test('string values are balanced in tree', () => {
  const tree = new Tree<string>();
  tree.add('a');
  tree.add('b');
  tree.add('c');
  tree.add('d');
  tree.add('e');
  tree.add('f');
  tree.add('g');
  tree.add('h');
  expect(tree.root.value).toBe('d');
});
