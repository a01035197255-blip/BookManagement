import BookForm from "@/components/BookForm";

export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    return (
        <div className="flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

                <BookForm id={id} />
            </div>
        </div>
    );
}