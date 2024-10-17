import express from 'express';
import router from './routers/pages.routes/home.routes.js'
const PORT = 8080
const app = express();

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/', router)
app.listen(PORT, () => {
    console.log(`app running on port http://localhost:${PORT}`)
})