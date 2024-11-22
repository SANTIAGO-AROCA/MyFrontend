import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen font-[family-name:var(--font-geist-sans)] flex flex-col justify-between">
      <div className="absolute inset-0 z-0">
        <Image
          src="/chia_15.png"
          layout="fill"
          objectFit="cover"
          alt="Imagen inicio de login"
        />
      </div>
      <main className="relative z-10 flex flex-col gap-8 items-center justify-center p-8 sm:p-20 text-black text-2xl flex-grow">
        <p>Bienvenidos a nuestro proyecto de Desarrollo de Software Seguro</p>
        <Link href="/Login">
          <p className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Loguearse</p>
        </Link>
        <Link href="/Records">
          <p className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Registrarse</p>
        </Link>
      </main>
      <footer className="relative z-10 flex gap-6 flex-wrap items-center justify-center p-4 text-black text-xl">
        <p>Trabajo presentado por Santiago Aroca y Zamir Aroca</p>
      </footer>
    </div>
  );
}
