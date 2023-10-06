function resultadosPartidas (vitorias, derrotas){
    return vitorias - derrotas;
}

let saldoVitorias = resultadosPartidas (50, 7)
let elo = ["ferro", "bronze", "prata", "ouro", "diamante", "lendário", "imortal"]
let nivel = 0

switch(true) {
    case saldoVitorias < 10: 
    nivel = 0
    break;
    case saldoVitorias <= 20:
    nivel = 1
    break;
    case saldoVitorias <= 50:
    nivel = 2
    break;
    case saldoVitorias <= 80:
    nivel = 3
    break;
    case saldoVitorias <= 90:
    nivel = 4 
    break;
    case saldoVitorias <= 100:
    nivel = 5
    break;
    default:
    nivel = 6
}
console.log ("O heroi tem um saldo de vitórias de " + saldoVitorias + " e está no seguinte elo: " + elo[nivel])