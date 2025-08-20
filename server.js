import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())


app.get('/usuarios', async (req,res) =>{
    const allUsers = await prisma.user.findMany()
    res.json(allUsers)
})

app.post('/usuarios', async (req,res) =>{
    const {nick, email, password } = req.body

    const newUser = await prisma.user.create({
        data: {
           nick,
            email,
            password
        }
    })

    res.json(newUser)
})

app.listen(3000,() => console.log('Server is running on port 3000'))