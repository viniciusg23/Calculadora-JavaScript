let buffer = ""
let operation = ""

function pressKey(key){ //get the key on keyboard

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
        console.log("tecla: "+key.key);
        click(key.key);
        num(key.key);
    }
    else if(key.key == 'Enter'){
        click("eq")
        op('=');
    }

}

function click(button){ //animate the buttons when it have a click 
    
    // console.log(button);
    $(`[type = key${button}]`).addClass("active");
    window.setTimeout(() =>{
        $(`[type = key${button}]`).removeClass("active");
    }, 200);
}   

function num(num){ //add a number in the buffer
    press("", 0);
    let valid = true;

    if(buffer.includes('.') == true && num == '.')
        valid = false;

    if(valid){
        buffer += `${num}`;
        $("#text").text(buffer);
    }
    
    // console.log(buffer)
}

function op(opt){ //execute a operation

    operation += `${buffer}`; //add the buffer value on operation string
    // console.log(operation)

    if(operation != ""){ //does not allow operators before numbers
        if(operation.slice(-1) == "+" || operation.slice(-1) == "-" || operation.slice(-1) == "/" || operation.slice(-1) == "*"){

            let lastOp = operation.slice(-1); // get the old operator

            operation = operation.replace(lastOp, opt); //replace the old operator with the newest

            press("", 0); //change the active button 
            press(opt, 1);

        }
        else{

            if(opt == '='){ //show the result
                buffer = eval(operation);
                operation = "";
                $("#text").text(buffer);
            }
            else if(opt == 'sqrt'){ //result of sqrt
                operation = `${Math.sqrt(eval(operation))}`;
                $("#text").text(operation);
                buffer = "";
            }
            else{ // others operators
                press(opt, 1);
                $("#text").text(eval(operation));
                operation = `${eval(operation)}${opt}`;
                // console.log(operation);
                buffer = "";
            }
    
        }
        
    }
}

function press(operator, action){ //add and remove the active class for the operators buttons
    if(action == 1){ //active
        if(operator == "+"){
            $(`[type = keysum]`).addClass("active");
        }
        else if(operator == "-"){
            $(`[type = key-]`).addClass("active");
        }
        else if(operator == "/"){
            $(`[type = keydiv]`).addClass("active");
        }
        else if(operator == "*"){
            $(`[type = keymult]`).addClass("active");
        }
    }
    else{ //disable
        $(".operator").removeClass("active");
    }
}

function cleaner(){ //restart the calculator
    buffer = "";
    operation = "";
    $("#text").text("");
}