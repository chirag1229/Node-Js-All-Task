let form = document.querySelector("form")
let tableData = document.querySelector("#tabledata")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let name = event.target.name.value
    let email = event.target.email.value

    let userdata = JSON.parse(localStorage.getItem("Userdata")) || []
    userdata.push({
        name: name,
        email: email
    })

    localStorage.setItem("Userdata", JSON.stringify(userdata))
    displayData()
    event.target.reset()
})

const displayData = () => {
    let userdata = JSON.parse(localStorage.getItem("Userdata")) || []
    finalData = ""
    userdata.forEach((element, index) => {
        finalData += `
        <tr>
            <td>${index + 1}</td>
            <td>${element.name}</td>
            <td>${element.email}</td>
            <td>
            <button onclick="editData(${index})">Edit</button>
            <button onclick="deleteData(${index})">Delete</button>
            </td>
        </tr>
        `
    })
    tableData.innerHTML = finalData
}

const deleteData = (index) => {
    let userdata = JSON.parse(localStorage.getItem("Userdata")) || []
    userdata.splice(index, 1)
    localStorage.setItem("Userdata", JSON.stringify(userdata))
    displayData()
}

const editData = (index) => {
    let userdata = JSON.parse(localStorage.getItem("Userdata")) || []
    userdata[index].name = prompt("Enter Name")
    userdata[index].email = prompt("Enter Email")
    localStorage.setItem("Userdata", JSON.stringify(userdata))
    displayData()
}