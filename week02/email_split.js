let myEmail = 'sparta@gmail.com'

let emainInfo = myEmail.split('@')

console.log(emainInfo[0]);
console.log(emainInfo[1]);

let domain = emainInfo[1].split('.');

console.log(domain[0]);
console.log(domain[1]);

let str = myEmail.split('@')[1].split('.')[0]
console.log(str);