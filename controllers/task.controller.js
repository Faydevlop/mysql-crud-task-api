const { where } = require('sequelize');
const db = require('../models');
const Task = db.Task;

exports.create = async(req,res)=>{
    try {
       
        const {title,description} = req.body
        
        
        const task = await Task.create({title,description});
        res.status(201).json(task)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.findAll = async(req,res)=>{
    const task = await Task.findAll()
    res.json(task);
}

exports.findOne = async(req,res)=>{
    const task = await Task.findOne(req.params.id)
    task ? res.json(task) : res.status(404).json({ error: "Task not found" });
}

exports.update = async(req,res)=>{
    const {id} = req.params
    const [update] = await Task.update(req.body,{where:{id}});
    update
        ? res.json({message:'Task updated'})
        : res.status(404).json({error:'Task not found'})
}

exports.delete = async(req,res)=>{
    const {id} = req.params;
    const deleted = await Task.destroy({where:{id}});
    deleted
        ? res.json({message:'Task Deleted'})
        : res.status(404).json({error:'Task not found'})
}