let n = 5;
for(let i =0; i <= n; i++) {
    let str = '';
    
for(let j =0; j < n- i; j++) {
   str = str + " \t";
}

for(let j =0; j < 2 * i +1; j++) {
    str = str + "*\t";
}
console.log(str);
    }
