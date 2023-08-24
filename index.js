// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// functions - set of instrustructions

// why - dry, readabilty, parallels

// purchase -

// search - google , torrents
// price
// avaiable

// Updated list of books to include count
let books = [
  { title: 'Harry Potter', price: 20, isAvailable: true, count: 5 },
  { title: 'Lord of the Rings', price: 25, isAvailable: false, count: 0 },
  { title: 'Clean Code', price: 30, isAvailable: true, count: 3 },
  { title: 'The cracking the coding interview', price: 35, isAvailable: true, count: 2 },
];

// wallet money
let wallet_money = 100;


// purchase book

// bookAvaiablity
// isMoneyAvailableForPurchase
// decrementBookStock
// decrementWallet

function isBookAvailable(BookName)
{

}

function getBookPrice(bookName)
{

}

function isMoneyAvaiable(buyingPrice)
{

}

function decrementBookStock(bookName, decrementValue)
{

}

function decrementWallet (valueToDecrement)
{

}

function purchaseBook(bookName)
{
  if(isBookAvailable(bookName) && isMoneyAvaiable(getBookPrice(bookName)))
  {
    console.log(`${bookName} is purchases`)
    decrementBookStock(bookName,1)
    decrementWallet(getBookPrice(bookName))
  }
  else{
    console.log("book cannot be purchased")
  }
}

purchaseBook("Harry Potter")

function add(a, b) {
  // instrctions
  return `sum of ${a} + ${b} = ${a + b}`;
}

let a = (a, b) => {
  // instrctions
  return `sum of ${a} + ${b} = ${a + b}`;
}
console.log(a(2,3));
