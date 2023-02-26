const horaHand = document.querySelector('.hora-hand')
const minutoHand = document.querySelector('.minuto-hand')
const segundoHand = document.querySelector('.segundo-hand')

const getTime = () =>{
    const date = new Date();
    const obj = {
        hora: date.getHours(),
        minuto: date.getMinutes(),
        segundo: date.getSeconds(),
    }
    return obj;
}


setInterval(() => {
    const {segundo,minuto,hora} = getTime()

    segundoHand
    .style.transform = `translate(0,-50%) rotate(${segundo * 6}deg)` 
    minutoHand
    .style.transform = `translate(0,-50%) rotate(${minuto * 6}deg)` 

    horaHand
    .style.transform = `translate(0,-50%) rotate(${hora * 30}deg)` 
},1000)


audio = document.getElementById('audio');
function reproduzir(urlMusica){
    audio.src = 'audio/Som  Relógio Tic Tac.mp3';
    audio.play();
}   