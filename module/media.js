/***********************************************************************
 * Objetivo: Arquivo responsável por calcular e validar médias escolares
 * Data: 05/08/2025
 * Autor: Leonardo Scotti
 * Versão: 1.0
 **********************************************************************/

//Função para calcular a média escolar
function calcularMedia(valor1, valor2, valor3, valor4) {

    let nota1 = Number(valor1)
    let nota2 = Number(valor2)
    let nota3 = Number(valor3)
    let nota4 = Number(valor4)

    let media = (nota1 + nota2 + nota3 + nota4) / 4
    
    return Number(media).toFixed(1)
}