function audio1() {
    var audio = new Audio('audio/triste.mp3');
    audio.play();
}

function audio2() {
    var audio = new Audio('audio/XD.mp3');
    audio.play();
}

function audio3() {
    var audio = new Audio('audio/dormilon.mp3');
    audio.play();
}

function audio4() {
    var audio = new Audio('audio/si.mp3');
    audio.play();
}


function cambio1() {
    document.getElementById("item1-name").innerHTML = "Valorant zzz";
    document.getElementById("item1-price").innerHTML = "$0";
    document.getElementById("item1-img").src = 'images/valo.jpg';
    audio3();
}

function cambio2() {
    document.getElementById("item2-name").innerHTML = "?";
    document.getElementById("item2-price").innerHTML = "$?";
    document.getElementById("item2-img").src = 'images/laroca.jpg';
    audio4();
}

function cambio3() {
    document.getElementById("item3-name").innerHTML = "XDXdXdDdXdDdD";
    document.getElementById("item3-price").innerHTML = "$999999999";
    document.getElementById("item3-img").src = 'images/gatoXD.jpg';
    audio2();

}

function cambio4() {
    document.getElementById("item4-name").innerHTML = "Mi compu :'v";
    document.getElementById("item4-price").innerHTML = "una cora";
    document.getElementById("item4-img").src = 'images/mipc.jpg';
    audio1();
}


