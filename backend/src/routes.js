const express = require('express')
const router = express.Router()

const AnnotationController = require('./controllers/AnnotationController')
const ContentController = require('./controllers/ContentController')
const PriorityController = require('./controllers/PriorityController')

//Annotation Routes
router.post('/annotation', AnnotationController.create)
router.get('/annotations', AnnotationController.read)
router.delete('/annotation/:id', AnnotationController.delete)

//Priority Routes
router.get('/priorities', PriorityController.read)
router.post('/priorities/:id', PriorityController.update)

//Content Routes
router.post('/contents/:id', ContentController.update)

module.exports = router

