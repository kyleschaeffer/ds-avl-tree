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

test('in-order array values are sorted', () => {
  const tree = new Tree<number>(5, 9, 3, 18, 7, 4, 5, 1, 0, -6);
  expect(tree.values).toEqual([-6, 0, 1, 3, 4, 5, 5, 7, 9, 18]);
});

test('pre-order array values are correct', () => {
  const tree = new Tree<number>(8, 3, 10, 1, 6, 14, 4, 7, 13);
  expect(tree.valuesPreOrder).toEqual([8, 3, 1, 6, 4, 7, 13, 10, 14]);
});

test('post-order array values are correct', () => {
  const tree = new Tree<number>(8, 3, 10, 1, 6, 14, 4, 7, 13);
  expect(tree.valuesPostOrder).toEqual([1, 4, 7, 6, 3, 10, 14, 13, 8]);
});

test('bft array values are correct', () => {
  const tree = new Tree<string>('j', 'g', 'h', 'd', 'f', 'e', 'b', 'c', 'i', 'a', 'k');
  expect(tree.bftValues).toEqual(['f', 'd', 'h', 'b', 'e', 'g', 'j', 'a', 'c', 'i', 'k']);
});
