function sortNumbers(n1,n2,n3){

    let big = 0;
    let biger = 0;
    let bigest = 0;

    if(n1 >= n2){
        big = n2;
        biger = n1;
        if(n3 >= n1){
            bigest = n3;
        }else{
            bigest = n1;
            biger = n3;
        }
    }else{
        big = n1;
        biger = n2;
        if(n3 >= n2){
            bigest = n3;
        }else{
            bigest = n2;
            biger = n3;
        }
    }
    console.log(bigest);
    console.log(biger);
    console.log(big);
}
sortNumbers(0,0,0)