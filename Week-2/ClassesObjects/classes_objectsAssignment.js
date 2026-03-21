//Objective : Create a Book class and use it to manage a collection of books in a library.

//Requirements:
//Create a Book class with the following:
  class Book{
    title;
    author;
    pages;
    isAvailable=true;
  
  //Constructor to initialize the properties
  constructor(title,author,pages){
    this.title=title;
    this.author=author;
    this.pages=pages;
  }
  borrow(){
    if(this.isAvailable){
        this.isAvailable=false;
        console.log(`You have borrowed "${this.title}"`);
    } else{
        console.log(`"${this.title}" is not available.`);
    }
  }

  returnBook(){
    this.isAvailable=true;
    console.log(`You have returned "${this.title}"`);
  }

  getInfo(){
    return `${this.title} by ${this.author} (${this.pages} pages)`;
  }

  isLongBook(){
    return this.pages > 300;
  }
}
const book1=new Book("Harry Potter","JK Rowling",500);
const book2=new Book("Programming in Python","Reema Thareja",180);
const book3=new Book("C Language","Balaguruswamy",350);
console.log(book1.getInfo());
console.log(book2.getInfo());
console.log(book3.getInfo());
book1.borrow();
console.log(book1.isAvailable);
book2.returnBook();
//count the number of long books
const books=[book1,book2,book3];
const longBooks=books.filter(book=>book.isLongBook());
console.log(longBooks.length);
console.log(books);