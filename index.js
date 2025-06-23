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

const githubData = {
  "login": "hiteshchoudhary",
  "id": 11613311,
  "node_id": "MDQ6VXNlcjExNjEzMzEx",
  "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/hiteshchoudhary",
  "html_url": "https://github.com/hiteshchoudhary",
  "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
  "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
  "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
  "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
  "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
  "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
  "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Hitesh Choudhary",
  "company": null,
  "blog": "https://www.youtube.com/c/HiteshChoudharydotcom",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
  "twitter_username": "hiteshdotcom",
  "public_repos": 110,
  "public_gists": 5,
  "followers": 44713,
  "following": 0,
  "created_at": "2015-03-23T13:03:25Z",
  "updated_at": "2025-05-17T16:49:07Z"
}

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

app.get('/github', (req, res) => {
    res.json(githubData)
    // ab is api data ko react me fetch ker skte ho
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