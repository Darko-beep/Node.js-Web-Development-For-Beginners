const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routes/user.route');
const app = express();
require('dotenv').config();
require('./libs/dbConnect');

app.use(express.static("public"));
app.set("view engine", "ejs");

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.get('/', (req, res) => {
   res.render('index', { message: 'Hello From Node.js' });
});

app.use('/users', userRouter);
app.get('/contact', (req, res) => {
  res.render('index', { message: 'The Contact Page' });
});
app.get('/about', (req, res) => {
  res.render('index', { message: 'The About Page' });
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});