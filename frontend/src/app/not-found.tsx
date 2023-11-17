import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 h-full p-4"
    >
      <h1 className="w-full md:w-9/12 px-2 mb-3 text-8xl font-bold text-center text-blue-900/20 uppercase">
        404
      </h1>
      <h2 className="w-full md:w-9/12 px-2 pb-10 text-4xl font-bold text-center text-blue-900/20 uppercase"
      >
        Pagina não encontrada
      </h2>
      <Link href={'/'}
            className="text-blue-900/50 text-3xl text-center font-semibold hover:text-blue-900 transition-all cursor-pointer underline"
      >Voltar para a página inicial</Link>
    </div>
  );
}
