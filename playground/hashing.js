const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var passwoed = '123abc!';
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(passwoed, salt, (err, hash) => {
        console.log(hash);
    });
});

var hashedPassowrd = '$2a$10$ulNlVicakLnAccOCLseo6OMpPqz3NwdwrldNicHwGaRLoFzRRHtlS';
bcrypt.compare(passwoed, hashedPassowrd, (err, res) => {
    console.log(res);
});
// var data = {
//     id: 10
// };

// var token = jwt.sign(data, '123abc');
// console.log(token);

// var decode = jwt.verify(token, '123abc');
// console.log('decode', decode);

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id: 4
// };

// var token = {
//     data: data,
//     hash: SHA256(JSON.stringify(data) +  'somesecret').toString()
// }

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed');
// }