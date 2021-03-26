import mongoose from '../database'
import bcrypt from 'bcryptjs'

interface IUser extends mongoose.Document {
    name: string
    email: string
    password: any
    createdAt: string
}

const UserSchema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

UserSchema.pre<IUser>('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
})

const User: mongoose.Model<IUser> = mongoose.model('User', UserSchema)

export default User