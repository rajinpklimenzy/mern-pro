import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import express from 'express';
import mongoose from 'mongoose';
import user from "../models/user.js";
import fetch from 'node-fetch';

export const signin = async (req, res) => {
    const {email ,password } = req.body;
    try{

       const existingUser = await user.findOne({email});
       if(!existingUser) return res.status(404).json({message:"User does not exist"});
       const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
       if(!isPasswordCorrect){
           return res.status(400).json({message:"Password does not match"});
       }
       


    }catch(err){


    }
};

export const signup = async (req, res) => {

};

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