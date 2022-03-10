function CreateObject(arr) {
    // Write your code here
    const objct = {};
    for(i = 0; i< arr.length; i++){
        if(i%2 == 0){
            objct[arr[i]] = arr[i+1];
        }
    }
    return objct;
}

module.exports = CreateObject;
