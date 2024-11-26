document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const popularBooks = data.slice(0, 8);

            const popularBooksContainer = document.getElementById("popular-books");

            popularBooks.forEach(book => {
                const bookCard = document.createElement("div");
                bookCard.classList.add("col");

                bookCard.innerHTML = `
                    <div class="book-card ">
                        <div class=" p-4"><img src="${book.simple_thumb}" alt="${book.title}" class="book-image img-fluid"></div>
                        <h5 class="book-title">${book.title}</h5>
                        <p class="book-author">${book.author || "Unknown Author"}</p>
                    </div>
                `;

                popularBooksContainer.appendChild(bookCard);
            });
        })
        .catch(error => console.error("Error fetching book data:", error));
});
