import BookForm from "@/components/BookForm";

export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

                <h1 className="text-2xl font-bold text-center mb-6">
                    ✏️ 도서 수정
                </h1>

                <BookForm id={id} />
            </div>
        </div>
    );
}