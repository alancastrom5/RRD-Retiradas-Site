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


// Defina uma variável global para armazenar o valor do CEP
let valorCEP = '';

// Adicione um ouvinte de evento para capturar o valor quando o usuário inseri-lo
numberInput.addEventListener('input', function() {
    // Captura o valor do campo de entrada
    valorCEP = numberInput.value;
    //console.log('Valor salvo:', valorCEP);
});


document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.form-check-input');

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function(event) {
            const checkboxesMarcados = [];

            // Percorre todos os checkboxes e verifica se estão marcados
            checkboxes.forEach(function(checkbox) {
                if (checkbox.checked) {
                    checkboxesMarcados.push(checkbox.id);
                }
            });

            localStorage.setItem('Opcoes_Marcadas', JSON.stringify(checkboxesMarcados));

            const checkboxSalvo = localStorage.getItem('Opcoes_Marcadas');
            const checkboxesMarcadosFormatados = JSON.parse(checkboxSalvo).join(', ');
        //    console.log(checkboxesMarcadosFormatados);


            
            const botaoOrcamento = document.querySelector('.orcamento_personalizado');
            const link_zap = `https://api.whatsapp.com/send/?phone=5511951858692&text=Solicito+or%C3%A7amento+para+CEP+${valorCEP}+recolhendo+1x${checkboxesMarcadosFormatados}&type=phone_number&app_absent=0`;
            botaoOrcamento.setAttribute('href', link_zap);
        });
    });
    const checkboxSalvo = localStorage.getItem('Opcoes_Marcadas');
    const checkboxesMarcados = JSON.parse(checkboxSalvo);
    
   // console.log(checkboxesMarcados); // Aqui você tem o valor como um objeto JavaScript
});

function limitarTamanho(elemento, maximo) {
    if (elemento.value.length > maximo) {
      elemento.value = elemento.value.slice(0, maximo);
    }
  }
  