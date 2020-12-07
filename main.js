let nombre


prompt();



document.getElementById('color').addEventListener('input', getColor)

function getColor(){

    let col = document.getElementById('color').value 
    document.getElementById('visualizar').innerHTML='El color elegido es'+ col  
    document.getElementById('body').style.background=col
}

document.getElementById('color2').addEventListener('input', getColor2)

function getColor2(){

    let col2 = document.getElementById('color2').value 
    document.getElementById('visualizar2').innerHTML='El color elegido es'+ col2
    document.getElementById('p').style.color=col2
}
