import { Node } from './avl-tree-node';

/**
 * AVL binary search tree data structure
 *  - Very fast lookup speeds
 *  - Self-balancing using AVL "rotation" technique
 *  - Worst case is O(log n) –– better than basic BST
 */
export class Tree<T> {
  /**
   * The root node of the tree
   */
  public root: Node<T>;

  /**
   * Instiantiate a new AVL tree
   */
  constructor(...values: T[]) {
    // New empty tree
    this.root = null;

    // Add values to the tree
    this.add(...values);
  }

  /**
   * Use depth-first-traversal (DFT) to create an in-order array of tree values
   *  - Sorted list of tree values
   */
  public get values(): T[] {
    // Values array
    const values: T[] = [];

    // Recursively traverse tree for node values
    function traverse(node: Node<T>): void {
      if (!node) return;
      traverse(node.left);
      values.push(node.value);
      traverse(node.right);
    }
    traverse(this.root);

    return values;
  }

  /**
   * Use depth-first-traversal (DFT) to create a pre-ordered array of tree values
   *  - Could be good for creating a deep copy of tree values
   */
  public get valuesPreOrder(): T[] {
    // Values array
    const values: T[] = [];

    // Recursively traverse tree for node values
    function traverse(node: Node<T>): void {
      if (!node) return;
      values.push(node.value);
      traverse(node.left);
      traverse(node.right);
    }
    traverse(this.root);

    return values;
  }

  /**
   * Use depth-first-traversal (DFT) to create a post-ordered array of tree values
   *  - Could be useful when deleting values from the tree
   */
  public get valuesPostOrder(): T[] {
    // Values array
    const values: T[] = [];

    // Recursively traverse tree for node values
    function traverse(node: Node<T>): void {
      if (!node) return;
      traverse(node.left);
      traverse(node.right);
      values.push(node.value);
    }
    traverse(this.root);

    return values;
  }

  /**
   * Add a value to the tree
   */
  public add(...values: T[]): void {
    values.forEach(value => {
      // New root
      if (!this.root) {
        this.root = new Node<T>(value);
        return;
      }

      // Add to tree
      this.root.add(value);
    });
  }
}
