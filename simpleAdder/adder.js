"using strict;"
//window.alert("connected");
//your name
//declare variables to represent html elements
var txtNum1 = document.getElementById("num1");

function add(){
    //console.log("button clicked");
    //make sure both textboxes have data
    if (txtNum1.value == "" ||
        document.getElementById("num2").value == ""){
        window.alert("missing data");
    }
    else{
        //get num1 from textbox
        var num1 = parseInt(txtNum1.value);
        console.log("num1 is " + num1);

        //get num2 from textbox
        var num2 = parseInt(document.getElementById("num2").value);
        console.log("num2 is " + num2);

        //calculate sum
        var sum = num1 + num2;
        console.log("sum is " + sum);
        //display sum on page 
        document.getElementById("sum").innerHTML = sum;
    }
}//end add


function reset(){
    //clear the textboxes and the sum
    txtNum1.value = "";
    document.getElementById("num2").value = "";
    document.getElementById("sum").innerHTML = "0";
}