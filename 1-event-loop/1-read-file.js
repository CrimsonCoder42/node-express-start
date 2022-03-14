const { readFile } = require('fs'); 

console.log("Started a first task");

// Check file Path 

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return 
    }
    console.log(result)
    console.log('complete first task')
})

console.log('starting next task')