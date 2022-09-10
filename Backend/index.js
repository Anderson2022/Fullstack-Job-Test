const { application } = require('express');
const express = require('express')
const server = express();
const db = []
server.use(express.json())




application.listen(21260, () => {
console.log(`express started at http://localhost:3000` )
})