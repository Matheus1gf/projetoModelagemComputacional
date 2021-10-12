$(document).ready(function(){
    $(".button_multi").click(function(){
        var numero_1 = parseInt($("#numero_1").val());
        var numero_2 = parseInt($("#numero_2").val());
        var numero_3 = parseInt($("#numero_3").val());
        if(numero_1 * numero_2 == numero_3){
            //alert("acertou");
            for (let index = 1; index < numero_1+1; index++) {
                $("tr").eq(index).children('td').slice(1, numero_2+1).addClass("black");
            }
        } else {
            alert("errou");
        }
    });


    $(".button_soma").click(function(){
        var numero_1_soma = parseInt($("#numero_1_soma").val());
        var numero_2_soma = parseInt($("#numero_2_soma").val());
        var numero_3_soma = parseInt($("#numero_3_soma").val());
        var soma = numero_1_soma + numero_2_soma;
        if(numero_1_soma > 5 || numero_2_soma > 5){
            alert("DIGITE UM NÚMERO ENTRE 1 E 5");
        }

        if(soma == numero_3_soma){
            $('body > div > div.tabela > table > tbody > tr.linha_'+numero_1_soma+' > td.coluna_'+numero_2_soma).attr('class', 'table-danger');
        } else {
            alert("errou");
        }
    });
  });
