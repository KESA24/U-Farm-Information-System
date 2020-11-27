
// FarmerOne Registration

    const registerFO = document.getElementById("regForm");
    const firstName = document.getElementById("fname");
    const lastName = document.getElementById("lname");
    // const dateOfBirth = document.getElementById("dob");
    // const dateOfRegistration = document.getElementById("dor");
    const nationalIdNumber = document.getElementById("nin");
    const phoneNumber = document.getElementById("phone");
    const uniqueID = document.getElementById("foid");
    const restype = document.getElementById("restype");
    const ward = document.getElementById("ward");
    const farmActs = document.getElementById("acts");
    const homeLocation = document.getElementById("home");
    const stayPeriod = document.getElementById("stayperiod");

    registerFO.addEventListener('submit', (e) =>{
        // e.preventDefault();

        foRegistration();
    });

    const foRegistration = () => {
    

    let nameStandard = /^([A-Za-z]{5,15})+$/;
        if (!firstName.value.match(nameStandard)){
            alert("provide a valid name")
            firstName.style.border = "2px solid red"
            // firstName.style.border = "2px solid green";

            return false;
        }
        

        if (!lastName.value.match(nameStandard)){
            alert("Please provide a valid name");
            lastName.style.border = "2px solid red"

            return false;
            // lastName.style.border = "2px solid green";
        }
        
    
    // let dateStandard = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    //     if (dateOfBirth.value.match(dateStandard)){
    //         dateOfBirth.style.border = "2px solid green";
    //     }
    //     else {
    //         alert("Please provide a valid date");
    //         dateOfBirth.style.border = "2px solid red"
    //     }

    //     if (dateOfRegistration.value.match(dateStandard)){
    //         dateOfRegistration.style.border = "2px solid green";
    //     }
    //     else {
    //         alert("Please provide a valid name");
    //         dateOfRegistration.style.border = "2px solid red"
    //     }

    let ninalphanumeric = /^([0-9a-zA-Z]{13})+$/
        if (!nationalIdNumber.value.match(ninalphanumeric)){
            alert("Please provide a valid nin");
            nationalIdNumber.style.border = "2px solid red"

            return false;
        }
       

    let alphanumeric = /^[0-9a-zA-Z]+$/
        if (!uniqueID.value.match(alphanumeric)){
            alert("Please provide a valid name");
            uniqueID.style.border = "2px solid red"

            return false;
        }
        
    
    let phonenumber = /^[0-9]+$/
        
        if (!phoneNumber.value.match(phonenumber)){
            alert("Please provide a valid phonenumber");
            phoneNumber.style.border = "2px solid red"
            
            return false;
        }
    let text = /^[A-Za-z]+$/
        if (!restype.value.match(text)){
            alert("Please provide a valid residence Type name");
            restype.style.border = "2px solid red"

            return false;
        }
        
        
        if (ward.value =='selectward'){
            alert("Please provide a valid  wardname from the selection");
            ward.style.border = "2px solid red" 
            
            return false;
        }
        

        if (farmActs.value == "Select Farming Activities") {
            alert("Please provide a valid farming activities");
            farmActs.style.border = "2px solid red"   

            return false;
        }
        

        if (!homeLocation.value.match(text)){
            alert("Please provide a valid home location");
            homeLocation.style.border = "2px solid red"

            return false;
        }
        
    
    let number = /^[0-9]+$/
        if (!stayPeriod.value.match(number)){
            alert("Please provide valid number of years stayed");
            stayPeriod.style.border = "2px solid red";

            return false;
        }
        

    else{
        return true;
    }
}