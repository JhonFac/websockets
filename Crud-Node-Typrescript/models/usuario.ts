import { db } from '../db/conect';
import { DataTypes } from "sequelize";

const Usuario = db.define('Usuario' ,{
    nombre : { type:DataTypes.STRING },
    email : { type:DataTypes.STRING },
    cel : { type:DataTypes.TINYINT },
    estado : { type:DataTypes.BOOLEAN }
})

export default Usuario