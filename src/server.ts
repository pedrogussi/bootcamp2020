import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    return res.json({message: '🦉️ Noseless'})
})

app.listen(3333, () =>{
    console.log('🦉️ Server Started')
})
