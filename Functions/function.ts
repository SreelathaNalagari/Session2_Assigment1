/**
 * FAT ARROW function named employee
 * @param {string} name [description]
 * @param {number} experience  [description]
 */

let employee= (name:string,experience:number) : string => 
{
console.log(`${name} is an employee having ${experience}years experience in IT`);
return `${name},${experience}`;
};

employee("Latha",3);