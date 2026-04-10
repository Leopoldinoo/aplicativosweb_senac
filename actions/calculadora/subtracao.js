"use server";

export async function subtracao(a, b) {
  console.log("Subtraindo A e B...");
  if (a != "" && b != "") {
    const subtracao = parseFloat(a) - parseFloat(b);
    console.log("Resultado " + subtracao.toString());
    return { subtracao: subtracao.toString() };
  }
  return { error: "Erro ao Subtrair" };
}

async function executarTeste() {
  const resultado = await subtracao(20, 5);
  console.log(resultado);
}
executarTeste();
