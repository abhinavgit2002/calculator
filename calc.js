function display(num){
result.value +=num
}

function clearAll(a)
{
    result.value=a
}

function output(){
    result.value = eval(result.value)
}

function del(){
    result.value = (result.value).slice(0,-1)
    
}