    // Access Elements in signup form
    const produceForm        = document.getElementById("produceform");
    const pname              = document.getElementById("pname");
    const ward               = document.getElementById("ward");
    const dateOfRegistration = document.getElementById("dor");
    const price              = document.getElementById("price");
    const pquantity          = document.getElementById("pquantity");
    const directions         = document.getElementById("dir");
    const modeOfPayment      = document.getElementById("mop");
    const modeOfDelivery     = document.getElementById("mod");
    const produceType        = document.getElementById("ptype");
    const image              = document.getElementById("image");

    produceForm.addEventListener('submit', (event) =>{
        //   event.preventDefault();

        checkInput();
    });

    function checkInput() {
        //get the values from the inputs
        const namesvalue     = pname.value.trim();
        const wardvalue      = ward.value.trim();
        const dorvalue       = dateOfRegistration.value.trim();
        const pricevalue     = price.value.trim();
        const pqtyvalue      = pquantity.value.trim();
        const dirvalue       = directions.value.trim();
        const mopvalue       = modeOfPayment.value.trim();
        const modvalue       = modeOfDelivery.value.trim();
        const ptypevalue     = produceType.value.trim();
        const imagevalue     = image.value.trim();

        //Regex
        let name = /^[A-Za-z]{5,50}/;
        let number= /^[0-9]+$/
        let text = /^[A-Za-z]+$/
        
        if(namesvalue === ''){
            setErrorFor(pname, "Name cannot be left blank");
            return false
        }
        else if(!namesvalue.match(name)){
            setErrorFor(pname, "Provide  a valid product name with 5-50 characters");
            return false
        }    
         else{
            setSuccessFor(pname);

        };

        if(wardvalue==="Select ward"){
            setErrorFor(ward, "Please select farmerone ward from the dropdown");
            return false
        }
        else{
            setSuccessFor(ward)
        };


        if(dorvalue === ''){
            setErrorFor(dateOfRegistration, "Date Of Registration cannot be left blank");
            return false
        }
           
         else{
            setSuccessFor(dateOfRegistration);
        };

        if(pricevalue === ''){
            setErrorFor(price, "Price cannot be left blank");
            return false
        }
        else if(!pricevalue.match(number)){
            setErrorFor(price, "Provide a valid price");
            return false
        }   
         else{
            setSuccessFor(price);
        };

        if(pqtyvalue=== ''){
            setErrorFor(pquantity, "Product Quantity cannot be left blank");
            return false
        }else if(!pqtyvalue.match(number)){
            setErrorFor(pquantity, "Provide a valid quantity with numbers only");
            return false
        }
         else{
            setSuccessFor(pquantity);
        };

        if(dirvalue === ''){
            setErrorFor(directions, "Directions cannot be left blank");
            return false
        }
        else if(!dirvalue.match(text)){
            setErrorFor(directions, "Kindly provide valid directions");
            return false
        }   
         else{
            setSuccessFor(directions);
        };

        if(mopvalue==="Mode of Payment"){
            setErrorFor(modeOfPayment, "Please select the mode of payment from the dropdown");
            return false
        }
        else{
            setSuccessFor(modeOfPayment);
        };

        
        
        if(modvalue==="Mode of Delivery"){
            setErrorFor(modeOfDelivery, "Please select the mode of Delivery from the dropdown");
            return false
        }
        else{
            setSuccessFor(modeOfDelivery)
        };

        if(ptypevalue=== 'Produce Type'){
            setErrorFor(produceType, "Please select the produce type from the dropdown");
            return false
        }
    
         else{
            setSuccessFor(produceType);
        };

        if(imagevalue===""){
            setErrorFor(image, "Please upload produce image");
            return false
        }
        
        else{
            setSuccessFor(image);
        }
        
       
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