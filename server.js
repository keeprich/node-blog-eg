const express = require('express');
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles');
const app = express(); 


// creating our view engin (ejs)
app.set('view engine', 'ejs')


// calling our routes
app.use('/articles', articleRouter)

// creating the route here
app.get('/', (req, res) => {

    const articles = [{
        title: 'First article',
        createdAt: new Date(),
        description: 'Test description'
    },
    {
        title: 'Second article',
        createdAt: new Date(),
        description: 'Exams description'
    }
]

// res.send("Hello all workes")
res.render('index', { articles: articles })
})

app.listen(5000)