var lengthOfLastWord = function(s) {
    let a = s.split(' ');
    for(let i = a.length - 1; i >= 0; i--){
        if(a[i].trim().length !== 0){
            return a[i].trim().length
        }
    }
};