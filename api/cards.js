import express from 'express';
import { PrismaClient } from '@prisma/client';  
const prisma = new PrismaClient();
const app = express();
app.use(express.json());        

app.get('/cards-add', async (req,res) =>{
    const allCards = await prisma.card.findMany();
    res.json(allCards);
})

app.post('/cards-add', async (req,res) =>{
    const {name, description, image } = req.body;

    const newCard = await prisma.card.create({
        data: {
            name,
            description,
            image
        }
    });

    res.json(newCard);
})

app.put('/cards-add/:id', async (req,res) =>{
    const id = req.params.id;
    const {name, description, image } = req.body;

    const updatedCard = await prisma.card.update({
        where: { id },
        data: {
            name,
            description,
            image
        }
    });
    res.status(200).json("Card updated successfully");
})

app.delete('/cards-add/:id', async (req,res) =>{
    const id = req.params.id;

    await prisma.card.delete({
        where: { id }
    });

    res.status(200).json("Card deleted successfully");
}
)
app.listen(3000, () => console.log('Server is running on port 3000'));