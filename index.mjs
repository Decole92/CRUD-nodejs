import postsRoutes from './routes/posts.mjs'
import express from 'express';
import bodyParser from 'body-parser';

const PORT = 8000




const app = express()

app.use(bodyParser.json());


app.use('/posts', postsRoutes);

app.get('/', (req, res) => res.send('Hello from Homepage.')

)

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`))