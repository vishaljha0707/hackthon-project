

gsap.to("nav",{
backgroundColor:"#AFEEEE",
height:"80px",
borderRadius:"5px",
marginBottom:"78px",
  duration: 0.5,
  scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    start:"top -10%",
    end:"top -12%",
    scrub:true
  }

})

gsap.to("nav img",{
  backgroundColor:"#AFEEEE",
  height:"80px",
 
    duration: 0.5,
    scrollTrigger:{
      trigger:"#nav",
      scroller:"body",
      start:"top -10%",
      end:"top -12%",
      scrub:true
    }
  
})


document.querySelector("#page6 #four").addEventListener("click",function(){
  var emailInput = document.getElementById('emailInput');
  var email = emailInput.value;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please enter a valid email Id!',
      
    })
    return;
  }
  else{
    Swal.fire({
   
      icon: 'success',
      title:'Thanks',
      text: 'Subscription successful!',
      showConfirmButton: false,
      timer: 2000
    })
    return;
  }
})

