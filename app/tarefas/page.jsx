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
  const [tarefas, setTarefas] = useState([]);

  const [tarefa, setTarefa] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [status, setStatus] = useState("Pendente");

  const [editIndex, setEditIndex] = useState(null);
  function limparCampos() {
    setTarefa("");
    setData("");
    setHorario("");
    setStatus("Pendente");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const novaTarefa = { tarefa, data, horario, status };

    const novasTarefas = tarefas.slice();

    if (editIndex !== null) {
      novasTarefas[editIndex] = novaTarefa;
      setEditIndex(null);
    } else {
      novasTarefas.push(novaTarefa);
    }
    setTarefas(novasTarefas);
    limparCampos();
  }

  // Função Editar
  function handleEdit(index) {
    const tarefa = tarefas[index];

    setTarefa(tarefa.tarefa);
    setData(tarefa.data);
    setHorario(tarefa.horario);
    setStatus(tarefa.status);
    setEditIndex(index);
  }

  // Função Deletar
  function handleDelete(index) {
    const novasTarefas = [];
    //recria a lista sem oque deve ser excluído
    for (let i = 0; i < tarefas.length; i++) {
      if (i !== index) novasTarefas.push(tarefas[i]);
    }
    setTarefas(novasTarefas);
  }

  //TELA
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
                <h1 className="text-gray-900 font-bold text-2xl">
                  Cadastro de Tarefas
                </h1>

                <p className="text-gray-500 text-sm mt-1">
                  gerencie suas tarefas e organize seu dia a dia de forma
                  eficiente
                </p>
              </div>
            </div>
          </header>

          <section className="border border-gray-200 rounded-2xl p-6 shadow-sm bg-gray-50/50">
            <h2 className="text-gray-800 font-bold mb-5 flex items-center gap-2">
              <Plus size={20} className="text-blue-600" />
              Nova tarefa
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">
                  Tarefa
                </label>
                <input
                  type="text"
                  value={tarefa}
                  onChange={(e) => setTarefa(e.target.value)}
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
                  value={data}
                  onChange={(e) => setData(e.target.value)}
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
                  value={horario}
                  onChange={(e) => setHorario(e.target.value)}
                  className="border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600 bg-white"
                />
              </div>

              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">
                  Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600 bg-white"
                >
                  <option>Pendente</option>

                  <option>Em andamento</option>

                  <option>Concluído</option>
                </select>
              </div>
              <button className="mt-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl col-span-2 text-center gap-2 transition-all shadow-lg hover:shadow-xl">
                {editIndex !== null ? "Atualizar tarefa" : "Adicionar tarefa"}
              </button>
            </form>
          </section>

          <section className="border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-gray-800 font-bold text-lg">
                Tarefas cadastradas
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-gray-500 text-sm border-b border-gray-200">
                    <th className="pb-3 font-semibold">Tarefa</th>
                    <th className="pb-3 font-semibold">Data</th>
                    <th className="pb-3 font-semibold">Horário</th>
                    <th className="pb-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {tarefas.map((tarefa, index) => (
                    <tr key={index} className="text-black">
                      <td className="border p-2">{tarefa.tarefa}</td>
                      <td className="border p-2">{tarefa.data}</td>
                      <td className="border p-2">{tarefa.horario}</td>
                      <td className="border p-2">{tarefa.status}</td>
                      <td className="border p-2 text-center">
                        <button
                          onClick={() => handleEdit(index)}
                          className="text-red-500 hover:text-red-700 mr-2"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          Deletar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
