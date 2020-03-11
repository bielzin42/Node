//minha biblioteca v1

const titulo = "Generation Node JS - Bielzbub"


function maiuscula (nome)
{   
    return nome.toUpperCase();
}

function minuscula (nome)
{
    return nome.toLowerCase();
}

function numeroDeLetras (nome)
{    
    var total = nome.length
    return total;
}

//oara usar funções, devemos exportar.

module.exports = 
{
    maiuscula, minuscula, numeroDeLetras, titulo
}