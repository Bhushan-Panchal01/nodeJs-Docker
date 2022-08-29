const express = require('express')
const { listStudents } = require('../controller/students/listStudents')
const router = express.Router()

router.get('/students', listStudents)

module.exports = {
    router
}