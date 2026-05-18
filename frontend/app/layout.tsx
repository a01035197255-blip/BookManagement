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

                <h1 className="text-xl font-bold text-blue-600">
                    📚 Book Manager
                </h1>

                <nav className="flex gap-4 text-sm">
                    <Link className="hover:text-blue-500" href="/">
                        Home
                    </Link>
                    <Link className="hover:text-blue-500" href="/register">
                        Register
                    </Link>
                </nav>

            </div>
        </header>

        {/* ⭐ 핵심: 중앙 고정 컨테이너 */}
        <main className="flex justify-center">
            <div className="w-full max-w-5xl p-6">
                {children}
            </div>
        </main>

        </body>
        </html>
    );
}