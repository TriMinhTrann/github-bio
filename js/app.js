//Svg Animation Title//
new Vivus ('svg-animation',{
    start:'autostart',
    type:'oneByOne',
    duration:300,
    forceRender: true,
    AnimationTimingFunction:Vivus.EASE_OUT,   
    PathTimingFunction:Vivus.EASE_OUT_BOUNCE,
}, function(obj){
    obj.el.classList.add('draw');
});

//------------------------------------//

//-----light-box---//
lightbox.option({
    'wrapAround':false,
    'albumLabel':"Image %1 of %2",
    'disableScrolling':true,
    'fitImagesInViewport':true,
    'positionFromTop':225
})



//const layoutJS = document.querySelector('.layoutJS');
// const url = 'images/';

// for (let i = 01; i <= 09; i++){
//     const exImg = document.createElement('img');
//     exImg.src =`${url}0${i}.jpg`

//     layoutJS.appendChild(exImg);
// }

// for (let i = 10; i <= 24; i++){
//     const exImg = document.createElement('img');
//     exImg.src =`${url}${i}.jpg`

//     layoutJS.appendChild(exImg);
// }