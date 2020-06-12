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
	if (typeof value !== 'string') {
      throw new Error ("Name is not valid")
    } else {
      this._name = value;
	}
 	}
 	get email(){
 		return this._email;
    }
	set email(value){
    if (value ==='string' || value.includes('@')) {
 		return this._email=value;
    }else { 
    	throw new Error ("email is not valid")
 	}
 }
 	get gender(){
		return this._gender;
	}
	set gender(value){
    if (value ==='male' || value === 'female' ) {
 		return this._gender=value;
    }else { 
    	throw new Error ("gender is not valid");
 	}
 }
    toString = () => {
    return `Author: ${this.name}, e-mail: ${this.email}, gender:${this.gender}`
    }
}

let author1 = new Author('Oscar Wilde', 'oscar@gmail.com','male')
let author2 = new Author('Sarah Williams', 'sarah@gmail.com','female')
let author3= new Author('212','kjsdfa@skj','female')


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
    if (value instanceof Author) {
      this._author = value;
    } else {
      throw new Error("Author is not valid");
    }}	
	get price(){
		return this._price;
	}
	set price(value){
	if (typeof value !== 'number') {
     	throw new Error ("Name is not valid")
    } else {
      this._price = value;
	}} 
	get quantity(){
		return this._quantity;
	}
	set quantity(value){
	if (typeof value !== 'number') {
     	throw new Error ("Name is not valid")
    } else {
      this._quantity = value;
	}
	}
	profit = ()=>{
    	return this.price * this.quantity;
    }

	toString = () => {
    	return `Book: ${this.title}, Author: ${this.author},
    	Price: ${this.price}, Quantity ${this.quantity}, Profit ${this.profit()}`
    }
 }   
let book1 = new Book ('title1', author1,500,12)
console.log(author1)

