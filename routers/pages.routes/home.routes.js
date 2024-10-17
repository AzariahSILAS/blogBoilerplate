import express from 'express'

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', {title: 'home page', pageIntro: 'This is the home page', pageDiscription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ea accusantium, fugiat quam error deleniti necessitatibus quidem iure voluptas repudiandae?'})
})

export default router;