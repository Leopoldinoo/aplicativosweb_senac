"use server";
export async function soma(a, b) {
  console.log("Somando A e B...");
  if (a != "" && b != "") {
    const soma = parseFloat(a) + parseFloat(b);
    console.log("Resultado " + soma.toString());
    return { soma: soma.toString() };
  }
  return { error: "Erro ao Somar" };
}

async function executarTeste() {
  const resultado = await soma(10, 30);
  console.log(resultado);
}
executarTeste();