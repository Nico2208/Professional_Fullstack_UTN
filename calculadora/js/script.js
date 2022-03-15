function mostrarNumero (numero) {
    var num = document.getElementById(numero).innerHTML;
    console.log(num);
    document.getElementById('display').innerHTML += num;
}