import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }))


app.get('/test', (req, res) => {
    res.json(req.query)
})

app.listen(8081, () => {
    console.log('listening on port 8081')
})