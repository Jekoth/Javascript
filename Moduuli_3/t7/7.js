const image = document.getElementById('target');
const parag = document.getElementById('trigger');

parag.addEventListener('mouseover', function (){
    image.src = 'img/picA.jpg'
});

parag.addEventListener('mouseout', function (){
    image.src = 'img/picB.jpg'
});