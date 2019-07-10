import { Node } from './avl-tree-node';

/**
 * AVL binary search tree data structure
 *  - Very fast lookup speeds
 *  - Self-balancing using AVL "rotation" technique
 *  - Worst case is O(log n) // better than basic BST
 */
export class Tree<T> {
  /**
   * The root node of the tree
   */
  public root: Node<T>;

  /**
   * Instiantiate a new AVL tree
   */
  constructor() {
    // New empty tree
    this.root = null;
  }

  /**
   * Add a value to the tree
   */
  public add(value: T): void {
    // New root
    if (!this.root) {
      this.root = new Node<T>(value);
      return;
    }

    // Add to tree
    this.root.add(value);
  }
}
