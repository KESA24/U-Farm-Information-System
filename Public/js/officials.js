

// Popup Login Form: Update to latest function writing
document.getElementById('button').addEventListener('click' ,
function() {
    document.querySelector('.bg-login').style.display="flex";
})

document.querySelector('.close').addEventListener('click', 
function(){
    document.querySelector('.bg-login').style.display="none";
})