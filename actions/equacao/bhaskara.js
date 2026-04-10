"use server";

export async function SegundoGrau(A, B, C) {
  console.log("Calculo de X1 e X2....");

  if (A != "" && B != "" && C != "") {
    // Calculo de Delta

    const delta =
      parseFloat(B) * parseFloat(B) - 4 * parseFloat(A) * parseFloat(C);

    console.log("Valor de Delta: " + delta.toString());

    // Calculo do X1

    const X1 = (-parseFloat(B) - Math.sqrt(delta)) / (2 * parseFloat(A));

    console.log("Valor X1....:" + X1.toString());

    // Calculo do X2

    const X2 = (-parseFloat(B) + Math.sqrt(delta)) / (2 * parseFloat(A));

    console.log("Valor X2....:" + X2.toString());

    return { X1: X1.toString(), X2: X2.toString() };
  }

  return { error: "Erro ao Somar" };
}

// teste

async function executarTeste() {
  const resultado = await SegundoGrau(1, 5, 6);

  console.log(resultado);
}

// chama para testar

executarTeste();
