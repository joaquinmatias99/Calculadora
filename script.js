function agregar(valor) {
    let pantalla = document.getElementById('pantalla');
    let ultimoCaracter = pantalla.value.slice(-1);

    if(!ultimoCaracterSigno(valor, ultimoCaracter))
        {
            pantalla.value += valor;
        }
}

function limpiarPantalla()
{
    document.getElementById('pantalla').value='';
}
function calcular()
{
    let valorPantalla = document.getElementById('pantalla').value;
    let resultado= eval(valorPantalla);
    document.getElementById('pantalla').value=resultado;
}
function borrar()
{
    let resultado = document.getElementById('pantalla').value;
    resultado = resultado.slice(0,-1);
    document.getElementById('pantalla').value=resultado;
}
function ultimoCaracterSigno(ultimoCaracter, valor)
{    
    return (ultimoCaracter.match(/[*/+-]/) && valor.match(/[*/+-]/));           
}