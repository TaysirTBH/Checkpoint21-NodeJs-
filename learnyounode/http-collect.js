const http = require('http');
const bl = require('bl');

const url = process.argv[2];

http.get(url, response => {
    response.pipe((err,data)=> {
        if (err) throw err;
        data = data.toString();
        console.log(data.length);
        console.log(data);
    })
})