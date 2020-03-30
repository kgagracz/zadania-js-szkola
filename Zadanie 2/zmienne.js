let a;
let b;
let c;

const insertNumbers = (zadanie) => {
    a = parseInt(prompt(zadanie + ' Wpisz liczbe pierwszą'));
    b = parseInt(prompt(zadanie + ' Wpisz liczbe drugą'));
    c = parseInt(prompt(zadanie + ' Wpisz liczbe trzecią'));
}



//zadanie 2.1
document.getElementById('1').addEventListener('click', function(){
    insertNumbers('[zadanie 2.1 - suma]');
    let suma = a + b + c;
    alert('suma to:' + suma)
})


//zadanie 2.2
document.getElementById('2').addEventListener('click', function(){
    insertNumbers('[zadanie 2.2 - średnia]');
    let srednia = (a+b+c) / 3;
    alert(srednia);
    
})

//zadanie 2.3
document.getElementById('3').addEventListener('click', function(){
    let d = parseInt(prompt('[zadanie 2.3] Wpisz liczbe pierwszą'));
    let f = parseInt(prompt('[zadanie 2.3] Wpisz liczbe drugą'));
    
    alert(`suma: ${d + f},\nróżnica: ${d-f}, \niloczyn: ${d*f}` )
})


//zadanie 2.4
document.getElementById('4').addEventListener('click', function(){
    let g = Math.sqrt(parseInt(prompt('[zadanie 2.4] Wpisz liczbę do spierwiastkowania')));
    alert('Wynik to: ' +g);
})


//zadanie 2.5
document.getElementById('5').addEventListener('click', function(){
    let h = parseInt(prompt("[zadanie 2.5] Wpisz bok kwadratu"))
    alert(`Pole kwadratu wynosi: ${h*h}`);
    
})

//zadanie 2.6
document.getElementById('6').addEventListener('click', function(){
    let i = parseInt(prompt('[zadanie 2.6] Wpisz bok pierwszy'));
    let j = parseInt(prompt('[zadanie 2.6] Wpisz bok drugi'));
    alert(`Pole prostopadłościanu wynosi: ${i*j}`);
})


//zadanie 2.7
document.getElementById('7').addEventListener('click', function(){
    let radius = parseInt(prompt('[Zadanie 2.7] Wpisz promień koła'))
    let obwod = 2*Math.PI*radius;
    let pole = Math.PI*(radius*radius);
    alert(`Obwód koła wynosi: ${obwod}\nPole koła wynosi ${pole}`)
})


// zadanie 2.8 oraz 2.9 link do skryptu nie działa
document.getElementById('8').addEventListener('click', function(){
    alert('link do pobrania skryptu nie działa')
})
document.getElementById('9').addEventListener('click', function(){
    alert('link do pobrania skryptu nie działa')
})
//zadanie 2.10
document.getElementById('10').addEventListener('click', function(){
    let lokata = parseInt(prompt('[Zadanie 2.10] Wpisz kwote, którą chcesz wpłacić na lokatę'));
alert(`Po zakończeniu lokaty otrzymasz ${lokata*1.08} \- podatek`);
})

