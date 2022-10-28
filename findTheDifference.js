var findTheDifference = function(s, t) {
    for(let i in t){
        if(!s.includes(t.charAt(i))){
            return t.charAt(i)
        }
    }
};