const BASE_URL = "http://localhost:8080/api/books";

export async function getBooks() {
    const res = await fetch(BASE_URL, { cache: "no-store" });
    return res.json();
}

export async function getBook(id: string) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        cache: "no-store",
    });

    const data = await res.json();

    console.log("API RAW:", data);

    return data.data ?? data;
}

export async function createBook(book: any) {
    await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
    });
}

export async function updateBook(id: string, book: any) {
    await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
    });
}

export async function deleteBook(id: string) {
    await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
    });
}