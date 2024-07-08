import express from 'express';
const router = express();
import authcontroller from '../Controllers/auth.js';
import getBlogcontoller from '../Controllers/blogdisplay.js';
router.get('/test', function(req, res) {
    res.send('Router Hello World!')
});
//register
router.post('/register',authcontroller.registerauth)
//login
router.post('/login',authcontroller.loginauth)
//blog display
router.get('/blog',getBlogcontoller.getBlogs)

export default router;