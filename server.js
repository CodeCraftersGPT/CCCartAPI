// all our user rest api code will be here.
// get the instance of express router
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890', password: '$A123456'},
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', phone: '0987654321', password: '$B123456'},
    { id: 3, name: 'Jim Doe', email: 'jim@example.com', phone: '1234567890', password: '$C123456'}
];

app.get('/api/users', (req, res) => {
    res.json(users);
}
);

app.post('/api/users', (req, res) => {
    const { name, email, phone, password } = req.body;
    const id = users.length + 1;
    users.push({ id, name, email, phone, password });
    res.status(201).json({ id, name, email, phone, password });
}
);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
}
);





