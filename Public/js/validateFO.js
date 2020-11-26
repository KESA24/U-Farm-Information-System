
// FarmerOne Registration

    const registerFO = document.getElementById("regForm");
    const firstName = document.getElementById("fname");
    const lastName = document.getElementById("lname");
    const dateOfBirth = document.getElementById("dob");
    const dateOfRegistration = document.getElementById("dor");
    const nationalIdNumber = document.getElementById("nin");
    const phoneNumber = document.getElementById("phone");
    const uniqueID = document.getElementById("foid");
    const restype = document.getElementById("restype");
    const ward = document.getElementById("ward");
    const farmActs = document.getElementById("acts");
    const homeLocation = document.getElementById("home");
    const stayPeriod = document.getElementById("stayperiod");

    registerFO.addEventListener('submit', (e) =>{
        e.preventDefault();

        foRegistration();
    });

    const foRegistration = () => {
    

    let nameStandard = /^([A-Za-z]{5,15})+$/;
        if (firstName.value.match(nameStandard)){
            firstName.style.border = "2px solid green";
        }
        else {
            alert("Please provide a valid name");
            firstName.style.border = "2px solid red"
        }

        if (lastName.value.match(nameStandard)){
            lastName.style.border = "2px solid green";
        }
        else {
            alert("Please provide a valid name");
            lastName.style.border = "2px solid red"
        }
    
    let dateStandard = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        if (dateOfBirth.value.match(dateStandard)){
            dateOfBirth.style.border = "2px solid green";
        }
        else {
            alert("Please provide a valid date");
            dateOfBirth.style.border = "2px solid red"
        }

        if (dateOfRegistration.value.match(dateStandard)){
            dateOfRegistration.style.border = "2px solid green";
        }
        else {
            alert("Please provide a valid name");
            dateOfRegistration.style.border = "2px solid red"
        }

    let ninalphanumeric = /^([0-9a-zA-Z]{13})+$/
        if (nationalIdNumber.value.match(ninalphanumeric)){
            nationalIdNumber.style.border = "2px solid green";
        }
        else {
            alert("Please provide a valid nin");
            nationalIdNumber.style.border = "2px solid red"
        }

    let alphanumeric = /^[0-9a-zA-Z]+$/
        if (uniqueID.value.match(alphanumeric)){
            uniqueID.style.border = "2px solid green";
        }
        else {
            alert("Please provide a valid name");
            uniqueID.style.border = "2px solid red"
        }
    
    let phonenumber = /^([0-9]{3}-[0-9])+$/
        
        if (phoneNumber.value.match(phonenumber)){
            phoneNumber.style.border = "2px solid green";
        }
        else {
            alert("Please provide a valid name");
            phoneNumber.style.border = "2px solid red"
        }
    
    let text = /^[A-Za-z]+$/
        if (restype.value.match(text)){
            restype.style.border = "2px solid green";
        }
        else {
            alert("Please provide a valid name");
            restype.style.border = "2px solid red"
        }

        if (ward.value.match(text)){
            ward.style.border = "2px solid green";
        }
        else {
            alert("Please provide a valid name");
            ward.style.border = "2px solid red"
        }
        if (farmActs.value.match(text)){
            farmActs.style.border = "2px solid green";
        }
        else {
            alert("Please provide a valid name");
            farmActs.style.border = "2px solid red"
        }

        if (homeLocation.value.match(text)){
            homeLocation.style.border = "2px solid green";
        }
        else {
            alert("Please provide a valid name");
            homeLocation.style.border = "2px solid red"
        }
    
    let number = /^[0-9]+$/
        if (stayPeriod.value.match(number)){
            stayPeriod.style.border = "2px solid green";
        }
        else {
            alert("Please provide a valid name");
            stayPeriod.style.border = "2px solid red"
        }


}