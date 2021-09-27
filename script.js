$(document).ready(function(){
    $("button").click(function(){
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
  });
