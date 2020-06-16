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
	}
	} 
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



//ex 2 

class Account {
	constructor(id,name,balance){
		this._id=id;
		this.name=name;
		this.balance=balance;
	}

	get id(){
		return this_id;
	}

	get name(){
		return this._name;
	}
	set name(value){
		return this._name=value;
	}
	get balance(){
		return this._balance;
	}
	set balance(value){
		return this._balance=value;
	}

	static identifyAccounts(accountFirst,accountSecond){
		  if (accountFirst instanceof Account && accountSecond instanceof Account
           && accountFirst._id === accountSecond._id) {
                return "Same Account"
            } else return "Different Accounts"
        }

	credit(amount){
          this.balance += amount;
          	return this.balance
	}
	debit(amount){
		if (amount>this.balance){
			return `Amount exceeded balance`
		}
			else {
				this.balance-=amount;
				return this.balance
			}
	}
	transferTo(anotherAccount,amount){
		if (amount < this.balance) {
        this.balance -= amount
        anotherAccount.balance += amount
        	return `Transfer Completed`
        } else return `You dont have enough balance`
    }
	toString(){
		return `Your balance is ${this.balance}`
	}
}

let a1 = new Account('00876','Hayk',456300)
let a2 = new Account('00987','Hakob',356000)





//ex3

class Person{
	constructor(firstName,lastName,gender,age){
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.age = age;
}

	get firstName(){
		return this._firstName;
	}
	set firstName(value){
	if (typeof value !== 'string') {
      throw new Error ("Name is not valid")
    } else {
      this._firstName = value;
	}
}
	get lastName(){
		return this._lastName;
	}
	set lastName(value){
	if (typeof value !== 'string') {
      throw new Error ("Surname is not valid")
    } else {
      this._lastName = value;
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
    return `${this.firstName} ${this.lastName}`
    }
}



let p = new Person('Hayk','Nurijanyan','male',27)


class Student extends Person{
	constructor(firstName,lastName,gender,age,program,year,fee){
		super(firstName,lastName,gender,age);
		this.year = year;
		this.program = [];
		this.fee = fee;
		this.data = {};
	}

	get program(){
		return this._program;
	}
	set program(value){
		return this._program = value;
	}

	get year(){
		return this._year;
	}
	set year(value){
		this._year = value;
	}

 	get fee(){
		return this._fee	;
	}
	set fee(value){
		return this.fee
 }
 	passExam =(program,grade) =>{
 		if (grade>=50){
 			this.data[program]=grade;
 			this.year+=1
		} else return `You didn't pass the exam`

 	}

	toString = () => {
 		return `I am a student`
	}
}



let program1 = ['math','logic','phsycology']
let program2 = ['physics','chemistry','english']

let s = new Student('Hayk','Nurijanyan','male',27,program1,2020,455000)

console.log(s)


class Teacher extends Person {
    constructor(args,program, pay) {
        super(...args)
        this.program = program;
        this.pay = pay;
    }
    get program() {
        return this._program
    }
    set program(v) {
        if (typeof v === 'string') {
            this._program = v
        } else throw new Error("PLease enter text")
    }
    get pay() {
        return this._pay
    }
    set pay(v) {
        this._pay = v
    }
    toString() {
        return `Salery: ${this.pay}`
    }
}
