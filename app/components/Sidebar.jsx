import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-transparent flex flex-col items-center p-8 gap-8 min-h-screen">
      <Image
        src="/senac.png"
        alt="Logo Senac"
        width={150}
        height={150}
        className="object-contain"
      />

      <nav className="flex flex-col gap-4 w-full">
        <Link
          href="/pageinicial"
          className="text-white hover:text-blue-400 hover:underline text-justify"
        >
          Bem Vindo
        </Link>
        <Link
          href="/imc"
          className="text-white hover:text-blue-400 hover:underline text-justify"
        >
          App de IMC
        </Link>
        <Link
          href="/idade"
          className="text-white hover:text-blue-400 hover:underline text-justify"
        >
          App Idade Aluno
        </Link>
        <Link
          href="/crud"
          className="text-white hover:text-blue-400 hover:underline text-justify"
        >
          App CRUD
        </Link>
        <Link
          href="/abc"
          className="text-white hover:text-blue-400 hover:underline text-justify"
        >
          App Soma
        </Link>
        <Link
          href="/ficha"
          className="text-white hover:text-blue-400 hover:underline text-justify"
        >
          App Ficha do Aluno
        </Link>
        <Link
          href="/serveraction"
          className="text-white hover:text-blue-400 hover:underline text-justify"
        >
          Server Action
        </Link>
        <Link
          href="/calculadora"
          className="text-white hover:text-blue-400 hover:underline text-justify"
        >
          App Calculadora
        </Link>
        <Link
          href="/bhaskara"
          className="text-white hover:text-blue-400 hover:underline text-justify"
        >
          App Bhaskara
        </Link>
      </nav>
    </div>
  );
}
