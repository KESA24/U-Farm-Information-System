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
        //Regex
        let name = /^[A-Za-z]{5,15}/;
        let alphanumeric = /^[0-9a-zA-Z]+$/;
        //let nin = /^[0-9a-zA-Z]{13}+$/
        let pass = /^\w{7,12}$/;


        if(fnamevalue === ''){
            setErrorFor(firstName, "FirstName cannot be left blank");
        }
        else if(!fnamevalue.match(name)){
            setErrorFor(firstName, "Provide a valid name with 5-15 characters")
        }    
         else{
            setSuccessFor(firstName);
        };

        if(lnamevalue === ''){
            setErrorFor(lastName, "LastName cannot be left blank");   
        } 
        else if(!lnamevalue.match(name)){
            setErrorFor(lastName, "Provide a valid name with 5-15 characters")
        }
        else{
            setSuccessFor(lastName);
        };

        if(usernamevalue === ''){
            setErrorFor(userName, "UserName cannot be left blank");
        }
        else if(!usernamevalue.match(alphanumeric)){
            setErrorFor(userName, "Provide a valid username with alphanumeric characters")
        }   
         else{
            setSuccessFor(userName);
        }
        if(passvalue=== ''){
            setErrorFor(password, "Password cannot be left blank");
        }else if(!passvalue.match(pass)){
            setErrorFor(password, "Provide a valid password with atleastt one Number and 7 characters")
        }
         else{
            setSuccessFor(password);
        }
    }

    function setErrorFor(input, message){
        const formgroup = input.parentElement;
        const small = formgroup.querySelector('small');
        formgroup.className = "form-group error";
        small.innerText = message;
        
    }

    function setSuccessFor(input){
        const formgroup = input.parentElement;
        formgroup.className = "form-group success";

    }   
 



//Project Conditions
//  • Username should be alphanumeric and not empty
// • All names should be strings between 5 to 50 characters
// • NiN should be 13 alphanumeric characters
// • Prices are in Ugx
// • Younger than 10 years old should not be registered as farmerOne, urban farmers etc
// • No form should be submitted when empty..chech