const mostrarNumero = numero => {
    var num = document.getElementById(numero).innerHTML;
    console.log(num);
    document.getElementById('display').innerHTML += num;
}

const mostrarSimbolo = simbolo => {
    var simb = document.getElementById(simbolo).innerHTML;
    document.getElementById('display').innerHTML += simb;
}

const calcular = () => {
    var display = parseInt(document.getElementById('display').innerHTML);
    console.log(display);
}