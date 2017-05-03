// function getTemp(location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }


// getTemp('Philadelphia', function(err, temp) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp);
//     }
// });

// function getTempPromise(location) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve(79);
//             reject('City not found');
//         }, 2000);
//     });
// }

// getTempPromise('Philadelphia').then(function(temp) {
//     console.log('promise success', temp);
// }, function (err) {
//     console.log('promise error', err);
// });

function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(`Sum of a and b is ${a+b}`);
        } else {
            reject('a and b should be a number');
        }
    });
}

addPromise(1, 2).then(function(res) {
    console.log(`Case #1`);
    console.log('Corect sum is ', res);
}, function (err) {
    console.log(`We have error {${err}}`);
});

addPromise(1, '2').then(function(res) {
    console.log('Corect sum is ', res);
}, function (err) {
    console.log(`Case #2`);
    console.log(`We have error {${err}}`);
});

addPromise('1', 2).then(function(res) {
    console.log('Corect sum is ', res);
}, function (err) {
    console.log(`Case #3`);
    console.log(`We have error {${err}}`);
});

addPromise('1', '2').then(function(res) {
    console.log('Corect sum is ', res);
}, function (err) {
    console.log(`Case #4`);
    console.log(`We have error {${err}}`);
});