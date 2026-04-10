"use server";

export async function bhaskara(a, b, c) {
  console.log("Calculando Bhaskara...");
  if (a != "" && b != "" && c != "") {
    const delta =
      parseFloat(b) * parseFloat(b) - 4 * parseFloat(a) * parseFloat(c);
    if (delta < 0) {
      return { error: "Delta é negativo, não existem raízes reais." };
    }
    const raizDelta = delta ** 0.5;
    const x1 = (-parseFloat(b) + raizDelta) / (2 * parseFloat(a));
    const x2 = (-parseFloat(b) - raizDelta) / (2 * parseFloat(a));
    console.log("Resultado X1: " + x1.toString() + ", X2: " + x2.toString());
    return { x1: x1.toString(), x2: x2.toString() };
  }
  return { error: "Erro ao calcular Bhaskara" };
}
