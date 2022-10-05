'use strict'

const tbody = document.getElementById('tbody')
const searchInputId = document.getElementById('searchId');
const searchInputName = document.getElementById('searchName');
const searchInputEmail = document.getElementById('searchEmail');
const searchInputBody = document.getElementById('searchBody');

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => {
        let tableRow
        for (let i = 0; i < data.length; i++) {
            tableRow = document.createElement('tr');
            tableRow.innerHTML = `
                <td id="id">${data[i].id}</td>
                <td id="name">${data[i].name}</td>
                <td  id="email">${data[i].email}</td>
                <td id="body">${data[i].body}</td>
            `
            tbody.appendChild(tableRow);
        }
        const id = document.querySelectorAll('#id');
        const name = document.querySelectorAll('#name');
        const email = document.querySelectorAll('#email');
        const body = document.querySelectorAll('#body');
        searchInputId.addEventListener('input', () => {
            id.forEach(id => {
                if (id.textContent.includes(searchInputId.value)) {
                    id.parentElement.style.display = ""
                } else {
                    if (searchInputId.value < 0 || searchInputId.value > 500) {
                        const empty = document.getElementById('empty');
                        empty.innerHTML = "Search is Empty Id";

                        setTimeout(() => empty.style.display = "none", 3000);
                    }
                    id.parentElement.style.display = "none"
                }
            });
        })
        searchInputName.addEventListener('input', () => {
            name.forEach(name => {
                if (name.textContent.includes(searchInputName.value.toLowerCase())) {
                    name.parentElement.style.display = ""
                } else {
                    name.parentElement.style.display = "none"
                }
            });
        })
        searchInputEmail.addEventListener('input', () => {
            email.forEach(email => {
                if (email.textContent.toLowerCase().includes(searchInputEmail.value.toLowerCase())) {
                    email.parentElement.style.display = ""
                } else {
                    email.parentElement.style.display = "none"
                }
            });
        })
        searchInputBody.addEventListener('input', () => {
            body.forEach(body => {
                if (body.textContent.toLowerCase().includes(searchInputBody.value.toLowerCase())) {
                    body.parentElement.style.display = ""
                } else {
                    body.parentElement.style.display = "none"
                }
            });
        })
    })
    .catch(err => console.error(err))
