const express = require('express')
const router = express.Router()
const db = require('../../models')
const User = db.User
const Todo = db.Todo

// index
router.get('/', (req, res) => {
  return Todo.findAll({
    raw: true,
    nest: true
  })
    .then((todos) => {
      return res.render('index', { todos })
    })
    .catch((error) => {
      return res.status(422).json(error)
    })
})

module.exports = router