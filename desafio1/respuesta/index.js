const fs = require('fs');

fs.readFile('desafio1/last_year.json', function(err, data){
    if(err) {
        throw err;
    }

    //capturar json de los registros
    var obj = JSON.parse(data);
    
    // definimos los parámetros de la búsqueda / quitar enero y diciembre
    var inicial = 30;
    var final = 333;
    var arrAnio = [];

    //creo un arreglo de los 365 dias del año (0 - 364)
    for(x=0; x<=364; x++){
        arrAnio.push(0);
    }

    // esta es la función que utilizaremos para filtrar quitando enero y quitando diciembre
    function filtrarArreglo(elemento, indice, arreglo)
    {
        return elemento[0] >= inicial && elemento[0] <= final && elemento[1] >= inicial && elemento[1] <= final;
    }

    //filtramos el arreglo
    var filtrado = obj.filter(filtrarArreglo);

    //recorrer filtrado y por cada día ir incrementando el valor en su respectiva posición del arreglo del año
    for(x=0; x<filtrado.length; x++){
        for(y=filtrado[x][0]; y<=filtrado[x][1]; y++){
            arrAnio[y]++;
        }
    }

    //funcion para filtrar los 0 correspondientes de enero y diciembre del arreglo del año
    function filtrarCeros(elemento, indice, arreglo)
    {
        return elemento > 0 ;
    }
    
    //filtramos el arreglo
    var finalArr = arrAnio.filter(filtrarCeros);

    //obtener el max del arreglo final
    var maxArray = Math.max(...finalArr);

    //obtener el min del arreglo final
    var minArray = Math.min(...finalArr);

    var diaMenosAvistamientos = arrAnio.indexOf(minArray);
    var diaMasAvistamientos = arrAnio.indexOf(maxArray);

    console.log("El día que se avistaron menos titanes fue el día "+diaMenosAvistamientos+" del año.");
});