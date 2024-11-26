document.addEventListener("DOMContentLoaded", () => {
  const Url = "https://wolnelektury.pl/api/books/studnia-i-wahadlo/";

  fetch(Url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("book-image").src = data.cover || "";
      document.getElementById("title").textContent =
        data.title || "No title available";

      const authorName =
        data.authors && data.authors.length > 0
          ? data.authors[0].name
          : "Unknown Author";
      document.getElementById("author").textContent = `By ${authorName}`;
    })
    .catch((error) => {
      console.error("Error fetching book data:", error);
    });
});
