"use server";
export async function dividir(a, b) {
  console.log("Dividindo A e B...");
  if (a != "" && b != "") {
    const dividir = parseFloat(a) / parseFloat(b);
    console.log("Resultado " + dividir.toString());
    return { dividir: dividir.toString() };
  }
  return { error: "Erro ao Dividir" };
}

async function executarTeste() {
  const resultado = await dividir(10, 5);
  console.log(resultado);
}
executarTeste();
