module.exports = (sequelize, DataTypes)=>{
    const Task = sequelize.define('task',{
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
            type:DataTypes.TEXT
        }
    });

    return Task
}