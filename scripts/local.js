// ===== Clima (valores estáticos) =====
const temperatura = 9;  // °C
const vento = 12;       // km/h

// Fórmula métrica (°C e km/h), em uma única linha de retorno
function calcularSensacaoTermica(temp, velocidade) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(velocidade, 0.16) + 0.3965 * temp * Math.pow(velocidade, 0.16);
}

// Só calcula se: temperatura <= 10 °C e vento > 4,8 km/h
let sensacao = "N/A";
if (temperatura <= 10 && vento > 4.8) {
  sensacao = `${calcularSensacaoTermica(temperatura, vento).toFixed(1)} °C`;
}
document.getElementById("sensacao").textContent = sensacao;

// ===== Rodapé =====
document.getElementById("ano").textContent = new Date().getFullYear();
document.getElementById("ultimaModificacao").textContent = document.lastModified;