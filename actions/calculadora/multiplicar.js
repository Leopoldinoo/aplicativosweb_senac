"use server";
export async function multiplicar(a, b) {
  console.log("Multiplicando A e B...");
  if (a != "" && b != "") {
    const multiplicar = parseFloat(a) * parseFloat(b);
    console.log("Resultado " + multiplicar.toString());
    return { multiplicar: multiplicar.toString() };
  }
  return { error: "Erro ao Multiplicar" };
}

async function executarTeste() {
  const resultado = await multiplicar(10, 10);
  console.log(resultado);
}
executarTeste();
