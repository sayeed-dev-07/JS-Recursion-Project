class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function levelOrderTraversal(root) {
    if (!root) return;
  
    const queue = [root]; // Start with the root node
  
    while (queue.length > 0) {
      const current = queue.shift(); // Remove the front node
      console.log(current.value);    // Process the current node
  
      if (current.left) {
        queue.push(current.left);   // Add left child to the queue
      }
      if (current.right) {
        queue.push(current.right);  // Add right child to the queue
      }
    }
  }
  
  // Example usage:
  
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  root.right.left = new Node(6);
  root.right.right = new Node(7);
  
  levelOrderTraversal(root);
  
  // Output:
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7
  