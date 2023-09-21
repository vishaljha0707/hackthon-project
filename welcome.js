var start = document.querySelector("#panel1 #btn1")

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

var login = function(){
 
}
start.addEventListener("onclick",function(){
  login()

})
