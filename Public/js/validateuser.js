    // Access Elements in signup form
    const signupForm = document.getElementById("form")
    const names      = document.getElementById("names");
    const username   = document.getElementById("username");
    const password   = document.getElementById("password");
    const role       =  document.getElementById("role")

    signupForm.addEventListener('submit', (event) =>{
        // event.preventDefault();

        checkInput();
    });

    function checkInput() {
        //get the values from the inputs
        const namesvalue = names.value.trim();
        const rolevalue = role.value.trim();
        const usernamevalue = username.value.trim();
        const passwordvalue = password.value.trim();

        //Regex
        let name = /^[A-Za-z]{5,50}/;
        let alphanumeric = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/;
        //let nin = /^[0-9a-zA-Z]{13}+$/
        let pass = /^\w{7,12}$/;


        if(namesvalue === ''){
            setErrorFor(names, "Name cannot be left blank");
            return false;
        }
        else if(!namesvalue.match(name)){
            setErrorFor(names, "Provide  a valid full name with 5-50 characters");
            return false;
        }    
         else{
            setSuccessFor(names);

        };

        if(usernamevalue === ''){
            setErrorFor(username, "Username cannot be left blank");
            return false;
        }
        else if(!usernamevalue.match(alphanumeric)){
            setErrorFor(username, "Provide a valid username with alphanumeric characters");
            return false;
        }   
         else{
            setSuccessFor(username);
        };

        if(passwordvalue=== ''){
            setErrorFor(password, "Password cannot be left blank");
            return false;
        }else if(!passwordvalue.match(pass)){
            setErrorFor(password, "Password must have atleast one Number and 7 characters");
            return false;
        }
         else{
            setSuccessFor(password);
        };

        if(rolevalue==="Select your role"){
            setErrorFor(role, "Please select your role in the dropdown");
            return false;
        }
        else{
            setSuccessFor(role);
        }
    }

    function setErrorFor(input, message){
        const formControl = input.parentElement; // .form-control
        const small = formControl.querySelector('small');
        formControl.className = "form-control error";
        small.innerHTML = message;
        
    }

    function setSuccessFor(input){
        const formcontrol = input.parentElement;
        formcontrol.className = "form-control success";

    }   
 



//Project Conditions
//  • Username should be alphanumeric and not empty
// • All names should be strings between 5 to 50 characters
// • NiN should be 13 alphanumeric characters
// • Prices are in Ugx
// • Younger than 10 years old should not be registered as farmerOne, urban farmers etc
// • No form should be submitted when empty..chech