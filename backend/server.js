const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const webeatoDB = require('./db/webeatoDB')

webeatoDB.connect((err) => {
    if (err) {
        console.log('You have error! => ', err);
    } else {
        console.log('Connect to webeato db successfully.');
        let newUserInsertQuery = 'INSERT INTO `users` VALUES (NULL, "mohammad","ghanavati","webeato","mm-beato","1405/03/10")'

        webeatoDB.query(newUserInsertQuery, (err, result) => {
            if (err) {
                console.log('insert user faild!');
            } else {
                console.log('user inserted.');
            }
        })
    }
})