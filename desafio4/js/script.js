let cont = 1;
function ShowSelected()
{
    var cod = document.getElementById("select-recursos").value;
    var inputCantidad = document.getElementById("input-cantidad");
    var labelMedida = document.getElementById("label-medida");
    var buttonIngresar = document.getElementById("button-ingresar");
    inputCantidad.value = "";
    if(cod!=0){
        inputCantidad.style.display = 'inline';
        labelMedida.style.display = 'inline';
        buttonIngresar.style.display = 'block';
        if(cod==1){
            labelMedida.innerText = "L";
        }else if(cod==2){
            labelMedida.innerText = "g";
        }else if(cod==3){
            labelMedida.innerText = "Tubo";
        }else if(cod==4){
            labelMedida.innerText = "Unidad";
        }else if(cod==5){
            labelMedida.innerText = "Unidad";
        }
    }else{
        inputCantidad.style.display = 'none';
        labelMedida.style.display = 'none';
        buttonIngresar.style.display = 'none';
    }
}

function ShowSelected2()
{
    var cod = document.getElementById("select-recursos2").value;
    var inputCantidad2 = document.getElementById("input-cantidad2");
    var labelMedida2 = document.getElementById("label-medida2");
    var buttonIngresar2 = document.getElementById("button-ingresar2");
    inputCantidad2.value = "";
    if(cod!=0){
        inputCantidad2.style.display = 'inline';
        labelMedida2.style.display = 'inline';
        buttonIngresar2.style.display = 'block';
        if(cod==1){
            labelMedida2.innerText = "L";
        }else if(cod==2){
            labelMedida2.innerText = "g";
        }else if(cod==3){
            labelMedida2.innerText = "Tubo";
        }else if(cod==4){
            labelMedida2.innerText = "Unidad";
        }else if(cod==5){
            labelMedida2.innerText = "Unidad";
        }
    }else{
        inputCantidad2.value = "";
        labelMedida2.value = "Medida";
    }
}

function Input(){
    var tableRecursos = document.getElementById("table");
    var cod = document.getElementById("select-recursos").value;
    var select = document.getElementById("select-recursos");
    var selectText = select.options[select.selectedIndex].text;
    var inputCantidad = document.getElementById("input-cantidad");
    var labelMedida = document.getElementById("label-medida");
    var buttonIngresar = document.getElementById("button-ingresar");
    var divSubcontenedor1 = document.getElementById("div-subcontenedor1");
    
    var divSubcontenedor2 = document.getElementById("div-subcontenedor2");
    var select2 = document.getElementById("select-recursos2");
    var inputCantidad2 = document.getElementById("input-cantidad2");
    var labelMedida2 = document.getElementById("label-medida2");
    var buttonIngresar2 = document.getElementById("button-ingresar2");

    if(cod!=0){
        if(inputCantidad.value != "" && inputCantidad.value > 0){

            divSubcontenedor1.style.display = "none";
            divSubcontenedor2.style.display = "block";
        
            select2.style.display = "inline-block";
            inputCantidad2.style.display = "inline-block";
            labelMedida2.style.display = "inline-block";
            buttonIngresar2.style.display = "inline-block";

            tableRecursos.style.display = 'table';

            var now = formatDate(new Date());

            const recursos = [{
                    recurso: selectText,
                    cantidad: inputCantidad.value,
                    unidad: labelMedida.textContent,
                    fecha: now
                }
            ];

            const tableBody = document.querySelector("#table-body");
            recursos.forEach(recurso => {
                const tr = document.createElement("tr");

                let tdRecurso = document.createElement("td");
                tdRecurso.textContent = recurso.recurso;
                tr.appendChild(tdRecurso);

                let tdCantidad = document.createElement("td");
                tdCantidad.textContent = recurso.cantidad + " " + recurso.unidad;
                tr.appendChild(tdCantidad);

                let tdFechaIngreso = document.createElement("td");
                tdFechaIngreso.textContent = recurso.fecha;
                tr.appendChild(tdFechaIngreso);

                let tdEliminar = document.createElement("td");
                tr.appendChild(tdEliminar);

                tableBody.appendChild(tr);
                let table = document.getElementById('table');
                let rows = table.rows;

                AddButton(table, rows, cont);
                cont++;
            });
        }else{
            alert("Debe ingresar una cantidad válida.");
        }
    }else{
        alert("Debe seleccionar un recurso.");
    }
}

function Input2(){
    var tableRecursos = document.getElementById("table");
    var cod = document.getElementById("select-recursos2").value;
    var select2 = document.getElementById("select-recursos2");
    var selectText = select2.options[select2.selectedIndex].text;
    var inputCantidad2 = document.getElementById("input-cantidad2");
    var labelMedida2 = document.getElementById("label-medida2");
    var buttonIngresar2 = document.getElementById("button-ingresar2");
    var divSubcontenedor1 = document.getElementById("div-subcontenedor1");
    var divSubcontenedor2 = document.getElementById("div-subcontenedor2");

    divSubcontenedor1.style.display = "none";
    divSubcontenedor2.style.display = "block";
    if(cod!=0){
        if(inputCantidad2.value != "" && inputCantidad2.value > 0){
            tableRecursos.style.display = 'table';

            var now = formatDate(new Date());

            const recursos = [{
                    recurso: selectText,
                    cantidad: inputCantidad2.value,
                    unidad: labelMedida2.textContent,
                    fecha: now
                }
            ];

            const tableBody = document.querySelector("#table-body");
            recursos.forEach(recurso => {
                const tr = document.createElement("tr");

                let tdRecurso = document.createElement("td");
                tdRecurso.textContent = recurso.recurso;
                tr.appendChild(tdRecurso);

                let tdCantidad = document.createElement("td");
                tdCantidad.textContent = recurso.cantidad + " " + recurso.unidad;
                tr.appendChild(tdCantidad);

                let tdFechaIngreso = document.createElement("td");
                tdFechaIngreso.textContent = recurso.fecha;
                tr.appendChild(tdFechaIngreso);

                let tdEliminar = document.createElement("td");
                tr.appendChild(tdEliminar);

                tableBody.appendChild(tr);
                let table = document.getElementById('table');
                let rows = table.rows;

                AddButton(table, rows, cont);
                cont++;

                inputCantidad2.value = "";
            });
        }else{
            alert("Debe ingresar una cantidad válida.");
        }
    }else{
        alert("Debe seleccionar un recurso.");
    }
}

function formatDate(date = new Date()) {
    const year = date.toLocaleString('default', {year: 'numeric'});
    const month = date.toLocaleString('default', {month: '2-digit'});
    const day = date.toLocaleString('default', {day: '2-digit'});

    return [year, month, day].join('-');
}

function AddButton(table, rows, cont){
    let cols = rows[cont].cells;
    let lastCol = rows[cont]['cells'][cols.length - 1];

    let button = document.createElement('button');
    button.id = "btn-eliminar"
    button.setAttribute('onclick', 'Delete(this)');

    lastCol.appendChild(button);
    this.cont++;
}

function Delete(Id) {
    let row = Id.parentNode.parentNode;
    let table = document.getElementById("table"); 
    table.deleteRow(row.rowIndex);
    cont--;
}