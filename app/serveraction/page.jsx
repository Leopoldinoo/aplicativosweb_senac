"use client";
import { useState } from "react";
import Link from "next/link";
import { servidor } from "/actions/servidor";
import Sidebar from "../components/Sidebar";
export default function Page() {
  let contador = 0;
  async function ChamaServidor() {
    try {
      await servidor();
      console.log("Chamou o Servidor");
    } catch {
      console.log("Erro ao tentar logar");
    } finally {
      console.log("Login Terminou");
    }
  }
  async function Cliente(e) {
    e.preventDefault();
    try {
      console.clear();
      console.log("\n\n");
      console.log("Console limpo e ação executada no FrontEnd");
      console.log("Estou no Cliente....:" + contador++);
      console.log("Só funciona no Front-End meu amigo....");
      console.log("\n\n");
    } catch {
      console.log("Erro ao tentar logar 2");
    } finally {
      console.log("Fim de execução da Action no Front End");
    }
  }
  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col h-80 w-100 rounded-lg border-4 border-green-400 bg-white items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-black flex items-center justify-center">
          Server Action
        </h1>
        <button
          onClick={ChamaServidor}
          type="button"
          className="bg-green-500 hover:bg-green-800 w-80 text-lg p-2 font-bold rounded"
        >
          Ações no Servidor (Back-END)
        </button>
        <button
          onClick={Cliente}
          type="button"
          className="bg-red-500 hover:bg-red-800 w-80 text-lg p-2 font-bold rounded"
        >
          Ações no Cliente (Front-END)
        </button>
        <Link
          href="/pageinicial"
          className="bg-gray-300 text-gray-800 border border-black w-80 text-xl p-2 rounded"
        >
          Dashboard
        </Link>
        </div>
      </div>
    </div>
  );
}
