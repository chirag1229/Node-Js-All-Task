// error handling data

// const express = require('express');
// const app = express();
// // middleWare
// const m1 = (req, res, next) => {
//     console.log('m1');
//     next();
// }

// const m2 = (req, res, next) => {
//     throw new Error("error in m2 middleware");
//     console.log('m2');
//     next();
// }

// const m3 = (req, res, next) => {
//     console.log('m3');
//     next();
// }

// const eh = (error, req, res, next) => {
//     console.error(error);
//     res.status(501).json({
//         "error": String(error)
//     })
// }

// app.use(m1)
// app.use(m2)
// app.use(m3)
// app.use(eh)

// app.listen(8000)


// middlewear example

const express = require('express');
const app = express();

const m1 = (req, res, next) => {
    console.log('m1');
    next();
}

const m2 = (req, res, next) => {
    console.log('m2');
    next();
}

const m3 = (req, res, next) => {
    console.log('m3');
    next();
}

app.use(m1)
app.use('/data', m2)
app.use('/get-data', m3)


app.get('/', (req, res) => {
    console.log("root api hit");
    res.json({ data: "root" })
})

app.get('/data', (req, res) => {
    console.log("data api hit");
    res.json({ data: "data" })
})

app.get('/get-data', (req, res) => {
    console.log("get-data api hit");
    res.json({ data: "get-data" })
})

app.listen(8000)