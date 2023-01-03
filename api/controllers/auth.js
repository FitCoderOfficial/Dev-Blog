import {db} from "../db.js"
import bcryt from 'bcryptjs'


export const register = (req, res)=> {
    const q = "SELECT * FROM users WHERE email = ? OR username ?"

    db.query(q,[req.body.email, req.body.name], (error, data)=>{
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("이미 존재하는 이름입니다!")

        //bcryt패키지로 암호화 시켜 출력함
        const salt = bcryt.genSaltSync(10) 
        const hash = bcryt.hashSync(req.body.password, salt)
    
        const q = "INSERT INTO users(`username`, `email`, `password` VALUES (?)"
        const values = [
            req.body.username,
            req.body.email,
            hash, 
        ] 

        db.query(q, [values], (err, data) => {
            if(err) return res.json(err)
            return res.status(200).json("계정이 생성되었습니다")
        })
    })
}
export const login = (req, res)=> {
    
}
export const logout = (req, res)=> {
    
}