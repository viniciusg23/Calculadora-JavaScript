let buffer = ""
let operation = ""

function pressKey(key){34
    if(key.key == "+"){
        click("sum")
        op(key.key);
    }
    else if( key.key == "-"){
        click(key.key)
        op(key.key);
    }
    else if(key.key == "/"){
        click("div")
        op(key.key);
    }
    else if(key.key == "*"){
        click("mult")
        op(key.key);
    }
    else if(key.key == "."){
        click("dot");
        num(key.key);
    }
    else if(!isNaN(key.key) == true){
        click(key.key);
        num(key.key);
    }
    else if(key.key == 'Enter'){
        click("eq")
        op('=');
    }

}

function click(button){
    
    console.log(button);
    $(`[type = key${button}]`).addClass("active");
    window.setTimeout(() =>{
        $(`[type = key${button}]`).removeClass("active");
    }, 200);
}   

function num(num){
    let valid = true;

    if(buffer.includes('.') == true && num == '.')
        valid = false;

    if(valid){
        buffer += `${num}`
        $("#text").text(buffer);
    }
    
    console.log(buffer)
}

function op(opt){

    operation += `${buffer}`
    console.log(operation)

    if(opt == '='){
        buffer = eval(operation);
        operation = ""
        $("#text").text(buffer);
    }
    else if(opt == 'sqrt'){
        operation = `${Math.sqrt(eval(operation))}`
        $("#text").text(operation);
        buffer = "";
    }
    else{
        $("#text").text(eval(operation));
        operation = `${eval(operation)}${opt}`
        console.log(operation)
        buffer = ""
    }
}

function cleaner(){
    buffer = "";
    operation = "";
    $("#text").text("");
}