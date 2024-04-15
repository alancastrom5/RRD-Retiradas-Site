// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();



// owl carousel slider js
var owl = $('.portfolio_carousel').owlCarousel({
    loop: true,
    margin: 15,
    dots: false,
    center: true,
    autoplay: true,
    navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            center: false,
            items: 1,
            margin: 0
        },
        576: {
            items: 2
        },
        991: {
            center: true,
            items: 3
        }
    }
})


// owl.owlcarousel2_filter

$('.owl-filter-bar').on('click', '.item', function (e) {
    var $items = $('.owl-filter-bar a')
    var $item = $(this);
    var filter = $item.data('owl-filter')
    $items.removeClass("active");
    $item.addClass("active");
    owl.owlcarousel2_filter(filter);

    e.preventDefault();
})


// nice select
$(document).ready(function () {
    $('select').niceSelect();
});


// calculos de orcamento
// salvar em uma var e enviar junto ao link do whatsapp

// Selecione o campo de entrada
const numberInput = document.querySelector('#exampleInputNumber');

// Adicione um ouvinte de evento para capturar o valor quando o usuário inseri-lo
numberInput.addEventListener('input', function() {
    // Captura o valor do campo de entrada
    const valorCEP = numberInput.value;
    
    // Salva o valor em localStorage junto com o timestamp atual
    const expirationTime = Date.now() + 5 * 60 * 1000; // 5 minutos em milissegundos
    const valorASalvar = (parseFloat(valorCEP) > 0) ? '100,00' : valorCEP;
    localStorage.setItem('valorCEP', JSON.stringify({ valor: valorASalvar, expirationTime: expirationTime }));
});

// Recupera o valor armazenado em localStorage quando necessário
const valorSalvoString = localStorage.getItem('valorCEP');
if (valorSalvoString) {
    const { valor, expirationTime } = JSON.parse(valorSalvoString);
    const currentTime = Date.now();
    if (currentTime < expirationTime) {
        // O valor ainda está dentro do prazo de validade
        console.log('Valor salvo:', valor);
        const valorFormatado = (valor === '100,00') ? valor : `R$: ${valor}`;
        document.querySelector('.form-label_1').innerHTML += ` ${valorFormatado}`;
    } else {
        // O valor expirou, então remova-o do localStorage
        localStorage.removeItem('valorCEP');
        console.log('O valor do CEP expirou e foi removido.');
    }
}
