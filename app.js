const express = require('express')
const app = express()
const port = 3000;

app.use(express.static('template'))

app.use('/css',express.static(__dirname+'template/css'))

app.use('/js',express.static(__dirname+'template/js'))

app.set('views', './views');
app.set('view engine', 'ejs')

app.get('',(req,res)=>{
    res.render('home')
})


app.listen(port, () => console.log(`App escutando na porta ${port}!`))