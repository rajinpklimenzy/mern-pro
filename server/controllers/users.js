import express from 'express';
import mongoose from 'mongoose';
import user from "../models/user.js";
import fetch from 'node-fetch';

export const createUser = async (req, res) =>{

    
    const { firstname, lastname, email, password, confirmPassword } = req.body;
    
    const newUser = await user({ firstname, lastname, email, password, confirmPassword })
    

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

};

export const test = async (req, res) =>{

    
    const { firstname, lastname, email, password, confirmPassword } = req.body;
    
   
    

    try {
       let todo = {
        userId: 123,
        title: "loren impsum doloris",
        completed: false
    };
    
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
      .then(json => console.log(json));
      
        res.status(201).json(json);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

};