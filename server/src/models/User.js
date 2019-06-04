module.exports = (sequelize, Datatypes) => {
    sequelize.define('User',{
        email:{
            type: Datatypes.STRING,
            uniqe: true
        },
        password: Datatypes.STRING
    })    
}