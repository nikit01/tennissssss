let offset = 0;
const slaiderLine = document.querySelector('.services--line');
document.querySelector('.btn--next').addEventListener('click', function(){
    offset = offset + 586;
    if(offset > 1758){
        offset = 0;
    }
    slaiderLine.style.left = -offset + 'px';
});
document.querySelector('.btn--prev').addEventListener('click', function(){
    offset = offset - 586;
    if(offset < 0){
        offset = 1758;
    }
    slaiderLine.style.left = -offset + 'px';
});


////////--слайдер media 425px--////////
let offsetMedia = 0;
const slaiderLineMedia = document.querySelector('.services--line--media');
document.querySelector('.btn--next').addEventListener('click', function(){
    offsetMedia = offsetMedia + 385;
    if(offsetMedia > 1155){
        offsetMedia = 0;
    }
    slaiderLineMedia.style.left = -offsetMedia + 'px';
});
document.querySelector('.btn--prev').addEventListener('click', function(){
    offsetMedia = offsetMedia - 385;
    if(offsetMedia < 0){
        offsetMedia = 1155;
    }
    slaiderLineMedia.style.left = -offsetMedia + 'px';
});

let instructor =  document.querySelector('.instructor--container--bottom');

document.querySelector('.still').addEventListener('click', function(){
    instructor.style.display = 'flex';
    document.querySelector('.still').classList.add('hidden')
    document.querySelector('.to--close').classList.remove('hidden')
});
document.querySelector('.to--close').addEventListener('click', function(){
    instructor.style.display = 'none';
    document.querySelector('.to--close').classList.add('hidden')
    document.querySelector('.still').classList.remove('hidden')
});
// 



let mediaMenu = document.querySelector('.header--list--media');

document.querySelector('.media--btn--burger').addEventListener('click', function(){
    mediaMenu.style.display = 'block';
    document.querySelector('.blur').classList.remove('hidden')
});

document.querySelector('.btn--media--close').addEventListener('click', function(){
    mediaMenu.style.display = 'none';
    document.querySelector('.blur').classList.add('hidden')
});