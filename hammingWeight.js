var hammingWeight = function(n) {
    let c = 0;
    for(let i of n.toString(2)){
        if(i == 1){
            c++
        }
    }
    return c
};