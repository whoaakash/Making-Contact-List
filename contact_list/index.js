const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('Views', path.join(__dirname, 'Views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

/*
//Middleware 1
app.use(function (req, res, next) {
    console.log('Middleware 1 is called');
    next();
});

//Middleware 2
app.use(function (req, res, next) {
    console.log('Middleware 2 is called');
    next();
});
*/

var contactList = [
    {
        name: "Ankit",
        phone: "2158685465"
    },
    {
        name: "Shiv",
        phone: "2685185652"
    },
    {
        name: "Bob",
        phone: "4564858551"
    },
];

app.get('/', function (req, res) {
    return res.render('home',
        {
            title: "Contacts List",
            contact_list: contactList
        });
});
app.get('/practice', function (req, res) {
    return res.render('practice', { title: "New Page" });
});

app.post('/create-contact', function (req, res) {
    contactList.push(req.body);
    return res.redirect('/');
});


app.listen(port, function (err) {
    if (err) {
        console.log('Error in running the server');
    }
    console.log("Server running on port: ", port)
})