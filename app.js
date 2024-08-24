const express = require('express');
let morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/Blog');

const app = express();

// db url
let mongoUrl = "mongodb+srv://khinenwe:khine1234@cluster0.j6l35.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoUrl).then(() => {
    console.log('connected to Db')
    app.listen(3000, () => {
        console.log('app is running on port 3000');
    })
}).catch((error) => {
    console.log(error)
})

app.set('views', './views')
app.set('view engine', 'ejs')

// package name - morgan
app.use(morgan('dev'))
app.use(express.static('public'))

app.get('/add-blog', async (req, res) => {
    let blog = new Blog({
        title : "blog title 3",
        intro : "blog intro 3",
        body : "blog body 3"
    });

    await blog.save();
    res.send('blog saved')
})

app.get('/single-blog', async (req, res) => {
    let blog = await Blog.findById('66c9c2e2f21730559f4f06c7');
    res.json(blog);

})
app.get('/', async (req, res) => {

    let blogs = await Blog.find().sort({createdAt: -1})
    console.log(blogs);
    res.render('home', {
        blogs,
        title: "Home"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About"
    })
})


app.get('/contact', (req, res) => {
    res.render('contact', {
        title: "Contact"
    })
})


app.use((req, res) => {
    res.status(404).render('404page', {
        title: "404 Not found"
    });
})

