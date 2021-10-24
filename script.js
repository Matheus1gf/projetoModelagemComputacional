$(document).ready(function(){
    $(".button_multiplicacao").click(function(){
        var numero_1_multiplicacao = parseInt($("#numero_1_multiplicacao").val());
        var numero_2_multiplicacao = parseInt($("#numero_2_multiplicacao").val());
        var numero_3_multiplicacao = parseInt($("#numero_3_multiplicacao").val());
        var multiplicacao = numero_1_multiplicacao * numero_2_multiplicacao;

        $('#numero_3_multiplicacao').val('?');
        var aleatorio1 =  Math.floor(Math.random() * 5 + 1);
        var aleatorio2 =  Math.floor(Math.random() * 5 + 1);
        $('#numero_1_multiplicacao').val(aleatorio1);
        $('#numero_2_multiplicacao').val(aleatorio2);

        if(numero_1_multiplicacao > 5 || numero_2_multiplicacao > 5){
            alert("DIGITE UM NÚMERO ENTRE 1 E 5");
        }

        if(multiplicacao == numero_3_multiplicacao){
            $('#multiplicacao > table > tbody > tr.linha_'+numero_1_multiplicacao+'_multiplicacao > td.coluna_'+numero_2_multiplicacao+'_multiplicacao').attr('class', 'coluna_'+numero_2_multiplicacao+'_multiplicacao table-danger');
            $('#multiplicacao > table > tbody > tr.linha_'+numero_1_multiplicacao+'_multiplicacao > td.coluna_'+numero_2_multiplicacao+'_multiplicacao').text(multiplicacao);
        } else {
            alert("errou");
        }
    });

    $(".button_divisao").click(function(){
        var numero_1_divisao = parseInt($("#numero_1_divisao").val());
        var numero_2_divisao = parseInt($("#numero_2_divisao").val());
        var numero_3_divisao = parseInt($("#numero_3_divisao").val());
        var divisao = numero_1_divisao * numero_2_divisao;
        var aleatorio1 = Math.floor(Math.random() * 5 + 1);
        var aleatorio2 =  Math.floor(Math.random() * 5 + 1) * aleatorio1;

        if(numero_1_fatoracao > 5 || numero_2_fatoracao > 5){
            alert("DIGITE UM NÚMERO ENTRE 1 E 5");
        }

        if(divisao == parseInt(numero_3_divisao)){
            $('#divisao > table > tbody > tr.linha_'+numero_1_divisao+'_divisao > td.coluna_'+numero_2_divisao+'_divisao').attr('class', 'coluna_'+numero_2_divisao+'_divisao table-danger');
            $('#divisao > table > tbody > tr.linha_'+numero_1_divisao+'_divisao > td.coluna_'+numero_2_divisao+'_divisao').text(divisao);

            $('#numero_2_divisao').val(aleatorio1);
            $('#numero_3_divisao').val(aleatorio2);
        } else {
            alert("errou");
        }
    });

    $(".button_fatoracao").click(function(){
        var numero_1_fatoracao = parseInt($("#numero_1_fatoracao").val());
        var numero_2_fatoracao = parseInt($("#numero_2_fatoracao").val());
        var numero_3_fatoracao = parseInt($("#numero_3_fatoracao").val());
        var fatoracao = numero_1_fatoracao * numero_2_fatoracao;
        var aleatorio1 = Math.floor(Math.random() * 5 + 1);
        var aleatorio2 =  Math.floor(Math.random() * 5 + 1) * aleatorio1;
        var armazenamento = [];
        var valor = armazenamento.indexOf(aleatorio2) ? aleatorio2 : Math.floor(Math.random() * 5 + 1) * aleatorio1;

        if(numero_1_fatoracao > 5 || numero_2_fatoracao > 5){
            alert("DIGITE UM NÚMERO ENTRE 1 E 5");
        }

        if(fatoracao == numero_3_fatoracao && (numero_1_fatoracao <= 5 && numero_2_fatoracao <= 5)){
            $('#fatoracao > table > tbody > tr.linha_'+numero_1_fatoracao+'_fatoracao > td.coluna_'+numero_2_fatoracao+'_fatoracao').attr('class', 'coluna_'+numero_2_fatoracao+'_fatoracao table-danger');
            $('#fatoracao > table > tbody > tr.linha_'+numero_1_fatoracao+'_fatoracao > td.coluna_'+numero_2_fatoracao+'_fatoracao').text(fatoracao);
            $('#numero_3_fatoracao').val(valor);
        } else {
            alert("errou");
        }

        armazenamento.push(valor);
    });

    function iniciar(){
        $('#numero_3_multiplicacao').val('?');
        var aleatorio1 =  Math.floor(Math.random() * 5 + 1);
        var aleatorio2 =  Math.floor(Math.random() * 5 + 1);
        $('#numero_1_multiplicacao').val(aleatorio1);
        $('#numero_2_multiplicacao').val(aleatorio2);
    }

    iniciar();

    $("#multiplicacao-tab").click(iniciar);

    $("#divisao-tab").click(function(){
        $('#numero_1_divisao').val('?');

        var aleatorio1 =  Math.floor(Math.random() * 5 + 1);
        $('#numero_2_divisao').val(aleatorio1);

        var aleatorio2 =  Math.floor(Math.random() * 5 + 1) * aleatorio1;
        $('#numero_3_divisao').val(aleatorio2);
    });

    $("#fatoracao-tab").click(function(){
        $('#numero_1_fatoracao').val('?');
        $('#numero_2_fatoracao').val('?');
        var aleatorio1 =  Math.floor(Math.random() * 5 + 1);
        var aleatorio2 =  Math.floor(Math.random() * 5 + 1) * aleatorio1;
        $('#numero_3_fatoracao').val(aleatorio2);
    });
});
