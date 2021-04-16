const books = [{
        id: 1,
        title: 'Great JavaScript'
    },
    {
        id: 2,
        title: 'React is great'
    },
    {
        id: 3,
        title: 'HTML'
    },
    {
        id: 4,
        title: 'CSS'
    },
    {
        id: 5,
        title: 'Bootstrap'
    },
];

const favoriteBooks = [];
const favoriteGreatBooks = [];

function renderBooks(container, list, eventHandler, buttonText) {
    const booksContainer = document.getElementById(container);
    booksContainer.innerHTML = '';

    list.forEach(book => {
        const bookContainer = document.createElement('div');
        bookContainer.classList.add('book');

        const bookTitle = document.createElement('div');
        bookTitle.classList.add('book-title');
        bookTitle.innerText = book.title;

        const bookAddToFavoriteButton = document.createElement('button');
        bookAddToFavoriteButton.addEventListener('click', () => {
            eventHandler(book);
        });
        bookAddToFavoriteButton.innerText = buttonText;

        bookContainer.appendChild(bookTitle);
        bookContainer.appendChild(bookAddToFavoriteButton);

        booksContainer.appendChild(bookContainer);
    });
}


function removeFromFavoriteGreatBooks(book) {
    const removeIndex = favoriteGreatBooks.indexOf(book);

    // const removeIndex = favoriteBooks.findIndex(item => {
    //     return item.id === book.id
    // });
    favoriteGreatBooks.splice(removeIndex, 1);
    renderBooks("favorite-great-books", favoriteGreatBooks, removeFromFavoriteGreatBooks, "Remove book");
}

function removeFromFavoriteBooks(book) {
    const removeIndex = favoriteBooks.indexOf(book);

    // const removeIndex = favoriteBooks.findIndex(item => {
    //     return item.id === book.id
    // });
    favoriteBooks.splice(removeIndex, 1);
    renderBooks("favorite-books", favoriteBooks, removeFromFavoriteBooks, "Remove book");

}

function titleIncludesWord(title, word) {
    return title.toLowerCase().includes(word);
}

function bookExistsInList(list, book) {
    let found = false;

    for (let i = 0; i < list.length; i++) {
        if (list[i].id === book.id) {
            found = true;
        }
    }

    return found;

    //return list.filter(element => element.id === book.id).length > 0;
}

function addToFavorite(book) {
    if (titleIncludesWord(book.title, 'great') && !bookExistsInList(favoriteGreatBooks, book)) {
        favoriteGreatBooks.push(book);
    } else if (!titleIncludesWord(book.title, 'great') && !bookExistsInList(favoriteBooks, book)) {
        favoriteBooks.push(book);
    }

    renderBooks("favorite-books", favoriteBooks, removeFromFavoriteBooks, "Remove book");
    renderBooks("favorite-great-books", favoriteGreatBooks, removeFromFavoriteGreatBooks, "Remove book");
    // renderFavoriteBooks();
    // renderFavoriteGreatBooks();
    // console.log(favoriteGreatBooks);
    // console.log(favoriteBooks);

}

function init() {
    renderBooks("books-list", books, addToFavorite, "Add to favorite");
}

init();