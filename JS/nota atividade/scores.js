/*Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F
*/



let score = 10

function getScore(score) {
    let scoreA = score >= 90 && score <=100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

    let scoreTotal;

    if (scoreA) {
        scoreTotal = "A"
    }else if (scoreB) {
        scoreTotal = "B"
    }else if (scoreC) {
        scoreTotal = "C"
    }else if (scoreD) {
        scoreTotal = "D"
    }else if (scoreF) {
        scoreTotal = "F"
    } else {
        scoreTotal = "Nota Inválida"
    }

    return scoreTotal
}

console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(0))
console.log(getScore(1))
console.log(getScore(45))
console.log(getScore(60))
console.log(getScore(61))
console.log(getScore(75))
console.log(getScore(85))
console.log(getScore(95))