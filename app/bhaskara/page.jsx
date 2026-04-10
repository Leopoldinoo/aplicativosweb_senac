"use client";
import { useState } from "react";
import { bhaskara } from "../../actions/equacao/bhaskara";

export default function BhaskaraPage() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [x1, setX1] = useState("");
  const [x2, setX2] = useState("");
  const [erro, setErro] = useState("");

  const Calcular = async () => {
    const res = await bhaskara(a, b, c);
    if (res.x1 && res.x2) {
      setX1(res.x1);
      setX2(res.x2);
      setErro("");
    } else {
      setErro(res.error);
      setX1("");
      setX2("");
    }
  };

  const limpar = () => {
    setA("");
    setB("");
    setC("");
    setX1("");
    setX2("");
    setErro("");
  };

  return (
    <div className="min-h-screen bg-[#151515] flex items-center justify-center">
      <div className="bg-blue-500 p-6 rounded-lg w-80">
        <h1 className="text-white text-xl font-bold mb-3 text-center">
          Bhaskara
        </h1>

        <input
          type="number"
          placeholder="A"
          value={a}
          onChange={(e) => setA(e.target.value)}
          className="w-full p-2 mb-2 rounded text-black"
        />
        <input
          type="number"
          placeholder="B"
          value={b}
          onChange={(e) => setB(e.target.value)}
          className="w-full p-2 mb-2 rounded text-black"
        />
        <input
          type="number"
          placeholder="C"
          value={c}
          onChange={(e) => setC(e.target.value)}
          className="w-full p-2 mb-3 rounded text-black"
        />

        <div className="flex gap-2 mb-3">
          <button
            onClick={Calcular}
            className="flex-1 bg-green-600 text-white p-2 rounded"
          >
            Calcular
          </button>
          <button
            onClick={limpar}
            className="flex-1 bg-gray-600 text-white p-2 rounded"
          >
            Limpar
          </button>
        </div>

        {x1 && x2 && (
          <div className="mb-2">
            <div className="bg-white p-2 rounded mb-2 text-center text-black font-bold">
              X1 = {x1}
            </div>
            <div className="bg-white p-2 rounded text-center text-black font-bold">
              X2 = {x2}
            </div>
          </div>
        )}

        {erro && (
          <div className="bg-red-200 p-2 rounded text-center">{erro}</div>
        )}
      </div>
    </div>
  );
}
