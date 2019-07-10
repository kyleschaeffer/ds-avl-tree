/**
 * Individual node which composes the binary search tree
 */
export class Node<T> {
  /**
   * The value of this tree node
   */
  public value: T;

  /**
   * The left-hand node child
   */
  public left: Node<T>;

  /**
   * The right-hand node child
   */
  public right: Node<T>;

  /**
   * The current height/depth of this tree branch
   *  - Used for balancing/rotating
   */
  public height: number;

  /**
   * Instantiate a new tree node
   */
  constructor(value: T, left: Node<T> = null, right: Node<T> = null) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.height = 1;
  }

  /**
   * Add a value to this tree node
   */
  public add(value: T): void {
    if (value < this.value) {
      // New left node
      if (!this.left) this.left = new Node<T>(value);
      // Recursively add value to left
      else this.left.add(value);

      // Update node height
      if (!this.right || this.right.height < this.left.height) {
        this.height = this.left.height + 1;
      }
    } else {
      // New right node
      if (!this.right) this.right = new Node<T>(value);
      // Recursively add value to right
      else this.right.add(value);

      // Update node height
      if (!this.left || this.left.height < this.right.height) {
        this.height = this.right.height + 1;
      }
    }

    // Balance the tree
    this.balance();
  }

  /**
   * Balance this node in the tree
   */
  private balance(): void {
    // Get branch heights
    const rightHeight: number = this.right ? this.right.height : 0;
    const leftHeight: number = this.left ? this.left.height : 0;

    // Out of balance?
    if (leftHeight > rightHeight + 1) {
      // Get left heights
      const leftRightHeight: number = this.left.right ? this.left.right.height : 0;
      const leftLeftHeight: number = this.left.left ? this.left.left.height : 0;

      // Rotate right (only if double rotation is needed)
      if (leftRightHeight > leftLeftHeight) this.left.rotateRight();

      // Rotate left
      this.rotateLeft();
    } else if (rightHeight > leftHeight + 1) {
      // Get right heights
      const rightRHeight: number = this.right.right ? this.right.right.height : 0;
      const rightLHeight: number = this.right.left ? this.right.left.height : 0;

      // Rotate left (only if double rotation is needed)
      if (rightLHeight > rightRHeight) this.right.rotateLeft();

      // Rotate right
      this.rotateRight();
    }
  }

  /**
   * Rotate right branch right
   */
  private rotateRight(): void {
    const savedValue: T = this.value;
    const savedLeft: Node<T> = this.left;
    this.value = this.right.value;
    this.left = this.right;
    this.right = this.right.right;
    this.left.right = this.left.left;
    this.left.left = savedLeft;
    this.left.value = savedValue;
    this.left.updateHeight();
    this.updateHeight();
  }

  /**
   * Rotate left branch left
   */
  private rotateLeft(): void {
    const savedValue: T = this.value;
    const savedRight: Node<T> = this.right;
    this.value = this.left.value;
    this.right = this.left;
    this.left = this.left.left;
    this.right.left = this.right.right;
    this.right.right = savedRight;
    this.right.value = savedValue;
    this.right.updateHeight();
    this.updateHeight();
  }

  /**
   * Update tree node height
   */
  private updateHeight(): void {
    if (!this.right && !this.left) {
      this.height = 1;
    } else if (!this.right || (this.left && this.right.height < this.left.height)) {
      this.height = this.left.height + 1;
    } else {
      this.height = this.right.height + 1;
    }
  }
}
