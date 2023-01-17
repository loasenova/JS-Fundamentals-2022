function echo(text){

    let type = typeof(text);

    if(type == 'string' || type == 'number'){
        console.log(type);
        console.log(text);
    }else{
        console.log(type);
        console.log('Parameter is not suitable for printing');
    }
}
echo('Hello, JavaScript');
echo(18);
echo(null);