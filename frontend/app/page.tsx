import { getBooks } from "@/libs/api";
import Link from "next/link";

export default async function Page() {
    const books = await getBooks();

    console.log("BOOKS:", books); // 🔥 디버깅용 (나중에 삭제)

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-10">
            <div className="max-w-6xl mx-auto px-4">

                {/* 헤더 */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        📚 Book Manager
                    </h1>

                    <Link
                        href="/register"
                        className="bg-blue-600 text-white px-5 py-2 rounded-xl shadow hover:bg-blue-700 transition"
                    >
                        + 등록
                    </Link>
                </div>

                {/* 빈 상태 */}
                {(!books || books.length === 0) ? (
                    <div className="text-center text-gray-400 mt-20">
                        📭 등록된 도서가 없습니다
                    </div>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {books
                            .filter((book: any) => book?.id) // 🔥 핵심: id 없는 데이터 제거
                            .map((book: any) => (

                                <Link
                                    key={book.id}
                                    href={`/books/${book.id}`}
                                    className="block"
                                >
                                    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border cursor-pointer">

                                        {/* 제목 */}
                                        <h2 className="text-lg font-bold text-gray-800">
                                            {book.title}
                                        </h2>

                                        <p className="text-gray-500 text-sm mt-1">
                                            ✍️ {book.author}
                                        </p>

                                        <p className="text-gray-400 text-sm">
                                            💰 ₩{book.price}
                                        </p>

                                        {/* 상태 */}
                                        <span
                                            className={`inline-block mt-3 px-3 py-1 text-xs rounded-full ${
                                                book.status === "done"
                                                    ? "bg-green-100 text-green-700"
                                                    : book.status === "reading"
                                                        ? "bg-yellow-100 text-yellow-700"
                                                        : "bg-blue-100 text-blue-700"
                                            }`}
                                        >
                      {book.status}
                    </span>

                                    </div>
                                </Link>

                            ))}
                    </div>
                )}

            </div>
        </div>
    );
}