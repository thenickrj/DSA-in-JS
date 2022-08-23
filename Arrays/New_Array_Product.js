let arr=[1,2,3,4,5];


console.log(product_arr(arr));


function product_arr(arr) {
    let new_arr=[];

    for(let i=0;i<arr.length-1;i++){
        new_arr[i]=product_index(i,arr);
    }
    return new_arr
}

function product_index(i,arr){
    let prod=i>arr.length-2?arr[i-1]:arr[i+1];
    for(let j=0;j<arr.length-1;j++){
        if(i!=j){
            prod=prod*arr[j];
        }
    }
    return prod
}

