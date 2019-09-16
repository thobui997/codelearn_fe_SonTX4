function isSortedArray(a){
    let count = 0;
    if(a.length < 2){
        return true;
    }
    for(let i = 0; i < a.length-1; i++){
        if(a[i] <= a[i+1]){
            count++;
        }
    }
    if(count == a.length-1){
        return true;
    } else return false;
}