import Link from "next/link";

export default function BookCard({ book }: any) {
    const statusColor =
        book.status === "done"
            ? "bg-green-100 text-green-700"
            : book.status === "reading"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-blue-100 text-blue-700";

    return (
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 border">
            <h3 className="text-lg font-bold">{book.title}</h3>
            <p className="text-gray-500">{book.author}</p>

            <p className="mt-1 text-sm text-gray-400">₩{book.price}</p>

            <span
                className={`inline-block mt-3 px-3 py-1 text-xs rounded-full ${statusColor}`}
            >
        {book.status}
      </span>

            <div className="mt-4 flex justify-between items-center">
                <Link
                    href={`/books/${book.id}`}
                    className="text-blue-500 hover:underline text-sm"
                >
                    상세보기 →
                </Link>
            </div>
        </div>
    );
}