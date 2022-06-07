import { Request, Response } from "express"
import { json } from "sequelize/dist";
import Usuario from "../models/usuario";

export const getUsuarios =async (req:Request ,res:Response )=> {
    const usuarios= await Usuario.findAll(); 
    res.json({usuarios})

    // res.json({
    //     msg: 'getUsuarios'
    // })
}

export const getUsuario =async (req:Request ,res:Response )=> {

    const {id} = req.params;    
    const usuarios= await Usuario.findByPk(id); 
    if (usuarios){
        res.json({usuarios})
    }
    else{
        res.status(404).json({
            msg: 'el usuario no existe'
        })
    }
}

export const postUsuario =async (req:Request ,res:Response )=> {

    const {body} = req; 
    
    try {

        const exiEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        });
    
        if(exiEmail){
            return res.status(400).json({
                msg: 'Ya exite el usuario con el correo'+body.email,
            })
        }  

        const usuario = new  Usuario(body);
        await usuario.save();
        res.json(usuario) 
    } catch (error) {
        console.log('error');
        res.status(500).json({
            msg: 'contacte al admistrador',
        })
    }
}

export const putUsuario =async (req:Request ,res:Response )=> {

    const {body} = req;    
    const {id} = req.params;    

    try {

        const updateusuario = await Usuario.findByPk(id);
    
        if(!updateusuario){
            return res.status(404).json({
                msg: 'No exite el usuario con el ID: '+id,
            })
        }  
        
        // opcional para poder validar datos 
        const exiEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        });
    
        if(exiEmail){
            return res.status(400).json({
                msg: 'Ya exite el usuario con el correo: '+body.email,
            })
        }  

        await updateusuario.update(body);
        res.json(updateusuario) 

    } catch (error) {
        console.log('error');
        res.status(500).json({
            msg: 'contacte al admistrador',
        })
    }
}

export const deletUsuario =async (req:Request ,res:Response )=> {

    const {id} = req.params;    

    try {

        const Del_usuario = await Usuario.findByPk(id);
    
        if(!Del_usuario){
            return res.status(404).json({
                msg: 'No exite el usuario con el ID: '+id,
            })
        }  
        
        await Del_usuario.update({estado: false});
        res.json(Del_usuario) 

    } catch (error) {
        console.log('error');
        res.status(500).json({
            msg: 'contacte al admistrador',
        })
    }


    res.json({
        msg: 'deletUsuario',
        id
    })
}

function estado(estado: any, arg1: boolean) {
    throw new Error("Function not implemented.");
}
