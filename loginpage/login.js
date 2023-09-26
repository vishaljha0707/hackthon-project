var userid = document.querySelector("#userid")
var userpassowrd = document.querySelector("#userps")


const demoUsername = '12345@gmail.com';
const demoPassword = '123456';


document.querySelector(".button-1").addEventListener("click",function(){
    

    const usernameInput = userid.value
    const passwordInput = userpassowrd.value
    function authenticate(username, password) {
        if (username === demoUsername && password === demoPassword) {
          return 'Success';
        } else {
          return 'Failure';
        }
      }
      
      
      const authenticationStatus = authenticate(usernameInput, passwordInput);
      
      console.log(`Authentication Status: ${authenticationStatus}`);


      if(authenticationStatus=='Success'){
        console.log("hey i am running")
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your have successful loged in',
            showConfirmButton: false,
            timer: 1500
          }).then(function () {
            // Redirect to the new page after showing the message ankit bhai yaha par bhabya ka age ke code ki link daal de bas naam daal de
            window.location.href = 'http://www.google.com';
        });

          
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You enter a wrong id and password !',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }

})


