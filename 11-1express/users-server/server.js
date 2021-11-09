const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const id = 1;
const persons = [
    
];


const app = express();
app.use(cors());


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.status(200).json({ 'persons': persons })
})

app.post('/', (req, res) => {
    const find = persons.find(person => req.body.email === person.email);
    if (find) {
        return res.status(404).send('user exist')
    }

    const person = {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        id: id++
    }

    persons.push(person)
    return res.status(209).json({ user: person })
})

app.delete('/:userId', (req, res) => {
    console.log(req.params.userId)
    const { userId } = req.params;
    let find = persons.filter(person => req.params.userId === person.id);
    console.log('find:',find,'persons:',persons)
    res.send('ok')
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})