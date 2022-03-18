
function insert(num){
    let numero = document.getElementById('resultado').value
    document.getElementById('resultado').value = numero + num // Insere o valor clicado no input
}
function limpar(){
    document.getElementById('resultado').value = ''
}
function back(){
    let voltar = document.getElementById('resultado').value
    document.getElementById('resultado').value = voltar.substring(0, voltar.length -1) //Apaga um valor por vez
}
function calcular(){
    let calcular = document.getElementById('resultado').value
    if(calcular){
        document.getElementById('resultado').value = eval(calcular) //'eval' identifica automaticamente o caractere e faz o calculo automatico
    }
}