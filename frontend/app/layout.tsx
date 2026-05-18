import Link from "next/link";
import "./globals.css";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
        <body className="bg-gray-50 text-gray-800 m-0">

        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-10">
            <div className="w-full max-w-5xl mx-auto flex justify-between items-center p-4">

                <Link href="/" className="text-xl font-bold text-blue-600 cursor-pointer">
                    📚 Book Manager
                </Link>
                <nav className="flex items-center gap-3">

                    <Link
                        href="/"
                        className="px-4 py-2 rounded-full text-sm font-medium border border-gray-200 bg-white hover:bg-gray-100 transition"
                    >
                        🏠 Home
                    </Link>

                    <Link
                        href="/register"
                        className="px-4 py-2 rounded-full text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition shadow"
                    >
                        ➕ Register
                    </Link>

                </nav>

            </div>
        </header>

        <main className="flex justify-center">
            <div className="w-full max-w-5xl p-6">
                {children}
            </div>
        </main>

        </body>
        </html>
    );
}