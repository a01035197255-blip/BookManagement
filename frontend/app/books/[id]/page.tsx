import { getBook, deleteBook } from "@/libs/api";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ id: string }>;
}) {
    // ✅ 핵심: await 해야 함
    const { id } = await params;

    const book = await getBook(id);

    if (!book) {
        return (
            <div className="text-center mt-20 text-gray-400">
                📭 책을 찾을 수 없습니다
            </div>
        );
    }

    return (
        <div className="bg-gray-50 pt-20 px-4 flex justify-center">

            <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">

                <h1 className="text-2xl font-bold mb-6">
                    📖 도서 상세
                </h1>

                <p>제목: {book.title}</p>
                <p>저자: {book.author}</p>
                <p>가격: ₩{book.price}</p>

                <div className="flex justify-between mt-8">

                    <Link href="/" className="text-gray-500">
                        ← 목록
                    </Link>

                    <div className="flex gap-3">

                        <Link
                            href={`/edit/${book.id}`}
                            className="text-blue-600"
                        >
                            수정
                        </Link>

                        <form
                            action={async () => {
                                "use server";
                                await deleteBook(book.id);
                                redirect("/");
                            }}
                        >
                            <button className="text-red-500">
                                삭제
                            </button>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    );
}