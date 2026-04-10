"use server";

export async function CalcularFahrenheit(celsius) {
  console.log("Calculando Fahrenheit...");
  if (celsius != "") {
    const fahrenheit = parseFloat(celsius) * 1.8 + 32;
    console.log("Resultado " + fahrenheit.toString());
    return { fahrenheit: fahrenheit.toString() };
  }
  return { error: "Erro ao Calcular" };
}
// teste

async function executarTeste() {
  const resultado = await CalcularFahrenheit(20);
  console.log(resultado);
}

executarTeste();
