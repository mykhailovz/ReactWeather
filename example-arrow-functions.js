var names = ['Andrew', 'Julie', 'Jen'];

// names.forEach(function(name) {
//     console.log('forEach', name);
// });

// names.forEach((name) => 
//     console.log('arrow function', name)
// );

// var returnMe = (name) => name + '!';
// console.log(returnMe('Andrew'));

// var person = {
//     name: 'Andrew',
//     greet: function() {
//         var that = this;
//         names.forEach(function(name) {
//             console.log(that.name + ' says hi to ' + name);
//         });
//     }
// };

// var person = {
//     name: 'Andrew',
//     greet: function() {
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name);
//         });
//     }
// };


// person.greet();


function add(a, b) {
    return a + b;
}

var add2 = (a, b) => {
    return a + b;
};

var add3 = (a, b) => a + b;


// console.log(add(1, 3));
// console.log(add2(9, 0));
console.log(add3(1, 1));