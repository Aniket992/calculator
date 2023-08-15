console.log("calculator");
const buttons = document.getElementsByClassName("buttons");
const display = document.getElementById("display"); 
const text = document.getElementById("text");
let string = "";
Array.from(buttons).forEach((button) => {
    
  button.addEventListener("click", (e) => {
    if(e.target.innerHTML == "="){
    string = eval(string);
    text.innerHTML = string;
    }
    else if(e.target.innerHTML == "AC"){
        string = "";
        text.innerHTML = string;
    }
    else if(e.target.innerHTML == "C"){
        string = string.slice(0,-1);
        text.innerHTML = string;
    }
    else if(e.target.innerHTML == "%"){
        string = string/100;
        text.innerHTML = string;
    }
    else{
        console.log(e.target)
        string += e.target.innerHTML;
        text.innerHTML = string;
    }
  });
});
Array.from(buttons).forEach((button) => {
    if (!isNaN(parseInt(button.innerHTML))){
       button.style.backgroundColor = "white";
    }});