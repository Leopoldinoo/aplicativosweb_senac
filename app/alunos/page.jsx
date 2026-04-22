"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function CadastroAlunosPage() {
  const [alunos, setAlunos] = useState([]);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [curso, setCurso] = useState("");

  const [editIndex, setEditIndex] = useState(null);

  function limparCampos() {
    setNome("");
    setEmail("");
    setCelular("");
    setCurso("");
  }
  // Função Cadastrar/Atualizar
  function handleSubmit(e) {
    e.preventDefault();
    // Monta os dados do aluno com os estados individuais
    const novoAluno = { nome, email, celular, curso };

    //slice() faz uma cópia do array (nunca mexa direto no estado!);
    const novosAlunos = alunos.slice();

    if (editIndex !== null) {
      novosAlunos[editIndex] = novoAluno;
      setEditIndex(null);
    } else {
      novosAlunos.push(novoAluno);
    }
    setAlunos(novosAlunos);
    limparCampos();
  }

  // Função Editar
  function handleEdit(index) {
    const aluno = alunos[index];

    setNome(aluno.nome);
    setEmail(aluno.email);
    setCelular(aluno.celular);
    setCurso(aluno.curso);
    setEditIndex(index);
  }

  // Função Deletar
  function handleDelete(index) {
    const novosAlunos = [];
    //recria a lista sem oque deve ser excluído
    for (let i = 0; i < alunos.length; i++) {
      if (i !== index) novosAlunos.push(alunos[i]);
    }
    setAlunos(novosAlunos);
  }

  // TELA
  return (
    <div className="min-h-screen w-full bg-slate-900 flex p-0">
      <div className="fixed left-0 top-0 h-full z-10">
        <Sidebar />
      </div>

      <main className="flex-1 flex items-center justify-center p-8 ml-64">
        <div className="bg-black w-full max-w-5xl rounded-[40px] border-[3px] border-gray-800 shadow-2xl p-10 flex flex-col gap-8">
          <header className="text-center">
            <h1 className="text-white font-bold text-3xl mb-2">
              Cadastro de Alunos Senac Competição
            </h1>
            <p className="text-orange-500 italic font-semibold text-lg">
              Etapa Escolar Lavras - MG
            </p>
          </header>

          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="bg-transparent border border-gray-600 rounded-lg p-4 text-gray-300 placeholder-gray-500 focus:ring-1 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border border-gray-600 rounded-lg p-4 text-gray-300 placeholder-gray-500 focus:ring-1 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              placeholder="Celular"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
              className="bg-transparent border border-gray-600 rounded-lg p-4 text-gray-300 placeholder-gray-500 focus:ring-1 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              placeholder="Curso"
              value={curso}
              onChange={(e) => setCurso(e.target.value)}
              className="bg-transparent border border-gray-600 rounded-lg p-4 text-gray-300 placeholder-gray-500 focus:ring-1 focus:ring-blue-500 outline-none"
            />

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-all text-xl mt-2 col-span-2">
              {editIndex !== null ? "Atualizar" : "Cadastrar"}
            </button>
          </form>
          <section className="mt-4">
            <div className="overflow-hidden rounded-lg border border-gray-700">
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-black font-bold">
                    <th className="py-3 border border-gray-700">Nome</th>
                    <th className="py-3 border border-gray-700">Email</th>
                    <th className="py-3 border border-gray-700">Celular</th>
                    <th className="py-3 border border-gray-700">Curso</th>
                    <th className="py-3 border border-gray-700">Ações</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {alunos.map((aluno, index) => (
                    <tr key={index} className="border-t border-gray-700">
                      <td className="py-4 px-4 border border-gray-700">
                        {aluno.nome}
                      </td>
                      <td className="py-4 px-4 border border-gray-700">
                        {aluno.email}
                      </td>
                      <td className="py-4 px-4 border border-gray-700">
                        {aluno.celular}
                      </td>
                      <td className="py-4 px-4 border border-gray-700">
                        {aluno.curso}
                      </td>
                      <td className="py-4 px-4 border border-gray-700">
                        <button
                          onClick={() => handleEdit(index)}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded-md font-medium"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="bg-red-499 hover:bg-red-600 text-white px-4 py-1 rounded-md font-medium"
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
