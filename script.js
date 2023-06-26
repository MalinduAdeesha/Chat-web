
const chatWdo =document.querySelector('.chat');
const popupCht =document.querySelector('.chatIcn');

popupCht.addEventListener('click',()=>{
    chatWdo.style.display ="block"
    callWdo.style.display ="none"
    stsWdo.style.display ="none"
})

const callWdo =document.querySelector('.call');
const popupCall=document.querySelector('.callIcn');

popupCall.addEventListener('click',()=>{
    callWdo.style.display ="block"
    chatWdo.style.display ="none"
    stsWdo.style.display ="none"
})

const stsWdo =document.querySelector('.status');
const popupSts=document.querySelector('.statusIcn');

popupSts.addEventListener('click',()=>{
    stsWdo.style.display ="block"
    chatWdo.style.display ="none"
    callWdo.style.display ="none"
})

const userWdo =document.querySelector('.rightSideClick');
const mainwdo =document.querySelector('.rightSide');
const person01=document.querySelector('.user01');

person01.addEventListener('click',()=>{
    userWdo.style.display ="block"
    mainwdo.style.display ="none"
})

const profile =document.querySelector('.profileController');
const profButton =document.querySelector('.userImage');
const back1 =document.querySelector('.return');
const back2 =document.querySelector('.back');
const back3=document.querySelector('.rightSide');

profButton.addEventListener('click',()=>{
    profile.style.display ="block"
})
back1.addEventListener('click',()=>{
    profile.style.display ="none"
})
back2.addEventListener('click',()=>{
    profile.style.display ="none"
})
back3.addEventListener('click',()=>{
    profile.style.display ="none"
})

