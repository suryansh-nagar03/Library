const addButton = document.querySelector("#add-btn");
const closeButton = document.querySelector(".close-btn")

addButton.addEventListener("click", () => {
    const popup = document.querySelector('.backdrop');
    popup.classList.toggle("closed");
})

closeButton.addEventListener("click", () => {
    const popup = document.querySelector('.backdrop');
    popup.classList.toggle("closed");
})

const createForm = document.getElementById("add-book-form");

const readButton = document.querySelector(".read-btn");

let read = false;

readButton.addEventListener("click", () => {
    read = !read;
    readButton.classList.toggle("read-btn-unread");
    readButton.classList.toggle("read-btn-read");
})

createForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");
    
    addBook(title.value, author.value, pages.value, read);
    title.value = "";
    author.value = "";
    pages.value = "";
    read = false;

    const popup = document.querySelector('.backdrop');
    popup.classList.toggle("closed");
})

function addBook(title,author,pages, read) {
    const bookSection = document.querySelector(".books-section");

    const bookHolder = document.createElement("div");
    bookHolder.classList.add("book-holder");

    const bookDetails = document.createElement("div");
    bookDetails.classList.add("book-details");

    const bookHeading = document.createElement("div");
    bookHeading.classList.add("book-heading");
    bookHeading.textContent = title;
    const bookAuthor = document.createElement("div");
    bookAuthor.classList.add("book-author");
    bookAuthor.textContent = author;
    const bookPages = document.createElement("div");
    bookPages.classList.add("book-pages");
    bookPages.textContent = pages;

    bookDetails.appendChild(bookHeading);
    bookDetails.appendChild(bookAuthor);
    bookDetails.appendChild(bookPages);

    const readImageDiv = document.createElement("div");
    readImageDiv.classList.add("read-img"); 

    const readImage = document.createElement("img");
    if(read)
        readImage.classList.add("read-img-btn-read");
    else
        readImage.classList.add("read-img-btn-unread");
    readImage.src = "img/asset 3.svg";
    readImage.alt = "read";
    readImageDiv.appendChild(readImage);

    const deleteButton = document.createElement("div");
    deleteButton.classList.add("delete-btn");

    const deleteImage = document.createElement("img");
    deleteImage.src = "img/asset 0.svg"
    deleteImage.alt = "delete";
    deleteImage.classList.add('book-delete');

    deleteButton.appendChild(deleteImage);

    bookHolder.appendChild(bookDetails);
    bookHolder.appendChild(readImageDiv);
    bookHolder.appendChild(deleteButton);

    bookSection.appendChild(bookHolder);

    deleteButton.addEventListener("click", () => {
        bookHolder.remove();
    });

    readImage.addEventListener("click",()=>{
        readImage.classList.toggle("read-img-btn-read");
        readImage.classList.toggle("read-img-btn-unread");
    })
}
