// Obtener referencias a los elementos
const valor1Input = document.getElementById('valor1');
const valor2Input = document.getElementById('valor2');
const resultadoElement = document.getElementById('resultado');

document.getElementById('sumar').addEventListener('click', function() {
    // Convertir los valores de los inputs a números
    const valor1 = parseFloat(valor1Input.value) || 0;
    const valor2 = parseFloat(valor2Input.value) || 0;
    
    // Calcular la suma
    const suma = valor1 + valor2;
    
    // Mostrar el resultado
    resultadoElement.textContent = suma;
});

document.getElementById('restar').addEventListener('click', function() {
    // Convertir los valores de los inputs a números
    const valor1 = parseFloat(valor1Input.value) || 0;
    const valor2 = parseFloat(valor2Input.value) || 0;
    
    // Calcular la resta
    const resta = valor1 - valor2;
    
    // Si el resultado es negativo, mostrar 0
    resultadoElement.textContent = resta >= 0 ? resta : 0;
});
