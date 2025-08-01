/*********************************************************************
 * Objetivo: Criar um sistema que resliza cálculos de médias escolares
 *            (Variáveis, condicional, funções)
 * Autor: Leonardo Scotti
 * Data: 01/08/2025
 * Versão: 1.0
 ********************************************************************/

/**
 * Formas de criar uma variável:
 * var   -> Permite criar um espaço em memória (Variável), esse método é considerado 
 *        antigo. 
 *        OBS: caso precise utilizar, aconselha-se usar fora de bloco de 
 *        programação.
 * 
 * let   -> Permite criar um espaço em memória (variável) apenas dentro de um bloco de
 *        programação (IF. LOOP. Function e etc...).
 *        Toda variável criada como LET existe apenas naquele bloco de programação.
 *  
 * const -> Permite criar um espaço em memória (Constante) para guardar conteúdos 
 *          que não sofrerão mudanças durante o programa.
 *          OBS: sempre que possível criar a CONST com letras MAIÚSCULAS.
 * 
 * Formas de conversão de tipos de dados:
 * String()      -> Converte uma variável em String;
 * Number()      -> Converte uma String para número inteiro ou float;
 * parseInt()    -> Converte uma String somente para inteiro;
 * parseFloat()  -> Converte uma String para float;
 * Boolean()     -> Converte uma variável para booleano (true/false);
 * Object()      -> Converte uma variável para objeto (Array, JSON, Classe).
 * 
 * toUpperCase() -> Formata o conteúdo de uma String para MAIÚSCULO.
 * toLowerCase() -> Formata o conteúdo de uma String para minúsculo.
 * toFixed(n)     -> Permite limitar a quatidade de casas decimais em uma veriável numérica
 * 
 * Operadores de Comparação
 * ==  -> Validação de igualdade de conteúdos;
 * !=  -> Validção de diferença de conteúdos;
 * <   -> validação de valor menor;
 * <=  -> Validação de valor menor ou igual;
 * >   -> Validação de valor maior;
 * >=  -> Validação de valor maior ou igual;
 * === -> Validação de igualdade de conteúdo de igualdade e de tipo de dados;
 * !== -> Validação de diferença de conteúdos e igualdade de tipos de dados.
 *        OBS: Verificar em cada linguagem como isso é tratado;
 * !=! -> Validação de diferença de coteúdos e diferença de tipos de dados.
 *        OBS: Verificar em cada linguagem como isso é tratado.
 * 
 * Operadores Lógicos:
 * E AND &&
 * OU OR ||
 * NÃO NOT !
 */



//Import da biblioteca do readline para manipular entrada de dados no terminal.
var readline = require('readline');

//Criando um objeto de entrada e daída de dados no terminal.
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de dados do nome do aluno
entradaDeDados.question('Digite o nome do aluno: ', function(nome) {
    //Recebe o argumento da função e guarda em variável local, em MAIÚSCULO.
    let nomeAluno = String(nome).toUpperCase()

    //Entrada de dados da nota1
    entradaDeDados.question('Digite a nota1: ', function(valor1) {
        let nota1 = valor1

        //Entrada de dados da nota2
        entradaDeDados.question('Digite a nota2: ', function(valor2) {
            let nota2 = valor2

            //Entrada de dados da nota3
            entradaDeDados.question('Digite a nota3: ', function(valor3) {
                let nota3 = valor3

                //Entrada de dados da nota4
                entradaDeDados.question('Digite a nota4: ', function(valor4) {
                    let nota4 = valor4

                    if (nomeAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
                        console.log('ERRO: É obrigatório o preenchimento de todas as informações!')
                    } else if (!isNaN(nomeAluno)) {
                        console.log('ERRO: Dados inválidos. Você deve digitar apenas com um número!')
                    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
                        console.log('ERRO: Dados inválidos. Você deve digitar apenas caracteres numéricos nas notas!')

                    } else if (Number(nota1) < 0 || Number(nota1) > 10 || Number(nota2) < 0 || Number(nota2) > 10 || Number(nota3) < 0 || Number(nota3) > 10 || Number(nota4) < 0 || Number(nota4) > 10) {
                        console.log('ERRO: Dados inválidos. Você deve entrar com valores entre 0 e 10!')
                    } else {
                        let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4

                        let statusAluno
                        if (media >= 7 && media <= 10) {
                            statusAluno = 'APROVADO'
                        } else if (media < 7 && media >= 5) {
                            statusAluno = 'EXAME'
                        } else if (media < 5 && media >= 0) {
                            statusAluno = 'REPROVADO'
                        } else {

                        }

                        console.log(`O aluno(a) ${nomeAluno} teve a média ${media.toFixed(1)} e está ${statusAluno}`)
                    }
                })
            })
        })
    })
})