const express = require ('express');
const app = express();

app.set('view engine', 'ejs')

let data_h="hello coder";
let data_p="hello are you ??";

let data_for=[11,22,33,44,55,66,77]

let obj = {
    header: data_h,
    parf: data_p,
    data_for: data_for  
}


app.get('/', (req, res) => {
    res.render("index", obj)
})

app.get('/data', (req, res) => {
    res.render('data')
})

app.listen(8000)