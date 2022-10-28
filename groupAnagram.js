var groupAnagrams = function(strs) {
    let r = {}
    for(let i of strs){
        let a = i.split('').sort().join('');
        if(r[a]){
            r[a] = [...r[a], i];
            console.log(r[a]);
        }else{
            r[a] = [i]
        }
    }
    return(Object.values(r))
};