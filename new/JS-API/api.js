let response;

fetch("http://localhost:3000/").then((data)=>
    data.json()).then( (datas => {
        console.log(datas)
        // response = JSON.parse(datas)
})).catch(
    error => console.log(error)
)


console.log(response);