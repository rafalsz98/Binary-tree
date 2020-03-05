class Node {
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class BinaryTree {
    constructor()
    {
        this.root = null;
    }
    // Adds new node with data to the right of the treeNode argument
    addAtRight(data, treeNode)
    {
        var newNode = new Node(data);
        if (this.root == null) 
        {
            this.root = newNode;
            return;
        }
        newNode.right = treeNode.right;
        treeNode.right = newNode;
        return newNode;
    }
    // Adds new node with data to the left of the treeNode argument
    addAtLeft(data, treeNode)
    {
        var newNode = new Node(data);
        if (this.root == null) 
        {
            this.root = newNode;
            return;
        }
        newNode.left = treeNode.left;
        treeNode.left = newNode;
        return newNode;
    }
    // Prints every data in nodes
    inOrder(treeNode)
    {
        if (treeNode == null) return;
        this.inOrder(treeNode.left);
        console.log(treeNode.data);
        this.inOrder(treeNode.right);
    }
    // Search for data in given subtree and returns node with that data
    search(data, treeNode)
    {
        if (treeNode == null) return;
        if (treeNode.data == data) return treeNode;
        this.search(data, treeNode.left);
        this.search(data, treeNode.right);
        return null;
    }
}