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

function renderBooks() { 
    const booksContainer = document.getElementById('books-list'); 
    booksContainer.innerHTML = '';

    books.forEach(book => { 
        const bookContainer = document.createElement('div'); 
        bookContainer.classList.add('book'); 

        const bookTitle = document.createElement('div'); 
        bookTitle.classList.add('book-title'); 
        bookTitle.innerText = book.title; 

        const bookAddToFavoriteButton = document.createElement('button'); 
        bookAddToFavoriteButton.addEventListener('click', () => { 
            addToFavorite(book); 
        });
        bookAddToFavoriteButton.innerText = 'Add to favorite'; 

        bookContainer.appendChild(bookTitle); 
        bookContainer.appendChild(bookAddToFavoriteButton); 

        booksContainer.appendChild(bookContainer); 
    });
}

/*
    Print in HTML the books added to favorite
*/
function renderFavoriteBooks() { 
    const booksContainer = document.getElementById('favorite-books'); 
    booksContainer.innerHTML = ''; 

    favoriteBooks.forEach(book => { 
        const bookContainer = document.createElement('div');
        bookContainer.classList.add('book');

        const bookTitle = document.createElement('div');
        bookTitle.classList.add('book-title');
        bookTitle.innerText = book.title;

        const bookAddToFavoriteButton = document.createElement('button');
        bookAddToFavoriteButton.addEventListener('click', () => {
            removeFromFavoriteBooks(book); 
            renderFavoriteBooks(); 
            renderFavoriteGreatBooks();
            console.log(book);
        });
        bookAddToFavoriteButton.innerText = 'Remove from favorite'; 

        bookContainer.appendChild(bookTitle);
        bookContainer.appendChild(bookAddToFavoriteButton);

        booksContainer.appendChild(bookContainer);
    });
}

function renderFavoriteGreatBooks() { 
    const booksContainer = document.getElementById('favorite-great-books');
    booksContainer.innerHTML = '';

    favoriteGreatBooks.forEach(book => {
        const bookContainer = document.createElement('div');
        bookContainer.classList.add('book');

        const bookTitle = document.createElement('div');
        bookTitle.classList.add('book-title');
        bookTitle.innerText = book.title;

        const bookAddToFavoriteButton = document.createElement('button');
        bookAddToFavoriteButton.addEventListener('click', () => {
            removeFromFavoriteGreatBooks(book); 
            renderFavoriteBooks(); 
            renderFavoriteGreatBooks(); 
            console.log(book);
        });

        bookAddToFavoriteButton.innerText = 'Remove from favorite';

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
}

function removeFromFavoriteBooks(book) { 
    const removeIndex = favoriteBooks.indexOf(book); 

    // const removeIndex = favoriteBooks.findIndex(item => {
    //     return item.id === book.id
    // });
    favoriteBooks.splice(removeIndex, 1);
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

function addToFavorite(book) { // 14
    if (titleIncludesWord(book.title, 'great') && !bookExistsInList(favoriteGreatBooks, book)) { 
        favoriteGreatBooks.push(book);
    } else if (!titleIncludesWord(book.title, 'great') && !bookExistsInList(favoriteBooks, book)) { 
        favoriteBooks.push(book);
    }

    renderFavoriteBooks(); 
    renderFavoriteGreatBooks(); 
    // console.log(favoriteGreatBooks);
    // console.log(favoriteBooks);
}

function init() { 
    renderBooks(); 
}

init();