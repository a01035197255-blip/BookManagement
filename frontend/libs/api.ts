const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

export async function getBooks() {
    const res = await fetch(`${BASE_URL}/books`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch books");
    }

    return res.json();
}

export async function getBook(id: string) {
    const res = await fetch(`${BASE_URL}/books/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Book not found");
    }

    const data = await res.json();
    console.log("API RAW:", data);

    return data.data ?? data;
}

export async function createBook(book: any) {
    const res = await fetch(`${BASE_URL}/books`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
    });

    if (!res.ok) {
        throw new Error("Failed to create book");
    }

    return res.json();
}

export async function updateBook(id: string, book: any) {
    const res = await fetch(`${BASE_URL}/books/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
    });

    if (!res.ok) {
        throw new Error("Failed to update book");
    }

    return res.json();
}

export async function deleteBook(id: string) {
    const res = await fetch(`${BASE_URL}/books/${id}`, {
        method: "DELETE",
    });

    if (!res.ok) {
        throw new Error("Failed to delete book");
    }

    return true;
}