import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-xl mt-4">Страница не найдена</p>
            <Link href="/"
                  className="px-4 py-2 mt-3 font-semibold rounded-lg shadow-md text-white bg-[#12375F]">Главная</Link>
        </div>
    );
}
