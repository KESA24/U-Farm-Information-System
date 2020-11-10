

    // Access Elements in signup form
    const signupForm = document.getElementById("signupForm")
    const firstName  = document.getElementById("fname");
    const lastName   = document.getElementById("lname");
    const userName   = document.getElementById("uname");
    const password   = document.getElementById("pass");

    signupForm.addEventListener('submit', (e) =>{
        e.preventDefault();

        checkInput();
    });

    function checkInput() {
        //get the values from the inputs
        const fnamevalue = firstName.value.trim();
        const lnamevalue = lastName.value.trim();
        const usernamevalue = userName.value.trim();
        const passvalue = password.value.trim();

        if(fnamevalue === ''){
            setErrorFor(firstName, "FirstName cannot be blank");
        } else{
            setSuccessFor(firstName);
        }
    }

    function setErrorFor(input, message){
        const formgroup = input.parentElement;
        const small = formgroup.querySelector('small');

        small.innerText = message;

        formgroup.className = "form-group error";
    }

    function setSuccessFor(input){
        const formgroup = input.parentElement;
        formgroup.className = "form-group success";

    }   





    // //Regex
    // let name = /^\w{5-50}$/;
    // let alphanumeric = /^[0-9a-ZA-Z]+$/;
    // let nin = /^[0-9a-ZA-Z]{13}+$/
    // let pass = /^\w{7,12}$/;



    
    // if (firstName.value.match(name)){
    //     console.log(firstName.value);
    //     firstName.style.border = "2px solid green";
    // }
    // else {
    //     alert("Please provide a valid name");
    //     firstName.focus();
    //     firstName.style.border = "2px solid red";
    // }

    // if (lastName.value.match(name)){
    //     console.log(lastName.value);
    //     lastName.style.border = "2px solid green";
    // }
    // else {
    //     alert("Please provide a valid name");
    //     lastName.focus();
    //     lastName.style.border = "2px solid red";
    // }
 

    




//  • Username should be alphanumeric and not empty
// • All names should be strings between 5 to 50 characters
// • NiN should be 13 alphanumeric characters
// • Prices are in Ugx
// • Younger than 10 years old should not be registered as farmerOne, urban farmers etc
// • No form should be submitted when empty