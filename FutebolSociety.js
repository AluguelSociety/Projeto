let imagens = document.querySelectorAll('.small_img');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');
let btClouse = document.querySelector('#bt_clouse');
let srcVal = "";

for(let i=0; i<imagens.length; i++){
    imagens[i].addEventListener('click', function(){
        alert(i);

        srcVal = imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    });
    
}