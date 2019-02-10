import IPerson from '../interfaces/IPerson';

/**
 * 
 * @class Person
 * @implements IPerson
 */

export default class Person implements IPerson {
	
	public name: String;
	public lastname: String;
	public age: Number;
	public email: String;
	

	constructor(name: String, lastname: String, email: String, age: Number) {
		this.name = name;
		this.lastname = lastname;
		this.age = age;
		this.email = email;
	}

	greet(name: string, lastname: string){
		return `Hello, how are you? My name is ${name} ${lastname}`;
	} 
	
}