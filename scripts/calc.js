function addition(num1,num2){
    if(typeof num1 == 'number' && typeof num2 == 'number'){
    num3 = num1+num2
    return num3;
    }
    else if(typeof num1 != 'number' || typeof num2 != 'number'){
        return "Invalid Input"
    }
}

module.exports=addition;
