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


app.put('/usuarios/:id', async (req,res) =>{
    const id = req.params.id
    const {nick, email, password } = req.body

    const updatedUser = await prisma.user.update({
        where: { id },
        data: {
            nick,
            email,
            password
        }
    })
    res.send(200).json("Usuário atualizado com sucesso")
})

app.delete('/usuarios/:id', async (req,res) =>{
    const id = req.params.id

    await prisma.user.delete({
        where: { id }
    })

    res.send(200).json("Usuário deletado com sucesso")
})
app.listen(3000,() => console.log('Server is running on port 3000'))