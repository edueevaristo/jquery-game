var campo = $(".campo-digitacao");
var tempoRestante = $("#tempo-digitacao").text();
var tempoInicial = $("#tempo-digitacao").text();

$(document).ready(function () {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    reiniciaJogo();
    $("#botao-reiniciar").click(reiniciaJogo);
});


function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase").text(numPalavras);

}


function inicializaContadores() {
    campo.on("input", function () {

        var conteudo = campo.val();
        var qtdPalavras = conteudo.split(/\S+/).length - 1;

        $("#contador-palavras").text(qtdPalavras);

        var qtdCaracteres = conteudo.length;

        $("#contador-caracteres").text(qtdCaracteres);

    });
}


function inicializaCronometro() {
    campo.one("focus", function () {
        var cronometro = setInterval(function () {
            $("#botao-reiniciar").attr("disabled", true);
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);

            //Alterando um atributo com .attr
            if (tempoRestante < 1) {
                campo.attr("disabled", true);
                clearInterval(cronometro);
                $("#botao-reiniciar").attr("disabled", false);
            }
        }, 1000);

    });
}


$("#botao-reiniciar").click(reiniciaJogo);
function reiniciaJogo() {
    $("#botao-reiniciar").click(function () {
        campo.attr("disabled", false);
        campo.val("");
        $("#contador-palavras").text("0");
        $("#contador-caracteres").text("0");
        $("#tempo-digitacao").text(tempoInicial);
        inicializaCronometro();

    });
}



/* attr()

    Adiciona atributos para a nossa tag.


*/
/* Diferença de "on" para "one" 

    O "on" escuta o tempo todo, e toda vez que você executa a ação
    a lógica dentro dele será realizada. Já o "one" executa apenas
    uma única vez. 

*/

/* setInterval()
    
    Executa o que está dentro da função, com o tempo informado de forma decres
    cente, em milisegundos, ou seja, se passar 1000 será 1 segundo.

*/

/* clearInterval()
    
    Vai parar o cronometro que realizamos em setInterval.

*/

/* Expressão regular para remover os espaços e buscar novos espaços
    /\S+/

*/

/* Evento "focus" 

    Assim que eu entrar no campo, sendo com tab ou clicando acima, ele já
    detectará. Quando eu dou "foco" ao campo.

*/

/* Evento "input"

    Captura o dado sempre que escrevemos algo.

*/

/* Evento "click" e .val

    Sempre chamados o evento com variável.on("nomedoevento", function)


    Com o evento click, conseguimos pegar tudo o que foi digitado assim que clicarmos no input, ou
    ate mesmo, utilizar outras funcções. E o ".val" pegamos apenas o valor do
    que foi inserido.
    .val() usado somente para inputs, exemplo (Range, textarea)

    Exemplo:

    var campo = $(".campo-digitacao");
    campo.on("click", function () {
        console.log(campo.val());

})

*/


/* text()
    Acessa somente o conteúdo da frase, ou seja, a frase em si.
*/

/* .split() 
    Fazer a contagem de palavras através do "espaço" em que tem entre elas.
*/

/* .length
    Fazer a contagem do tamanho, ou seja, estamos contando quantas palavras
    há dentro de nosso array.
*/

/* Se for passado o .text diretamente e informar algo entre os ()
    Ele retornará exatamente através do elemento selecionado, exemplo:

    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(Olá);

    Retorno: Olá
*/
