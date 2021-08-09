const mongoose = require('mongoose')

// mongodb+srv://hernanifer:<password>@cluster0.g050l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const dbConfig = 'mongodb+srv://hernanifer:joaquim2009@cluster0.g050l.mongodb.net/annotations?retryWrites=true&w=majority'

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
//Mongoose
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://127.0.0.1:27017/annotations", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log("Conectado ao mongo")
// }).catch((err) => {
//     console.log("Erro ao se conectar: "+err)
// })

module.exports = connection
