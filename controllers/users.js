import { v4 as uuidv4 } from 'uuid';

let users = []


export const createUser = (req, res) => {

    const user = req.body;

    //here we descontruct the user object to add an ID to the it and the push it in the users object

    users.push({ ...user, id: uuidv4() });

    res.send(`User with the name ${user.firstName} has been added to the data base`);

};

export const  getUser = (req, res) => {

    const { id } = req.params;
    
    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);

};


export const getUsers = (req, res) => {
    
    res.send(users)
};

export const deleteUser = (req, res) => {
    
    const { id } = req.params;

    users = users.filter((user) => user.id != id)

    res.send();

};

export const updateUser =  (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User with the id ${id} has been updated`)

};
