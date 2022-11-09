import express from 'express'
import {routerTasks} from './routes/taskRoutes.js'
import {routerComments} from './routes/commentsRoutes.js'
import cors from 'cors'

const app = express();
const PORT = 3000;

app.use(cors({origin: '*'}))
app.use('/api/tasks', routerTasks)
app.use('/api/comments', routerComments)

app.listen(PORT, () => {
    console.log(`¡¡Server listening on port ${PORT}!!`) 
})