"use client";
import { useState } from "react";
import { CalcularFahrenheit } from "../../actions/converterCelsius/converterCelsius";
export default function CelsiusPage() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  async function calcular() {
    const res = await CalcularFahrenheit(celsius);
    setFahrenheit(res.fahrenheit);
  }
  return (
    <div className="min-h-screen min-w-screen bg-[#151515] flex justify-center items-center">
      <div className="flex flex-col items-center justify-center h-100 bg-red-500 w-100 rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center text-white mb-8">
          Conversor de Celsius para Fahrenheit
        </h1>
        <input
          type="number"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
          placeholder="Digite a temperatura em Celsius"
          className="px-4 py-2 rounded-md text-black mb-4 bg-white"
        />
        <button
          onClick={calcular}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Converter
        </button>
        {fahrenheit && (
          <div className="bg-white px-6 py-2 mt-5 rounded-md text-black font-bold text-xl w-50 h-10 flex items-center justify-center text-center">
            {fahrenheit} °F
          </div>
        )}
      </div>
    </div>
  );
}
