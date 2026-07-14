const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring the result of getBook function to extract the title and author
const { title, author } = getBook(1);
console.log(title, author);

const { title: bookTitle, author: bookAuthor } = getBook(2);
console.log(bookTitle, bookAuthor);

const { publicationDate, genres } = getBook(3);
console.log(publicationDate, genres);

const [genre1, genre2] = getBook(4).genres;
console.log(genre1, genre2);

// Rest and Spread Operators
//Rest operator:
// It allows us to represent an indefinite number of arguments as an array.
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(5, 10, 15)); // Output: 30
// It is used in function parameters and destructuring assignments.
const [firstGenre, ...otherGenres] = getBook(5).genres;
// why ...comes as last? because it is a rest operator which collects the remaining elements of an array into a new array.
// In this case, it collects all the genres except for the first one and assigns them to the otherGenres variable.
console.log(firstGenre);
console.log(otherGenres);
// Spread operator:
// It allows us to expand an array or object into individual elements.
const book1 = getBook(1);
const book2 = getBook(2);
const combinedBooks = { ...book1, ...book2 };
// why ...comes as first? because it is a spread operator which expands the properties of book1 and book2 into a new object.
console.log(combinedBooks);
const changedBook = {
  ...book1,
  title: "The Lord of the Rings: The Fellowship of the Ring",
};
console.log(changedBook);

//String Literals
const summary = `The book "${book1.title}" was written by ${book1.author} and published on ${book1.publicationDate.split("-")[0]} (${new Date().getFullYear() - book1.publicationDate.split("-")[0]} years ago). It has ${book1.pages} pages and belongs to the genres: ${book1.genres.join(", ")}.`;
console.log(summary);

// Ternary Operator
console.log(
  `The book "${book1.title}" and it has ${book1.hasMovieAdaptation ? "" : "not"} been movie adapted`,
);

//Arrow Functions
const getBookTitles = (books) => books.map((book) => book.title);
console.log(getBookTitles(data));

const yearsAgo = (year) => new Date().getFullYear() - year;
console.log(yearsAgo(book1.publicationDate.split("-")[0]));

// Short Circuiting and Logical Operators
// Logical AND (&&) operator: If the first operand is truthy, it returns the second operand; otherwise, it returns the first operand.
const logicalAnd = true && "Hello"; // returns "Hello"
const logicalAnd2 = false && "Hello"; // returns false
console.log(logicalAnd, logicalAnd2);

// Logical OR (||) operator: If the first operand is truthy, it returns the first operand; otherwise, it returns the second operand.
const logicalOr = true || "Hello"; // returns true
const logicalOr2 = false || "Hello"; // returns "Hello"
console.log(logicalOr, logicalOr2);

// Nullish Coalescing (??) operator: If the first operand is null or undefined, it returns the second operand; otherwise, it returns the first operand.
const nullishCoalescing = null ?? "Hello"; // returns "Hello"
const nullishCoalescing2 = undefined ?? "Hello"; // returns "Hello"
const nullishCoalescing3 = 0 ?? "Hello"; // returns 0
console.log(nullishCoalescing, nullishCoalescing2, nullishCoalescing3);

// Optional Chaining (?.) operator: It allows us to access properties of an object without having to check if the object is null or undefined.
const optionalChaining = book1.translations?.spanish; // returns "El señor de los anillos"
const optionalChaining2 = book2.translations?.spanish; // returns undefined
console.log(optionalChaining, optionalChaining2);

const books = getBook(1);
console.log(books);

//Array Map method: It creates new array with the result of calling provided function on each element in the original array.
const bookTitles = data.map((book) => book.title);
console.log(bookTitles);

const bookDetails = data.map((book) => {
  return {
    title: book.title,
    author: book.author,
  };
});
const bookDetails2 = data.map((book) => ({
  title: book.title,
  author: book.author,
}));

console.log(bookDetails);
console.log(bookDetails2);

//Array Filter method: It creates a new array with all elements that pass the test implemented by the provided function.
const booksWithMovieAdaptation = data.filter((book) => book.hasMovieAdaptation);
console.log(booksWithMovieAdaptation);

const booksWithMoreThan500Pages = data
  .filter((book) => book.pages > 500)
  .map((book) => book.title);
console.log(booksWithMoreThan500Pages);

const adventureBooks = data
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
console.log(adventureBooks);

//Array Reduce method: It executes a reducer function on each element of the array, resulting in a single output value.
const totalPages = data.reduce((acc, book) => acc + book.pages, 0);
console.log(totalPages);

const averageRating = data.reduce((acc, book) => {
  const goodreadsRating = book.reviews.goodreads?.rating || 0;
  return acc + goodreadsRating;
}, 0);
console.log(averageRating / data.length);

//Array Sort method: It sorts the elements of an array in place and returns the sorted array.
const sortedByPublicationDate = data.sort(
  (a, b) => new Date(a.publicationDate) - new Date(b.publicationDate),
);
console.log(sortedByPublicationDate);
console.log(data);

const sortbyPages = data.sort((a, b) => a.pages - b.pages);
console.log(sortbyPages);
console.log(data);

const sortByPagesDesc = data.slice().sort((a, b) => b.pages - a.pages); // slice() is used to create a copy of the original array so that the original array is not mutated.
console.log(sortByPagesDesc);
console.log(data);

//Array Add new element: It adds a new element to the end of the array.
const newBook = {
  id: 6,
  title: "The Hobbit",
  publicationDate: "1937-09-21",
  author: "J.R.R. Tolkien",
  pages: 310,
  genres: ["fantasy", "adventure"],
  hasMovieAdaptation: true,
  reviews: {
    goodreads: {
      rating: 4.27,
      reviewsCount: 2900000,
    },
  },
};
const booksWithNewBook = [...data, newBook];
console.log(booksWithNewBook);
console.log(data);

//Array Remove element: It removes an element from the array.
const booksWithoutDune = data.filter((book) => book.title !== "Dune");
console.log(booksWithoutDune);
console.log(data);

//Array Update element: It updates an element in the array.
const updatedBooks = data.map((book) => {
  if (book.id === 1) {
    return {
      ...book,
      title: "The Lord of the Rings: The Fellowship of the Ring",
    };
  }
  return book;
});
console.log(updatedBooks);
console.log(data);

const updateNewBook = data.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book,
);
console.log(updateNewBook);

// Fetch and promises
const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url) // fetch() is a built-in JavaScript function that allows us to make HTTP requests to a server and retrieve data. It returns a promise that resolves to the Response object representing the response to the request.
  .then((response) => response.json()) // response.json() is a method that parses the JSON body of the response and returns a promise that resolves to a JavaScript object.
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// Async/Await
// Async/Await is a syntactic sugar built on top of promises that allows us to write asynchronous code in a synchronous manner.
//Why it executes fater than fetch() ? because fetch() is asynchronous and it returns a promise that resolves to the Response object representing the response to the request. The then() method is called on the promise returned by fetch() and it is executed after the promise is resolved. The async function fetchPosts() is also asynchronous and it returns a promise that resolves to the result of the function. The await keyword is used to wait for the promise returned by fetch() to resolve before moving on to the next line of code. Therefore, the code inside the async function fetchPosts() is executed after the code inside the fetch() method.
async function fetchPosts() {
  try {
    const response = await fetch(url); // await is used to wait for the promise to resolve before moving on to the next line of code.
    const data = await response.json();
    console.log(response);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchPosts();
