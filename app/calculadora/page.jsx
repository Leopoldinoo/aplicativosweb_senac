"use client";
import { useState } from "react";
import { soma } from "../../actions/calculadora/soma";
import { subtracao } from "../../actions/calculadora/subtracao";
import { multiplicar } from "../../actions/calculadora/multiplicar";
import { dividir } from "../../actions/calculadora/dividir";
import Sidebar from "../components/Sidebar";

export default function Calculadora() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularSoma = async () => {
    const r = await soma(a, b);
    setResultado(r.soma || r.error);
  };

  const calcularSubtracao = async () => {
    const r = await subtracao(a, b);
    setResultado(r.subtracao || r.error);
  };

  const calcularMultiplicacao = async () => {
    const r = await multiplicar(a, b);
    setResultado(r.multiplicar || r.error);
  };

  const calcularDivisao = async () => {
    const r = await dividir(a, b);
    setResultado(r.dividir || r.error);
  };

  const limpar = () => {
    setA("");
    setB("");
    setResultado("");
  };

  return (
    <div className="flex min-h-screen bg-[#151515]">
      <Sidebar />
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-blue-500 p-8 rounded-lg w-80">
        <h1 className="text-white text-2xl font-bold mb-4 text-center">
          Calculadora
        </h1>

        <input
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          placeholder="Valor A"
          className="w-full p-2 mb-3 rounded text-black"
        />

        <input
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          placeholder="Valor B"
          className="w-full p-2 mb-4 rounded text-black"
        />

        <div className="grid grid-cols-2 gap-2 mb-4">
          <button
            onClick={calcularSoma}
            className="bg-green-600 text-white p-2 rounded"
          >
            +
          </button>
          <button
            onClick={calcularSubtracao}
            className="bg-yellow-600 text-white p-2 rounded"
          >
            -
          </button>
          <button
            onClick={calcularMultiplicacao}
            className="bg-purple-600 text-white p-2 rounded"
          >
            ×
          </button>
          <button
            onClick={calcularDivisao}
            className="bg-red-600 text-white p-2 rounded"
          >
            ÷
          </button>
        </div>

        <button
          onClick={limpar}
          className="w-full bg-gray-600 text-white p-2 rounded mb-3"
        >
          Limpar
        </button>

        {resultado && (
          <div className="bg-white p-3 rounded text-black text-center font-bold">
            {resultado}
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
