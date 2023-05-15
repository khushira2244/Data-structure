


// recursive method

let cache={}

 function helper(str){
    if(str==null || str.length==0) return true
    if(str in cache ){
        return cache[str]
    }
    let n=str.length

    for(let i=1;i<=n;i++){
        let left=str.substring(0,i);
        let right=str.substring(i,n)
        if(dict.contains(left) && helper(right)){
            cache[str]=true
            return true
        }

    }
    cache[str]=false
    return false
    
 }
function wordBreak(s,dict){
    
     return helper(s)


}

wordBreak("mypenmy",["my","pen"])