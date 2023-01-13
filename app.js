let estadoLicuadora = 'apagado';
let licuadora = document.getElementById('blender');
let sonidoLicuadora = document.getElementById('blender-sound');
let botonLicuadora = document.getElementById('blender-boton-sound');
let text = document.getElementById('text');
text.innerText = '¡Prueba la licuadora!'

function controlarLicuadora() {
    if (estadoLicuadora == 'apagado') {
        estadoLicuadora = 'encendido'
        licuadoraBrr()
        licuadora.classList.add('active');
    } else {
        estadoLicuadora = 'apagado'
        licuadoraBrr()
        licuadora.classList.remove('active');
    }
}

function licuadoraBrr() {
    if (sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currenTime = 0;
    }
}