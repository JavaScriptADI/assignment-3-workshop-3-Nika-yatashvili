// write your code in this directory

// task 1 

for(let i = 1; i<=10; i ++) {
    console.log(i)
}

// task2 
for(let x = 10; x>=1; x--) {
    console.log(x)
}

// task 3 
// 50 is yvela mteli ricxvis jamia sum_i
// when i=2 then sum=3; i=3 ; sum = 6 ; i=4 ; sum= 10...
let sum = 0;
for (let i = 1; i <= 50; i++) {
    sum += i;
}
console.log(sum);

// task 4 

// 5 iteracia: 0;2;4;6;8
for (let i = 0; i < 10; i += 2) {
    console.log(i);
}

// task7 
for(let z = 1; z<=100; z++) {
    if(z>27)
        break
    console.log(z)
}


// task10 
console.log("all even numbers task 10")
for(let q = 1; q<=1000; q++) {
    if(q % 2 == 0) {
        console.log(q)

    }

    }

    // task11 
    console.log("task 11 divisible 3 or 5")
    for(let d = 1; d<=1000; d++) {
        if(d % 3 ==0 || d % 5 ==0) {
            console.log(d)
        }
    }

    // task12 
    console.log("task 11 divisible 3 and 5") 
    for(let a = 1; a<=1000; a++) {
        if(a % 3 ==0 && a % 5 ==0) {
            console.log(a)
        }
    }

// task 13 14 15 ? ((