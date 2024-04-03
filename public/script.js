function generarInputs() {
    const filasMatriz1 = parseInt(document.getElementById('filasMatriz1').value);
    const columnasMatriz1 = parseInt(document.getElementById('columnasMatriz1').value);
    const filasMatriz2 = parseInt(document.getElementById('filasMatriz2').value);
    const columnasMatriz2 = parseInt(document.getElementById('columnasMatriz2').value);

    const inputsMatrices = document.getElementById('inputsMatrices');
    inputsMatrices.innerHTML = '';

    for (let i = 0; i < filasMatriz1; i++) {
        for (let j = 0; j < columnasMatriz1; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.placeholder = `Matriz 1 - Fila ${i + 1}, Columna ${j + 1}`;
            inputsMatrices.appendChild(input);
        }
        inputsMatrices.appendChild(document.createElement('br'));
    }

    for (let i = 0; i < filasMatriz2; i++) {
        for (let j = 0; j < columnasMatriz2; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.placeholder = `Matriz 2 - Fila ${i + 1}, Columna ${j + 1}`;
            inputsMatrices.appendChild(input);
        }
        inputsMatrices.appendChild(document.createElement('br'));
    }
}

function multiplicarMatrices() {
    const filasMatriz1 = parseInt(document.getElementById('filasMatriz1').value);
    const columnasMatriz1 = parseInt(document.getElementById('columnasMatriz1').value);
    const filasMatriz2 = parseInt(document.getElementById('filasMatriz2').value);
    const columnasMatriz2 = parseInt(document.getElementById('columnasMatriz2').value);

    const matriz1 = [];
    const matriz2 = [];

    const inputsMatrices = document.getElementById('inputsMatrices').getElementsByTagName('input');

    for (let i = 0; i < filasMatriz1; i++) {
        matriz1[i] = [];
        for (let j = 0; j < columnasMatriz1; j++) {
            matriz1[i][j] = parseFloat(inputsMatrices[i * columnasMatriz1 + j].value) || 0;
        }
    }

    for (let i = 0; i < filasMatriz2; i++) {
        matriz2[i] = [];
        for (let j = 0; j < columnasMatriz2; j++) {
            matriz2[i][j] = parseFloat(inputsMatrices[filasMatriz1 * columnasMatriz1 + i * columnasMatriz2 + j].value) || 0;
        }
    }

    if (columnasMatriz1 !== filasMatriz2) {
        alert('No se pueden multiplicar estas matrices. El número de columnas de la Matriz 1 debe ser igual al número de filas de la Matriz 2.');
        return;
    }

    const resultadoMatriz = multiplicar(matriz1, matriz2);
    mostrarMatriz(resultadoMatriz);
}

function multiplicar(matriz1, matriz2) {
    const filasMatriz1 = matriz1.length;
    const columnasMatriz1 = matriz1[0].length;
    const columnasMatriz2 = matriz2[0].length;
    const resultado = new Array(filasMatriz1);

    for (let i = 0; i < filasMatriz1; i++) {
        resultado[i] = new Array(columnasMatriz2);
        for (let j = 0; j < columnasMatriz2; j++) {
            resultado[i][j] = 0;
            for (let k = 0; k < columnasMatriz1; k++) {
                resultado[i][j] += matriz1[i][k] * matriz2[k][j];
            }
        }
    }

    return resultado;
}

function mostrarMatriz(matriz) {
    const resultadoMatrizDiv = document.getElementById('resultadoMatriz');
    resultadoMatrizDiv.innerHTML = '';

    const resultadoTable = document.createElement('table');
    for (let i = 0; i < matriz.length; i++) {
        const row = resultadoTable.insertRow();
        for (let j = 0; j < matriz[i].length; j++) {
            const cell = row.insertCell();
            cell.textContent = matriz[i][j];
        }
    }

    resultadoMatrizDiv.appendChild(resultadoTable);
}
