const { request } = require('express')
const Annotations = require('../models/AnnotationData')

module.exports = {

    async read(req, res) {
        const annotations = await Annotations.find()

        return res.json(annotations)
    },

    async create(req, res) {
        console.log(req.body)
        const {title, notes, priority} = req.body

        if (!notes || !title) {
            return res.status(400).json({error: "Title/notes required!"})
        }
        const annotation = await Annotations.create({
            title,
            notes,
            priority
        })

        return res.json(annotation)
    },

    async delete(req, res) {
        const { id } = req.params

        const annotationDeleted = await Annotations.findByIdAndDelete({_id : id})

        if (annotationDeleted) {
            return res.json(annotationDeleted)
        } else {
            return res.status(401).json({error: "Could not find any register"})
        }
    }

}