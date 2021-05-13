'use strict';

const head = document.querySelector('.head');
const face = document.querySelector('.face');

function handleChangeFace(event) {
    face.innerHTML = ';)';
}

head.addEventListener('click',handleChangeFace);


function handleNoHover(event) {
    face.innerHTML = ':|';
}

head.addEventListener('mouseleave', handleNoHover);