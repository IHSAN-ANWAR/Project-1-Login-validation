document.querySelector('.btn').addEventListener('click', (e) => {
    e.preventDefault();


    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    //  RegExp for username and password

    const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
    const  passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;

// clear previous error messages

document.querySelectorAll('.error').forEach((curElem) => (curElem.textContent = ""));
let isValid = true; 
    

// check username and password condition matched
    if(!usernameRegex.test(username)){
   document.getElementById("usernameerror").textContent = " Enter a Valid Username"
   isValid = false;
    }

    if(!passwordRegex.test(password)){
        document.getElementById("passworderror").textContent = " Enter a Strong Password"
        isValid = false;
    }

if(isValid){
    alert("Form submitted successfully!");
}
});
