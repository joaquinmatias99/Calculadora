function agregar(valor)
{
    document.getElementById('pantalla').value += valor;
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
