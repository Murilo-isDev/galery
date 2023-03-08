 let btnGaleria = document.querySelector('#avancar');
 let btnVoltar = document.querySelector('#voltar');
 let imagem = document.querySelector('#imagem');
 let imagens = ['brasil.png','barcelona.png', 'city.png', 'liverpool.png', 'allnasser.png', 'borussia.png', 'psg.png'];
 let imAtual = 0;

 btnGaleria.addEventListener('click', function(){
    imAtual++;
   if(imAtual >= imagens.length){
         imAtual = 0;
     }
     imagem.setAttribute('src', imagens[imAtual]);

     setTimeout(function(){
         imagem.style.transition = '1s';
     }, 1000);

     

     btnVoltar.addEventListener('click', function(){
         imAtual--;
         if(imAtual < 0){
             imAtual = imagens.length -1;
        }
         imagem.setAttribute('src', imagens[imAtual]);

         setTimeout(function(){
             imagem.style.transition = '1s';
         }, 1000);
     }); });

     function barcelona() {
        document.getElementById("imagem").src="barcelona.png";
     }

     function city() {
        document.getElementById("imagem").src="city.png";
     }

     function liverpool() {
        document.getElementById("imagem").src="liverpool.png";
     }

     function allnasser() {
        document.getElementById("imagem").src="allnasser.png"
      ;
        
     }

     function borussia() {
        document.getElementById("imagem").src="borussia.png";
        imagem.style.border= '15px solid';
        imagem.style.borderImage = "url(https://d2r9epyceweg5n.cloudfront.net/stores/002/158/472/products/camisa-borussia-dortmund-home-22-23-puma-masculino-torcedor-amarelo-21-2a76c3b7e6500481db16535323532426-640-0.jpg) 30 round";

     }

     function psg() {
        document.getElementById("imagem").src="psg.png";
     }















// let btnGaleria = document.querySelector('#avancar');
// let imagem = document.querySelector('#imagem');
// let imagens = ['/imagens/barcelona.png', '/imagens/city.png', '/imagens/liverpool.png', '/imagens/allnasser.png', '/imagens/borussia.png', '/imagens/psg.png'];
// let imAtual = 0;

// btnGaleria.addEventListener('click', function(){
//     imAtual++;
//     if(imAtual >= imagens.length){
//         imAtual = 0;
//     }
//     imagem.setAttribute('src', imagens[imAtual]);

//     setTimeout(function(){
//         imagem.style.transition = '1s';
//     }, 1000);
// });
// let btnVoltar = document.querySelector('#btnVoltar');

//      btnVoltar.addEventListener('click', function(){
//         imAtual--;
//          if(imAtual < 0){
//              imAtual = imagens.length - 1;
//          }
//          imagem.setAttribute('src', imagens[imAtual]);

//         setTimeout(function(){
//              imagem.style.transition = '1s';
//         }, 1000);
//      });






