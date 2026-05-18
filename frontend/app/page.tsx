import { getBooks } from "@/libs/api";
import Link from "next/link";

export default async function Page() {
    const books = await getBooks();

    return (
        <div className="min-h-screen bg-[#f4f7fb]">

            <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white py-28">

                <div className="absolute w-72 h-72 bg-white/10 rounded-full -top-10 -right-10"></div>
                <div className="absolute w-96 h-96 bg-white/5 rounded-full bottom-0 left-0"></div>

                <div className="relative max-w-6xl mx-auto px-6">

                    <p className="uppercase tracking-[6px] text-blue-200 text-sm">
                        BOOK PLATFORM
                    </p>

                    <h1 className="text-5xl md:text-6xl font-black leading-tight mt-4">
                        Manage Your <br />
                        Favorite Books
                    </h1>

                    <p className="mt-6 text-lg text-blue-100 max-w-xl">
                        Next.js와 Spring Boot 기반의
                        현대적인 도서 관리 시스템입니다.
                    </p>

                    <Link
                        href="/register"
                        className="inline-block mt-8 bg-white text-blue-700 px-7 py-4 rounded-2xl font-bold hover:scale-105 transition"
                    >
                        + Add New Book
                    </Link>

                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10">

                <div className="grid md:grid-cols-3 gap-6">

                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <p className="text-gray-400 text-sm">
                            전체 도서
                        </p>

                        <h3 className="text-3xl font-bold mt-2">
                            {books.length}
                        </h3>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <p className="text-gray-400 text-sm">
                            읽는 중
                        </p>

                        <h3 className="text-3xl font-bold mt-2">
                            {
                                books.filter(
                                    (b: any) => b.status === "reading"
                                ).length
                            }
                        </h3>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <p className="text-gray-400 text-sm">
                            완독
                        </p>

                        <h3 className="text-3xl font-bold mt-2">
                            {
                                books.filter(
                                    (b: any) => b.status === "done"
                                ).length
                            }
                        </h3>
                    </div>

                </div>

            </section>

            <section className="max-w-6xl mx-auto px-6 py-16">

                <div className="flex justify-between items-center mb-8">

                    <h2 className="text-2xl font-bold text-gray-800">
                        📚 Book List
                    </h2>
                </div>

                {(!books || books.length === 0) ? (
                    <div className="text-center text-gray-400 py-20">
                        📭 등록된 도서가 없습니다
                    </div>
                ) : (

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {books
                            .filter((book: any) => book?.id)
                            .map((book: any) => (

                                <Link
                                    key={book.id}
                                    href={`/books/${book.id}`}
                                >
                                    <div className="group bg-white border border-gray-100 rounded-3xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">

                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white text-2xl">
                                            📘
                                        </div>

                                        <h2 className="text-xl font-bold text-gray-800 mt-5 group-hover:text-blue-600 transition">
                                            {book.title}
                                        </h2>

                                        <p className="text-gray-500 mt-2">
                                            ✍️ {book.author}
                                        </p>

                                        <div className="flex justify-between items-center mt-6">

                      <span className="text-lg font-bold text-gray-800">
                        ₩{book.price}
                      </span>

                                            <span
                                                className={`px-3 py-1 rounded-full text-xs ${
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

                                    </div>

                                </Link>

                            ))}

                    </div>

                )}

            </section>

        </div>
    );
}