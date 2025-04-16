import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-blue-700 text-white py-6 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Vite But Not Too Fast</h1>
        <nav className="space-x-4">
          <Link href="/" className="hover:underline">Accueil</Link>
          <Link href="/articles" className="hover:underline">Articles</Link>
          <Link href="/quiz" className="hover:underline">Quiz</Link>
        </nav>
      </div>
    </header>
  );
}
