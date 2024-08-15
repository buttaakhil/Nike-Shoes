let trackShoe=2;

let lessthanSymbol=document.querySelector(".less-than");
let greaterthanSymbol=document.querySelector(".greater-than");
let colortext=document.querySelector(".color-text");
let normaltext=document.querySelector(".normal-text");
let discountPrice=document.querySelector(".discount-price");
let mrpPrice=document.querySelector(".mrp-price");
let buynowButton=document.querySelector(".buy-now");
let outerCircleOne=document.querySelector(".outer-circle-one");
let outerCircleTwo=document.querySelector(".outer-circle-two");

let middleImg,leftImg,rightImg,invisibleLeft,invisibleRight;

lessthanSymbol.addEventListener("click",()=>{
    trackShoe--;
    middleImg=document.querySelector(".img-main");
    leftImg=document.querySelector(".img-left");
    rightImg=document.querySelector(".img-right");
    invisibleRight=document.querySelectorAll(".img-invisible-right");
    invisibleLeft=document.querySelectorAll(".img-invisible-left");
    changeColor(1);
})
greaterthanSymbol.addEventListener("click",()=>{
    trackShoe++;
    middleImg=document.querySelector(".img-main");
    leftImg=document.querySelector(".img-left");
    rightImg=document.querySelector(".img-right");
    invisibleRight=document.querySelectorAll(".img-invisible-right");
    invisibleLeft=document.querySelectorAll(".img-invisible-left");
    changeColor(2);
})

function changeColor(check){
    switch(trackShoe){
        case 1:
            colortext.innerText=`DUNK`;
            normaltext.innerText=`NEO`;
            colortext.style.background=`linear-gradient(105deg, #2B335B 42.76%, #5B6CC1 94.48%)`;
            colortext.style.backgroundClip=`text`;
            discountPrice.innerHTML=`&#8377; 4999.00`;
            mrpPrice.innerHTML=`&#8377; 6999.00`;
            buynowButton.style.background=`#2B335B`;
            buynowButton.style.boxShadow=`0px 4px 16px 0px #2B335B`;
            outerCircleOne.style.background=`-webkit-linear-gradient(left top, #2B335B 0%, white 100%)`;
            outerCircleTwo.style.background=`-webkit-linear-gradient(left top, #2B335B 0%, white 100%)`;
            
            if(check==2){

            }
            else{
                middleImg.setAttribute("class","img-right");
                leftImg.setAttribute("class","img-main");
                rightImg.setAttribute("class","img-invisible-right");
            }
        break;
        case 2:
            colortext.innerText=`AIR`;
            normaltext.innerText=`FORCE`;
            colortext.style.background=`linear-gradient(105deg, #C64340 42.76%, #60201F 94.48%)`;
            colortext.style.backgroundClip=`text`;
            discountPrice.innerHTML=`&#8377; 1999.00`;
            mrpPrice.innerHTML=`&#8377; 2999.00`;
            buynowButton.style.background=`#C64340`;
            buynowButton.style.boxShadow=`0px 4px 16px 0px rgba(198, 67, 64, 0.64)`;
            outerCircleOne.style.background=`-webkit-linear-gradient(left top, #C64340 0%, white 100%)`;
            outerCircleTwo.style.background=`-webkit-linear-gradient(left top, #C64340 0%, white 100%)`;
            
            if(check==2){
                middleImg.setAttribute("class","img-left");
                rightImg.setAttribute("class","img-main");
                invisibleRight[0].setAttribute("class","img-right");
            }
            else{
                middleImg.setAttribute("class","img-right");
                leftImg.setAttribute("class","img-main");
                rightImg.setAttribute("class","img-invisible-right");
                invisibleLeft[invisibleLeft.length-1].setAttribute("class","img-left");
            }
            
        break;
        case 3:
            colortext.innerText=`AIR`;
            normaltext.innerText=`MAX`;
            colortext.style.background=`linear-gradient(105deg, #CA8D23 42.76%, #634819 94.48%)`;
            colortext.style.backgroundClip=`text`;
            discountPrice.innerHTML=`&#8377; 2499.00;`
            mrpPrice.innerHTML=`&#8377; 3999.00`;
            buynowButton.style.background=`#CA8D23`;
            buynowButton.style.boxShadow=`0px 4px 16px 0px rgba(202, 141, 35, 0.64)`;
            outerCircleOne.style.background=`-webkit-linear-gradient(left top, #CA8D23 0%, white 100%)`;
            outerCircleTwo.style.background=`-webkit-linear-gradient(left top, #CA8D23 0%, white 100%)`;

            

            if(check==2){
                middleImg.setAttribute("class","img-left");
                leftImg.setAttribute("class","img-invisible-left");
                rightImg.setAttribute("class","img-main");
                invisibleRight[0].setAttribute("class","img-right");
            }
            else{
                middleImg.setAttribute("class","img-right");
                leftImg.setAttribute("class","img-main");
                rightImg.setAttribute("class","img-invisible-right");
                invisibleLeft[invisibleLeft.length-1].setAttribute("class","img-left");
            }
            
        break;
        case 4:
            colortext.innerText=`CR7`;
            normaltext.innerText=`NIKE`;
            colortext.style.background=`linear-gradient(105deg, #24639A 42.76%, #00284C 94.48%)`;
            colortext.style.backgroundClip=`text`;
            discountPrice.innerHTML=`&#8377; 1499.00`;
            mrpPrice.innerHTML=`&#8377; 1999.00`;
            buynowButton.style.background=`#24639A`;
            buynowButton.style.boxShadow=`0px 4px 16px 0px rgba(36, 99, 154, 0.64)`;
            outerCircleOne.style.background=`-webkit-linear-gradient(left top, #24639A 0%, white 100%)`;
            outerCircleTwo.style.background=`-webkit-linear-gradient(left top, #24639A 0%, white 100%)`;

            if(check==2){
                middleImg.setAttribute("class","img-left");
                leftImg.setAttribute("class","img-invisible-left");
                rightImg.setAttribute("class","img-main");
                invisibleRight[0].setAttribute("class","img-right");
            }
            else{
                middleImg.setAttribute("class","img-right");
                leftImg.setAttribute("class","img-main");
                invisibleLeft[invisibleLeft.length-1].setAttribute("class","img-left");
            }

        break;
        case 5:
            colortext.innerText=`SHOX`;
            normaltext.innerText=`MAX`;
            colortext.style.background=`linear-gradient(105deg, #164847 42.76%, #35AEAC 94.48%)`;
            colortext.style.backgroundClip=`text`;
            discountPrice.innerHTML=`&#8377; 1999.00`;
            mrpPrice.innerHTML=`&#8377; 2999.00`;
            buynowButton.style.background=`#164847`;
            buynowButton.style.boxShadow=`0px 4px 16px 0px #164847`;
            outerCircleOne.style.background=`-webkit-linear-gradient(left top, #164847 0%, white 100%)`;
            outerCircleTwo.style.background=`-webkit-linear-gradient(left top, #164847 0%, white 100%)`;


            if(check==2){
                middleImg.setAttribute("class","img-left");
                leftImg.setAttribute("class","img-invisible-left");
                rightImg.setAttribute("class","img-main");
            }
            
        break;
        default:
            if(trackShoe>5){
                trackShoe--;
            }
            else{
                trackShoe++;
            }
    }
}