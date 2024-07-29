import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

// app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/jokes', (req, res) => {
    const jokelist = [
        {
            id: "1",
            title: "Why don't scientists trust atoms?",
            desc: "Because they make up everything!"
        },
        {
            id: "2",
            title: "Why did the scarecrow win an award?",
            desc: "Because he was outstanding in his field!"
        },
        {
            id: "3",
            title: "Why don't skeletons fight each other?",
            desc: "They don't have the guts."
        },
        {
            id: "4",
            title: "What do you call fake spaghetti?",
            desc: "An impasta!"
        },
        {
            id: "5",
            title: "Why was the math book sad?",
            desc: "Because it had too many problems."
        },
        {
            id: "6",
            title: "Why did the bicycle fall over?",
            desc: "Because it was two-tired."
        },
        {
            id: "7",
            title: "Why can't you give Elsa a balloon?",
            desc: "Because she will let it go."
        },
        {
            id: "8",
            title: "How does a penguin build its house?",
            desc: "Igloos it together."
        },
        {
            id: "9",
            title: "What do you call cheese that isn't yours?",
            desc: "Nacho cheese."
        },
        { 
            id: "10", 
            title: "Why don't programmers like nature?", 
            desc: "It has too many bugs." }
    ];

    res.send(jokelist)
})

app.listen(port, () => {
    console.log(`listening at port ${port}`)
})