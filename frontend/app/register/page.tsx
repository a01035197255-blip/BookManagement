"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createBook } from "@/libs/api";

export default function Page() {
    const router = useRouter();

    const [form, setForm] = useState({
        title: "",
        author: "",
        price: 0,
        status: "reading",
    });

    async function submit() {
        await createBook(form);
        router.push("/");
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

                <h1 className="text-2xl font-bold mb-6 text-center">
                    ➕ 도서 등록
                </h1>

                <input
                    className="w-full border rounded-lg p-3 mb-3 focus:ring-2 focus:ring-blue-300 outline-none"
                    placeholder="제목"
                    onChange={(e) =>
                        setForm({ ...form, title: e.target.value })
                    }
                />

                <input
                    className="w-full border rounded-lg p-3 mb-3 focus:ring-2 focus:ring-blue-300 outline-none"
                    placeholder="저자"
                    onChange={(e) =>
                        setForm({ ...form, author: e.target.value })
                    }
                />

                <input
                    className="w-full border rounded-lg p-3 mb-3"
                    type="number"
                    placeholder="가격"
                    onChange={(e) =>
                        setForm({ ...form, price: Number(e.target.value) })
                    }
                />

                <select
                    className="w-full border rounded-lg p-3 mb-5"
                    onChange={(e) =>
                        setForm({ ...form, status: e.target.value })
                    }
                >
                    <option value="reading">reading</option>
                    <option value="done">done</option>
                    <option value="want">want</option>
                </select>

                <button
                    onClick={submit}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    등록하기
                </button>
            </div>
        </div>
    );
}