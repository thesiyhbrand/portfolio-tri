var tl = gsap.timeline({scrollTrigger:{
    trigger: ".part-2",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to(".strip",{
    marginLeft: "-50%",
})

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".part-2",
    start: "50% 50%",
    end: "100% 50%",
    scrub: true,
    pin: true,
    // markers: true,
}})

tl2.to(".text-part-2",{
    top: "20vh",
})


var tl3 = gsap.timeline({scrollTrigger:{
    trigger: ".part-3",
    start: "50% 50%",
    end: "150% 50%",
    scrub: true,
    pin: true,
    // markers: true,
}})

tl3.to(".cntr-cir",{
   width: "200vw",
   height: "200vw",
})
tl3.to(".cntr-cir h1",{
    opacity: "1",
 })



 document.querySelector(".our-work1").addEventListener("mousemove", function(){
    document.querySelector(".float1").style.display = "initial";
})
document.querySelector(".our-work1").addEventListener("mouseleave", function(){
    document.querySelector(".float1").style.display = "none";
})

document.querySelector(".our-work2").addEventListener("mousemove", function(){
    document.querySelector(".float2").style.display = "initial";
})
document.querySelector(".our-work2").addEventListener("mouseleave", function(){
    document.querySelector(".float2").style.display = "none";
})

document.querySelector(".our-work3").addEventListener("mousemove", function(){
    document.querySelector(".float3").style.display = "initial";
})
document.querySelector(".our-work3").addEventListener("mouseleave", function(){
    document.querySelector(".float3").style.display = "none";
})

document.querySelector(".our-work4").addEventListener("mousemove", function(){
    document.querySelector(".float4").style.display = "initial";
})
document.querySelector(".our-work4").addEventListener("mouseleave", function(){
    document.querySelector(".float4").style.display = "none";
})



var float = document.querySelector(".part-3");
var swing = 0;
var diffswing = 0;

float.addEventListener("mousemove", function(dets){
    diffswing = dets.clientX - swing;
    swing = dets.clientX;
    gsap.to(".float", {
        ease: Power1,
        top: dets.clientY,
        left: dets.clientX,
        xPercent: -60,
        yPercent: -130,
        rotate: gsap.utils.clamp(-100, diffswing*0.3),
    });
})



var tl7 = gsap.timeline({scrollTrigger:{
    trigger: "#main2",
    start: "30% 30%",
    end: "70% 90%",
    scrub: true,
    // markers: true,
}})

tl7.to("#imgTwo",{
    rotateX: "0deg",
})
.to("#imgThree",{
    rotateX: "0deg",
})
.to(".resume",{
    marginTop: "50vh",
    scale: "0.8"
}, 'sa')
.to(".img",{
    filter: "grayscale(1)",
}, 'sa')
.to(".text",{
    marginTop: "-100vh",
}, 'sa')
