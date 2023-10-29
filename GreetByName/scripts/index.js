
function init(){


    let nameField = document.getElementById("nameField");
    let greetUser = document.getElementById("greetBtn");

    function onGreetUserBtnClicked(){
    let userName = nameField.value;

    if (userName){
        alert("Helo "+ userName + " !")
    }


       
    }
    greetUser.addEventListener("click",onGreetUserBtnClicked);
}
    window.onload= init;