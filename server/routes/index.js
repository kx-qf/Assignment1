let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET about us page. */
router.get('/about', indexController.displayAboutPage);

/* GET products page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET contact us page. */
router.get('/contact', indexController.displayContactPage);

// Get Route for the contact login page 
router.get('/login', indexController.displayLoginPage);

// Get Route for displaying the login page
router.post('/login', indexController.processLoginPage);

// Get Route for the contact register page 
router.get('/register', indexController.displayRegisterPage);

// Get Route for displaying the register page
router.post('/register', indexController.processRegisterPage);

// Get to perform user logout
router.get('/logout',indexController.performLogout);


module.exports = router;
