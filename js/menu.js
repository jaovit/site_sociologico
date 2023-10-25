var aberto = false
var checkbox = document.querySelector('#menu_input');

document.addEventListener('click', function (event) {
    var target = event.target;
    var label = document.querySelector('.clic_js');
    var nav = document.querySelector('.configuracao');
    if (target === checkbox) {

    } else {


        if (target === label) {
            if (aberto) {
                aberto = false
                checkbox.checked = true;

            } else {
                aberto = true;
                checkbox.checked = false;
            }
        } else {

            if (target !== checkbox && target !== nav) {
                checkbox.checked = false;
                if (aberto) {
                    aberto = false
                    checkbox.checked = false;

                }
            }
        }
    }

});

var nav = document.querySelector('.configuracao')
nav.addEventListener('click', function (event) {
    event.stopPropagation();
});

var input = document.querySelector('.menu_audio input');
var menuAudio = document.querySelector('.menu_audio')

menuAudio.classList.add("transition")
input.addEventListener("input", menu_audio)

function menu_audio() {
    if (input.checked) {
        menuAudio.classList.add('menuAudio_aberto')
    } else {
        menuAudio.classList.remove('menuAudio_aberto')
    }
}


// input type file 

var Input = document.getElementById('input_foto');
var Label = document.getElementById('label_foto');
var texto_label = document.querySelector(".textolabel")

Input.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            Label.style.backgroundImage = `url('${reader.result}')`;
        };
        reader.readAsDataURL(file);
        texto_label.style.cssText = "display: none;"
    } else {
        Label.style.backgroundImage = 'none';
    }
});

var fundo_element = document.querySelector(".formularios")
var compartilhar_element = document.querySelector(".compartilhar")
var comentar_element = document.querySelector(".comentar")
var entrar_element = document.querySelector(".entrar")

function compartilhar() {
    checkbox.checked = false;
    entrar_element.style.cssText = "display: none"
    comentar_element.style.cssText = "display: none"
    compartilhar_element.style.cssText = "display: block"
    fundo_element.style.cssText = "display: block"
}

function comentar() {
    checkbox.checked = false;
    entrar_element.style.cssText = "display: none"
    comentar_element.style.cssText = "display: block"
    compartilhar_element.style.cssText = "display: none"
    fundo_element.style.cssText = "display: block"
}

function entrar() {
    checkbox.checked = false;
    entrar_element.style.cssText = "display: block"
    comentar_element.style.cssText = "display: none"
    compartilhar_element.style.cssText = "display: none"
    fundo_element.style.cssText = "display: block"
}

function fecharCompleto(form) {

    const formulario_entrar = document.getElementById('form_e');
    const formulario_comentar = document.getElementById('form_c');


    if (form) {
        if (formulario_entrar.checkValidity()) {
            fechar();
        } else {
            formulario_entrar.reportValidity();
        }
    } else {
        if (formulario_comentar.checkValidity()) {
            fechar();
        } else {
            formulario_comentar.reportValidity();
        }
    }
}

function fechar() {
    checkbox.checked = false;
    entrar_element.style.cssText = "display: none"
    comentar_element.style.cssText = "display: none"
    compartilhar_element.style.cssText = "display: none"
    fundo_element.style.cssText = "display: none"
}

function nativo() {
    fechar()
    compartilhar()
    if (navigator.share !== undefined) {
        navigator.share({
            title: 'Sustentabilidade: Ações que mudam o mundo',
            text: 'Como mudar o mundo de maneira sustentável',
            url: 'https://agrinho2023-iota.vercel.app/',
        })
    }
}