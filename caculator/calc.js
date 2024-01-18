let outputScreen = document.getElementById("output-screen");

// append one number to next number
function display(num){
    outputScreen.value += num;
}
// check whether the number can evaluvate using try else through error.

function Calculate(){
    try{
outputScreen.value =  eval(outputScreen.value)
    }

    catch(err){
        alert("Invalid")
    }
}

function Clear(){
    outputScreen.value ="";
}

function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}