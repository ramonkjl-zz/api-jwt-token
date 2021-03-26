import mongoose from 'mongoose'

const uri = 'mongodb+srv://ramon_teste:32251049@ramon.lxiex.mongodb.net/API_DE_TESTE?retryWrites=true&w=majority'
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB is Connected"))
    .catch(err => console.log("Connection with MongoDB failed"))

mongoose.Promise = global.Promise

export default mongoose