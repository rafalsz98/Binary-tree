class CalcStats {
    constructor()
    {
        this.sum = 0;
        this.i = 0;
        this.elements = new Array();
    }
    // Calculates sum of the subtree
    calcSum(treeNode)
    {
        this.sum = 0;
        this.count = 0;
        this.sumHelper(treeNode);
        return this.sum;
    }
    // Helping recursion function to calculate sum
    sumHelper(treeNode)
    {
        if (treeNode == null) return;
        this.sumHelper(treeNode.left);
        this.sum += treeNode.data;
        this.count++;
        this.sumHelper(treeNode.right);
    }
    // Calculates average of the subtree
    calcAvg(treeNode)
    {
        this.calcSum(treeNode);
        return this.sum / this.count;
    }
    // Calculates median of the subtree
    calcMedian(treeNode)
    {
        // Clearing array
        this.elements.length = 0;
        this.medianHelper(treeNode);

        this.elements.sort();
        
        if (this.elements.length % 2 == 1)
            return this.elements[Math.floor(this.elements.length / 2)];
        else
        {
            var n = this.elements.length / 2;
            var avg = (this.elements[n] + this.elements[n - 1]) / 2;
            return avg;
        }

    }
    // Helping recursion function to median
    medianHelper(treeNode)
    {
        if (treeNode == null) return;
        this.medianHelper(treeNode.left);
        this.elements.push(treeNode.data);
        this.medianHelper(treeNode.right);
    }

}