"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createBook, updateBook, getBook } from "@/libs/api";

export default function BookForm({ id }: { id?: string }) {
    const router = useRouter();

    const [form, setForm] = useState({
        title: "",
        author: "",
        price: 0,
        status: "reading",
    });

    useEffect(() => {
        if (id) {
            getBook(id).then((data) => {
                setForm(data);
            });
        }
    }, [id]);

    async function handleSubmit() {
        if (id) {
            await updateBook(id, form);
        } else {
            await createBook(form);
        }

        router.push("/");
    }

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow">
            <h1 className="text-xl font-bold mb-4">
                {id ? "✏️ 도서 수정" : "➕ 도서 등록"}
            </h1>

            <input
                className="w-full border rounded-lg p-3 mb-3 focus:ring-2 focus:ring-blue-300 outline-none"
                placeholder="제목"
                value={form.title}
                onChange={(e) =>
                    setForm({ ...form, title: e.target.value })
                }
            />

            <input
                className="w-full border rounded-lg p-3 mb-3 focus:ring-2 focus:ring-blue-300 outline-none"
                placeholder="저자"
                value={form.author}
                onChange={(e) =>
                    setForm({ ...form, author: e.target.value })
                }
            />

            <input
                className="w-full border rounded-lg p-3 mb-3 focus:ring-2 focus:ring-blue-300 outline-none"
                type="number"
                placeholder="가격"
                value={form.price}
                onChange={(e) =>
                    setForm({ ...form, price: Number(e.target.value) })
                }
            />

            <select
                className="w-full border p-2 mb-4 rounded"
                value={form.status}
                onChange={(e) =>
                    setForm({ ...form, status: e.target.value })
                }
            >
                <option value="reading">reading</option>
                <option value="done">done</option>
                <option value="want">want</option>
            </select>

            <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
                {id ? "수정하기" : "등록하기"}
            </button>
        </div>
    );
}