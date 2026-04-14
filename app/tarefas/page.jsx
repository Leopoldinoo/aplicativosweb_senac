"use client";
import { useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  CheckCircle2,
  Circle,
  Calendar,
  Clock,
} from "lucide-react";
import Sidebar from "../components/Sidebar";

export default function TarefasPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex p-0">
      <div className="fixed left-0 top-0 h-full z-10">
        <Sidebar />
      </div>

      <main className="flex-1 flex items-center justify-center p-8 ml-64">
        <div className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl p-10 flex flex-col gap-8 relative overflow-hidden">
          <header className="flex items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-2xl">
                <CheckCircle2 className="text-blue-600" size={28} />
              </div>
              <div>
                <h1 className="text-gray-900 font-bold text-3xl">
                  Minhas Tarefas
                </h1>
                <p className="text-gray-500 text-sm mt-1">
                  Organize e gerencie suas atividades diárias
                </p>
              </div>
            </div>
            <div className="bg-blue-50 px-4 py-2 rounded-xl">
              <span className="text-blue-600 font-semibold text-sm">
                2 tarefas
              </span>
            </div>
          </header>

          <section className="border border-gray-200 rounded-2xl p-6 shadow-sm bg-gray-50/50">
            <h2 className="text-gray-800 font-bold mb-5 flex items-center gap-2">
              <Plus size={20} className="text-blue-600" />
              Nova tarefa
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">
                  Tarefa
                </label>
                <input
                  type="text"
                  placeholder="Descreva a tarefa..."
                  className="border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-600 bg-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Calendar size={16} />
                  Data
                </label>
                <input
                  type="date"
                  className="border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600 bg-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Clock size={16} />
                  Horário
                </label>
                <input
                  type="time"
                  className="border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600 bg-white"
                />
              </div>

              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">
                  Status
                </label>
                <select className="border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600 bg-white">
                  <option>Pendente</option>
                  <option>Em andamento</option>
                  <option>Concluído</option>
                </select>
              </div>
            </div>

            <button className="mt-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl flex items-center gap-2 transition-all shadow-lg hover:shadow-xl">
              <Plus size={20} /> Adicionar Tarefa
            </button>
          </section>

          <section className="border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-gray-800 font-bold text-lg">
                Tarefas cadastradas
              </h2>
              <div className="flex gap-2">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                  1 em andamento
                </span>
                <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-xs font-semibold">
                  1 pendente
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-gray-500 text-sm border-b border-gray-200">
                    <th className="pb-3 font-semibold">Tarefa</th>
                    <th className="pb-3 font-semibold">Data</th>
                    <th className="pb-3 font-semibold">Horário</th>
                    <th className="pb-3 font-semibold">Status</th>
                    <th className="pb-3 font-semibold text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="py-4 font-medium">
                      Estudar para a Competições Senac 20...
                    </td>
                    <td className="py-4 text-gray-500">16/04/2026</td>
                    <td className="py-4 text-gray-500">13:00</td>
                    <td className="py-4">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-fit">
                        <Circle size={12} fill="currentColor" />
                        Em andamento
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Pencil size={18} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="py-4 font-medium">Lavar o Zeus</td>
                    <td className="py-4 text-gray-500">15/04/2026</td>
                    <td className="py-4 text-gray-500">15:07</td>
                    <td className="py-4">
                      <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-fit">
                        <Circle size={12} fill="currentColor" />
                        Pendente
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Pencil size={18} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
