async function fetchFeaturedBooks() {
  try {
    const response = await fetch(
      "https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/"
    );
    const data = await response.json();
    const featuredBooks = data.slice(-4);
    const booksRow = document.getElementById("featured-books-row");

    featuredBooks.forEach((book) => {
      const card = `
                <div class="col-md-3 mb-4 d-flex justify-content-center mt-5">
                    <div class="card border-0 text-center ">
                        <img src="${book.simple_thumb}" class="rounded-3 book-img" alt="${book.title}">
                        <div class="card-body bg-color-light">
                            <h5 class="book-title text-center mb-2">${book.title}</h5>
                            <p class="book-author text-muted mb-2">${book.author}</p>
                        </div>
                    </div>
                </div>
            `;
      booksRow.innerHTML += card;
    });
  } catch (error) {
    console.error("Error fetching featured books:", error);
  }
}

document.addEventListener("DOMContentLoaded", fetchFeaturedBooks);
