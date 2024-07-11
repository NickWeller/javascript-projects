// Define your Book class here:
class Book {
  constructor(
    title,
    author,
    copyrightDate,
    isbn,
    numberOfPages,
    timesCheckedOut,
    discarded,
  ) {
    this.title = title;
    this.author = author;
    this.copyrightDate = copyrightDate;
    this.isbn = isbn;
    this.numberOfPages = numberOfPages;
    this.timesCheckedOut = timesCheckedOut;
    this.discarded = discarded;
  }
  checkout(uses = 1) {
    this.timesCheckedOut += uses;
    return this.timesCheckedOut;
  }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
  constructor(
    title,
    author,
    copyrightDate,
    isbn,
    numberOfPages,
    timesCheckedOut,
    discarded,
  ) {
    super(
      title,
      author,
      copyrightDate,
      isbn,
      numberOfPages,
      timesCheckedOut,
      discarded,
    );
  }
  dispose(currentYear) {
    if (currentYear - this.copyrightDate > 5) {
      this.discarded = "Yes";
    }
  }
}

class Novel extends Book {
  constructor(
    title,
    author,
    copyrightDate,
    isbn,
    numberOfPages,
    timesCheckedOut,
    discarded,
  ) {
    super(
      title,
      author,
      copyrightDate,
      isbn,
      numberOfPages,
      timesCheckedOut,
      discarded,
    );
  }
  dispose() {
    if (this.timesCheckedOut > 100) {
      this.discarded = "Yes";
    }
  }
}
// Declare the objects for exercises 2 and 3 here:
let prideAndPrejudice = new Novel(
  "Pride and Prejudice",
  "Jane Austen",
  1813,
  1111111111111,
  432,
  100,
  "No",
);

let shuttleBuildingManual = new Manual(
  "Top Secret Shuttle Building Manual",
  "Redacted",
  2013,
  22222222222,
  1147,
  1,
  "No",
);

// Code exercises 4 & 5 here:

prideAndPrejudice.checkout(5);
prideAndPrejudice.dispose();

shuttleBuildingManual.dispose(2024);
console.log(prideAndPrejudice);
console.log(shuttleBuildingManual);
