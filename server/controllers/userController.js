const mongoose = require('mongoose')

const Model = require('../models/userModel');
const Service = require('../services/userServices')
const bcrypt = require('bcrypt')

exports.user_get = async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.user_one = async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.create = async (req, res) => {
    let memType = ''
    if(req.body.membershipType)
        memType = req.body.membershipType;
    else 
    memType = 'basic';
    const data = new Model({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        isAdmin: req.body.isAdmin,
        membershipType: memType
    })
    try {
        let errorMessage = Service.validateInput(req)
        if (errorMessage !== '') {
            throw new Error(errorMessage);
        }
        let dataToSave = await data.save();
        const accessToken = Service.generateAccessToken({ user: req.body.name })
        const refreshToken = Service.generateRefreshToken({ user: req.body.name })
        res.status(200).json({email: dataToSave.email, name: dataToSave.name, password: dataToSave.password, isAdmin: dataToSave.isAdmin, membershipType: dataToSave.membershipType, _id: dataToSave._id,__v: dataToSave.__v, accessToken: accessToken, refreshToken: refreshToken})
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.edit = async (req, res) => {
    try {
        let errorMessage = Service.validateInput(req)
        if (errorMessage !== '') {
            throw new Error(errorMessage);
        }
        if (typeof req.body.password === 'string') {
            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(req.body.password, salt)
            req.body.password = hashPassword
        }
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.delete = async (req, res) => {
    try {
        const user = req.body
        const id = req.params.id;
        const dbUser = await Model.findById(id)
        if (bcrypt.compareSync(user.password, dbUser.password) && user.email === dbUser.email) {
            const data = await Model.findByIdAndDelete(id)
            res.send(`Document with ${user.email} has been deleted..`)
        } else {
            throw new Error('Invalid email or password')
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.find = async (req, res) => {
    try {
        const user = req.body
        const dbUser = await Model.findOne({ email: user.email })
        if (bcrypt.compareSync(user.password, dbUser.password) && user.email === dbUser.email) {
            const accessToken = Service.generateAccessToken({ user: req.body.name })
            const refreshToken = Service.generateRefreshToken({ user: req.body.name })

            res.json({ id: dbUser.id, isAdmin: dbUser.isAdmin, name: dbUser.name, membershipType: dbUser.membershipType, accessToken: accessToken, refreshToken: refreshToken })
        }
        else {
            throw new Error('Invalid Username or Password')
        }
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}