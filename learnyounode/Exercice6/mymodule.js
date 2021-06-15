const fs = require('fs');
const path = require('path');

module.exports =(dir, ext, cb) => {
    ext = `.${ext}`;
    fs.readdir(dir, (err,list) => {
        if (err) return cb(err);
        const filtered=list.filter(file => path.extname(file) === ext) ;
        return cb(null, filtered);
    });
}
