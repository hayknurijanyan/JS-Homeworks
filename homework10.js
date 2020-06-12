
// 2. Create an Account class. Account should have: id, name, balance.
// It should have setters for name and balance, and getters for all fields.
// It should have a method: credit(amount), which should add amount to balance and
// return the updated balance.
// It should have a method: debit(amount), which should subtract the amount from the
// balance, if amount is less than the balance, otherwise output “Amount exceeded
// balance.”
// It should have a method: transferTo(anotherAccount, amount): which should subtract the
// amount from the account balance and add it to the given anotherAccount and return the
// updated balance, if amount is less than the balance, otherwise output “Amount
// exceeded balance.”
// It should have a static method: identifyAccounts(accountFirst, accountSecond) which
// gets two accounts and identifies if they are the same or not comparing all fields.
// It should have toString method.



// 3. Write classes: Person, Student, Staff.
// Person should have: firstName, lastName, gender, age.
// It should have appropriate getters and setters.
// It should have a method: toString().
// Student is inherited from Person. It should have program(array of strings), year, fee.
// It should have appropriate getters and setters.
// It should have method: passExam(program, grade). Student should contain the data
// about its programs and exams. passExam will update that data, so if student passed all
// the exams(grade is great or equal to 50), its year should be increased by one.
// It should have a toString method.
// Teacher is inherited from Person. It should have program(string), pay.
// It should have appropriate getters and setters.
// It should have a toString method.


// ex 1
// Create an Author+ class and a Book class.
// Author should have: name, email, gender.+
// It should have appropriate getters and setters.
// It should have a toString method.+

// Book should have: title, author(Author), price, quantity.+
// It should have appropriate getters and setters.
// It should have a method: getProfit(), which calculates
// the profit from the book based on
// the price and quantity.
// It should have a toString method.




//ex1
class Author {
	constructor(name,email,gender){
		this.name = name;
		this.email = email;
		this.gender = gender;
	}

	get name(){
		return this._name;
	}
	set name(value){
		this._name=value;
 	}
 	get email(){
		return this._email;
	}
	set email(value){
		this._email=value;
 	}
 	get gender(){
		return this._gender;
	}
	set gender(value){
		this._gender=value;
 	}
    toString = () => {
    	return `Author: ${this.name}, e-mail: ${this.email}, gender:${this.gender}`
    }
}

let author1 = new Author('Oscar Wilde', 'oscar@gmail.com', 'male')
let author2 = new Author('Sarah Williams', 'sarah@gmail.com', 'female')


class Book {
	constructor(title,author,price,quantity){
		this.title = title;
		this.author = author;
		this.price = price;
		this.quantity = quantity
	}

	get title(){
		return this._title;
	}
	set title(value){
		this._title=value;
	}
			
	get author(){
		return this._author;
	}
	set author(value){
		this._author=value;
	}	
	get price(){
		return this._price;
	}
	set price(value){
		this._quantity=value;
	} 
	get quantity(){
		return this._quantity;
	}
	set quantity(value){
		this._quantity=value;
	}
}

let book1 = new Book ('title1', 'author1',500,12)
console.log(author1)


