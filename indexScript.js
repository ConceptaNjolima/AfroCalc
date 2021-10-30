function Calculate(){
    let FirstNumber=document.getElementById("first").value;
    let Operation=document.getElementById("operation").value;
    let SecondNumber=document.getElementById("second").value;
    let result=0;
    console.log(typeof(FirstNumber));
    // console.log(FirstNumber,",",Operation,",", SecondNumber, ",", )
    if(Operation==="+"){
        result=Number(FirstNumber)+Number(SecondNumber);
    }
    else if(Operation==="-"){
        result=Number(FirstNumber)-Number(SecondNumber);
    }
    else if(Operation==="*"){
        result=Number(FirstNumber)*Number(SecondNumber);
    }
    else if(Operation==="/"){
        result=Number(FirstNumber)/Number(SecondNumber);
    }
    else{
        alert("Wrong Operation. Change operation")
    }
    document.getElementById("result").innerHTML="Result: "+ String(result);
}