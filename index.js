require('dotenv').config()
const express = require('express')
// import express from 'express'
//dono syntax hi h express ko import krne ka 
const app = express()
//app ko express se banaya
//app is an instance of express
const port = 3000
//computer me bahut sare virtual port hote hai 
//server ko port ki jarurat hoti hai for listning jaha aapka man h vaha listen kare yaha eg. 3000 pe kiya hai
app.get('/', (req, res) => {
    // /ek home route h vaha pe aap listen karo agr vaha koi bhi request aati h to ham callback denge 
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Hello Twitter!')
})

app.get('/login', (req, res)=> {
    res.send('<h1> login please </h1>')
    //dubara se run krna hoga as hotreloading   
})

//app ke ander  express ke saari functionalities le li hai 
// app.listen(port, () => {
//     //listen method kisi port me hai to us port pe ab listen bhi to krna hoga islliye .listen ka use krte hai 
//   console.log(`Example app listening on port ${port}`)
// })
app.listen(process.env.PORT, () => {
    //listen method kisi port me hai to us port pe ab listen bhi to krna hoga islliye .listen ka use krte hai 
  console.log(`Example app listening on port ${port}`)
  
})

//server ka kaam hota h continoulsy listen krne ka 
// ab aapne ek server bana diya jo slash pe jaate h vha listen krta h or /twitter pe bhi listen krta h
// or koi agr vaha jaate h to usko response bhi send krta hai  

//matlab mere localhost:3000 pe ye hello world print hoga display hoga 
// http://localhost:3000/twitter pe hwllo twitter dega 