class Node{
    constructor(value){
        this.value=value
        this.left=null;
        this.right=null;
    }
}
class BinarySearchTree{
constructor(){
    this.root=null
}
insert(val){
    let newNode=new Node(val)
    if(this.root==null){
        this.root=newNode
        return this // retain whole tree object(this) after insertion
    }else{
        // insertion only happens on remaining space on left and right of the node.
        let current=this.root;
        while(true){
           if(val<current.value){
            if(current.left==null){
                current.left=newNode
                return this
            }else{
                current=current.left
            }
           } else  if(val>current.value){
            if(current.right==null){
                current.right=newNode
                return this
            }else{
                current=current.right
            }
           } 
        }
    }
}


// getting object is the process when u get the matching value
find(value){
    if(this.root===null) return false;
    let current=this.root;
   let  found=false;
    while(current && !found){
        if(value<current.value){
            current=current.left;
        }else if(value>current.value){
            current=current.right
        }else{
            found=true;
        }
    }
 return false
}
}


let  tree = new BinarySearchTree();
tree.insert(10)

tree.insert(5)

tree.insert(13)

tree.insert(11)

tree.insert(2)

tree.insert(16)
tree.insert(7)




var isBalanced = function(root) {

function height(root) {
    
    if(root == null) return 0
    
    return 1+Math.max(height(root.left), height(root.right));
}

if(root == null) 
    return true;

let leftH = height(root.left);
let rightH = height(root.right);

return Math.abs(leftH - rightH) <= 1 && isBalanced(root.left) == true && isBalanced(root.right) == true;
};


console.log(isBalanced(tree.root))