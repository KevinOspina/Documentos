const {Router} = require('express'); //importa una funcion Router, para revovler un objeto
const router = Router();


router.route('/').get((req,res) => res.send('Notes'))

module.exports = router