    // Access Elements in signup form

    const ufForm = document.getElementById("form")
    const names      = document.getElementById("ufnames");
    const dateOfBirth = document.getElementById("ufdob");
    const dateOfRegistration = document.getElementById("ufdor");
    const nationalIdNumber = document.getElementById("ufnin");
    const phoneNumber = document.getElementById("ufphone");
    const uniqueID = document.getElementById("ufid");
    const ward = document.getElementById("ufward");
    const farmActs = document.getElementById("ufacts");
    const button = document.getElementById("button")
    

    ufForm.addEventListener('submit', (event) =>{
        //   event.preventDefault();

        checkInput();
    });

    function checkInput() {
        //get the values from the inputs
        const namesvalue = names.value.trim();
        const dobvalue = dateOfBirth.value.trim();
        const dorvalue = dateOfRegistration.value.trim();
        const ninvalue = nationalIdNumber.value.trim();
        const phonevalue = phoneNumber.value.trim();
        const uniqueidvalue = uniqueID.value.trim();
        const wardvalue = ward.value.trim();
        const actsvalue = farmActs.value.trim();
        

        //Regex
        let name = /^[A-Za-z]{5,50}/;
        let alphanumeric = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/;
        let nin = /^((?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{13})+$/
        let phonenumber= /^[0-9]+$/
        let text = /^[A-Za-z]+$/
        
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

        if(dobvalue === ''){
            setErrorFor(dateOfBirth, "Date Of Birth cannot be left blank");
            return false;
        
        }
           
         else{
            setSuccessFor(dateOfBirth);
        };

        if(dorvalue === ''){
            setErrorFor(dateOfRegistration, "Date Of Registration cannot be left blank");
            return false;
        }
           
         else{
            setSuccessFor(dateOfRegistration);
        };

        if(ninvalue === ''){
            setErrorFor(nationalIdNumber, "National Id Number cannot be left blank");
            return false;
        }
        else if(!ninvalue.match(nin)){
            setErrorFor(nationalIdNumber, "Provide a valid nin with 13 alphanumeric characters");
            return false;
        }   
         else{
            setSuccessFor(nationalIdNumber);
        };

        if(phonevalue=== ''){
            setErrorFor(phoneNumber, "Phonenumber cannot be left blank");
            return false;
        }else if(!phonevalue.match(phonenumber)){
            setErrorFor(phoneNumber, "Provide a valid phonenumber with numbers only");
            return false;
        }
         else{
            setSuccessFor(phoneNumber);
        };

        if(uniqueidvalue === ''){
            setErrorFor(uniqueID, "Unique ID cannot be left blank");
            return false;
        }
        else if(!uniqueidvalue.match(alphanumeric)){
            setErrorFor(uniqueID, "Generate a  unique and valid id with alphanumeric characters");
            return false;
        }   
         else{
            setSuccessFor(uniqueID);
        };


        if(wardvalue==="Select ward"){
            setErrorFor(ward, "Please select farmerone ward from the dropdown");
            return false;
        }
        else{
            setSuccessFor(ward)
        };
        
        if(actsvalue==="Select Farming Activities"){
            setErrorFor(farmActs, "Please select activities from the dropdown");
            return false;
        }
        else{
            setSuccessFor(farmActs)
        };
        
       
    }

    function setErrorFor(input, message){
        const formGroup = input.parentElement; // .form-group
        const small = formGroup.querySelector('small');
        formGroup.className = "form-group error";
        small.innerHTML = message;
        
    }

    function setSuccessFor(input){
        const formGroup = input.parentElement;
        formGroup.className = "form-group success";

    }   
 



//Project Conditions
// • Username should be alphanumeric and not empty
// • All names should be strings between 5 to 50 characters
// • NiN should be 13 alphanumeric characters
// • Prices are in Ugx
// • Younger than 10 years old should not be registered as farmerOne, urban farmers etc
// • No form should be submitted when empty..chech