import { Tree } from './avl-tree';

test('values are added to tree', () => {
  const tree = new Tree<number>(10, 5);
  tree.add(15);
  tree.add(17, 4, 6);
  expect(tree.root.value).toBe(10);
  expect(tree.root.left.value).toBe(5);
  expect(tree.root.right.value).toBe(15);
});

test('values are balanced in tree', () => {
  const tree = new Tree<number>(1, 2, 3, 4, 5, 6, 7, 8);
  expect(tree.root.value).toBe(4);
});

test('string values are balanced in tree', () => {
  const tree = new Tree<string>('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h');
  expect(tree.root.value).toBe('d');
});
