const mostrarNumero = numero => {
    var num = parseInt(document.getElementById(numero).innerHTML);
    console.log(num);
    document.getElementById('display').innerHTML += num;
    if(document.getElementById('display2').innerHTML == " ") {
        document.getElementById('display1').innerHTML += num;
    } else {
        document.getElementById('display3').innerHTML += num;
    }
}

const mostrarSimbolo = simbolo => {
    var simb = document.getElementById(simbolo).innerHTML;
    document.getElementById('display').innerHTML += simb;
    document.getElementById('display2').innerHTML = simb;

}

const resetear = () => {
    document.getElementById('display').innerHTML = " ";
    document.getElementById('display1').innerHTML = " ";
    document.getElementById('display2').innerHTML = " ";
    document.getElementById('display3').innerHTML = " ";

}

const calcular = () => {
    var num1 = parseInt(document.getElementById('display1').innerHTML);
    var num2 = parseInt(document.getElementById('display3').innerHTML);
    var simbolo = document.getElementById('display2').innerHTML;
    console.log(simbolo);
    switch (simbolo) {
        case "+":
            document.getElementById('display').innerHTML = num1 + num2;
            break;
        case "-":
            document.getElementById('display').innerHTML = num1 - num2;
            break;
        case "*":
            document.getElementById('display').innerHTML = num1 * num2;
            break;
        case "/":
            document.getElementById('display').innerHTML = num1 / num2;
            break;
    }
}