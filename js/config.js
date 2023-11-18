var modo = true;
var root = document.documentElement;
var titulo = document.querySelectorAll(".titulo")
var subtitulo = document.querySelectorAll(".subtitulo")
var texto = document.querySelectorAll(".texto")
var txt_125 = document.querySelectorAll(".vtxt_125")
var txt_120 = document.querySelector(".vtxt_120")
var txt_110 = document.querySelector(".vtxt_110")
var img_130 = document.querySelector(".vimg_130")
var input_cor_1 = document.querySelector("#input_cor_1")
var input_cor_2 = document.querySelector("#input_cor_2")

var input_cor_3 = document.querySelector("#input_cor_3")
var tituloColor = document.querySelectorAll(".titleColor")
var input_cor_4 = document.querySelector("#input_cor_4")
var txtColor = document.querySelectorAll(".textColor")

var input_cor_5 = document.querySelector("#input_cor_5")
var input_cor_6 = document.querySelector("#input_cor_6")

function mudarRoot() {
    resetcolor()
        var mudancas = {

            // '--cor-header': 'rgba(25, 25, 25, 0.75)',
            '--borda-menu': 'solid .1vw #e4980d',
            '--cor-principal-deg': 'rgba(0, 0, 0, .75)',
            '--menu-cor': 'rgb(5, 5, 5)',
            '--cor-text-menu': '#c9c2c0',
            '--cor-menu-2': '#e4980d',

            '--cor-principal': 'rgb(17, 17, 17)',
            '--cor-segundaria': 'rgb(0, 0, 0)',
            '--cor-titulo': '#e4980d',
            '--sub-titulo': '#e4980d',
            '--cor-texto': '#c9c2c0',
            '--borda': 'solid .01vw rgb(172, 170, 170)',
            '--background-card': 'url(../img/racismo-no-brasil-scaled.jpg)',
            '--filtro': 'brightness(25%)'
        }

        modo = true
    

    for (var prop in mudancas) {
        root.style.setProperty(prop, mudancas[prop]);
    }
}

// tamanho da fonte
var barraFont = document.querySelector("#progress_font_size")

barraFont.addEventListener("input", fonte);

function fonte() {
    document.querySelector(".fonte_tamanho").innerHTML = barraFont.value / 100
    root.style.setProperty('--font-size-js', barraFont.value / 100);

    if (barraFont.value > 125) {
        for (var i = 0; i < txt_125.length; i++) {
            txt_125[i].classList.add('txt_125');
        }
    } else {
        for (var i = 0; i < txt_125.length; i++) {
            txt_125[i].classList.remove('txt_125');
        }
    }

    if (barraFont.value > 120) {
        txt_120.classList.add('txt_120');
    } else {
        txt_120.classList.remove('txt_120');
    }

    if (barraFont.value > 110) {
        txt_110.classList.add('txt_110');
    } else {
        txt_110.classList.remove('txt_110');
    }
}

// tamanho img
var barraImg = document.querySelector("#progress_img")

barraImg.addEventListener("input", img);

function img() {
    document.querySelector(".img_tamanho").innerHTML = barraImg.value / 100
    root.style.setProperty('--tamanho-img', barraImg.value / 100);

    if (barraImg.value > 120) {
        img_130.classList.add('img_130');
    } else {
        img_130.classList.remove('img_130');
    }

}

// geral
var barraGeral = document.querySelector("#progress_geral")

barraGeral.addEventListener("input", geral);

function geral() {
    document.querySelector(".geral_tamanho").innerHTML = barraGeral.value / 100

    document.querySelector(".fonte_tamanho").innerHTML = barraGeral.value / 100
    root.style.setProperty('--font-size-js', barraGeral.value / 100);
    barraFont.value = barraGeral.value;

    document.querySelector(".img_tamanho").innerHTML = barraGeral.value / 100
    root.style.setProperty('--tamanho-img', barraGeral.value / 100);
    barraImg.value = barraGeral.value

    if (barraFont.value > 125) {
        for (var i = 0; i < txt_125.length; i++) {
            txt_125[i].classList.add('txt_125');
        }
    } else {
        for (var i = 0; i < txt_125.length; i++) {
            txt_125[i].classList.remove('txt_125');
        }
    }

    if (barraFont.value > 120) {
        txt_120.classList.add('txt_120');
    } else {
        txt_120.classList.remove('txt_120');
    }

    if (barraFont.value > 110) {
        txt_110.classList.add('txt_110');
    } else {
        txt_110.classList.remove('txt_110');
    }

    if (barraImg.value > 120) {
        img_130.classList.add('img_130');
    } else {
        img_130.classList.remove('img_130');
    }

}

input_cor_1.addEventListener("input", cor_principal)

function cor_principal() {
    root.style.setProperty('--cor-principal', input_cor_1.value);
    root.style.setProperty('--cor-principal-deg', '#00000000');
}

input_cor_2.addEventListener("input", cor_segundaria)

function cor_segundaria() {
    root.style.setProperty('--cor-segundaria', input_cor_2.value);
}



input_cor_3.addEventListener("input", cor_titulo)

function cor_titulo() {
    root.style.setProperty('--cor-titulo', input_cor_3.value);
    root.style.setProperty('--cor-subtitulo', input_cor_3.value);
    for (var i = 0; i < tituloColor.length; i++) {
        tituloColor[i].classList.add('tituloColor');
    }
}

input_cor_4.addEventListener("input", cor_texto)

function cor_texto() {
    root.style.setProperty('--cor-texto', input_cor_4.value);
    for (var i = 0; i < txtColor.length; i++) {
        txtColor[i].classList.add('txtColor');
    }
}

input_cor_5.addEventListener("input", cor_menuFundo)

function cor_menuFundo() {
    root.style.setProperty('--menu-cor', input_cor_5.value);
}

input_cor_6.addEventListener("input", cor_textoMenu)

function cor_textoMenu() {
    root.style.setProperty('--cor-text-menu', input_cor_6.value);
}

function resetcolor() {
    for (var i = 0; i < txtColor.length; i++) {
        txtColor[i].classList.remove('txtColor');
    }
    for (var i = 0; i < tituloColor.length; i++) {
        tituloColor[i].classList.remove('tituloColor');
    }
}
// resetar

function resetConf() {
    barraFont.value = 100;
    barraImg.value = 100;
    barraGeral.value = 100;
    resetcolor()

    if (barraFont.value > 125) {
        for (var i = 0; i < txt_125.length; i++) {
            txt_125[i].classList.add('txt_125');
        }
    } else {
        for (var i = 0; i < txt_125.length; i++) {
            txt_125[i].classList.remove('txt_125');
        }
    }

    if (barraFont.value > 120) {
        txt_120.classList.add('txt_120');
    } else {
        txt_120.classList.remove('txt_120');
    }

    if (barraFont.value > 110) {
        txt_110.classList.add('txt_110');
    } else {
        txt_110.classList.remove('txt_110');
    }

    if (barraImg.value > 120) {
        img_130.classList.add('img_130');
    } else {
        img_130.classList.remove('img_130');
    }

    geral()
    mudarRoot()
}
