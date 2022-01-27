const {appendFile}= require("fs");
var http= require('http');
var express= require("express");
var app= express();
const port= 2900

const courses= [
    {"topic": "math", "location": "london", "price": 100},
    {"topic": "english", "location": "liverpool", "price": 80},
    {"topic": "geography", "location": "oxford", "price": 90},
    {"topic": "art", "location": "bristol", "price": 120},
    ];

const users= [
    {"email": "user@email.com", "password": "mypassword"}, 
    {"email": "user@email.com", "password": "mypassword"},
    {"email": "user@email.com", "password": "mypassword"},
    {"email": "user@email.com", "password": "mypassword"},         
    ]

    app.get("/courses", function (request, response){
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.end (JSON.stringify(courses));
    });

    app.get("/users", function (request, response){
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.end (JSON.stringify(users));
    });

    app.get( function (request, response){
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.status(404).send("Page not found");
    });

       app.listen(2900)
       console.log("Server listening on port 2900");
    