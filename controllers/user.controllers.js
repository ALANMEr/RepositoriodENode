import {response} from 'express'

export const usuarioGet=(req,res=response)=>{
    const {query}=req.query;
    res.json({
        msg:"get Api-Controller"
    })
}

export const usuarioPost = (req, res = response) => {
    const body=req.body;
    res.json({
        msg: "get Api-Controller",
        body
    })
}

export const usuarioPut = (req, res = response) => {
    const {id}=req.params

    res.json({
        msg: "get Api-Controller"
    })
}
export const usuarioDelete = (req, res = response) => {
    res.json({
        msg: "get Api-Controller"
    })
}

