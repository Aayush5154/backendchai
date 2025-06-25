import express from 'express';
//jab kya h ki js me code hamare kahi saari files me hote hai kahi baar apko usko synchronouly laana hota ha kahi baar asynchronoulsy.
//agr commom js use krna h //to require use karte hai
//agr es6 use karna h to import use karte hai ye thoda asynchronous hota hai
  //type module is used to enable ES6 module syntax
  //ab manifest ko pata h ki saari js file module ki tartah assemble karnni h naki common js ki tarah
const app = express();

const PORT = process.env.PORT || 3000; // to env file se le lo nahi to 3000 maan ke chalo

// app.get('/', (req, res) => {
//   res.send('Server is ready!');
// });

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id : 1,
            title: "General Joke",
            joke: "Why don't scientists trust atoms? Because they make up everything!",
        },
        {
            id: 2,
            title: "Programming Joke",
            joke: "Why do programmers prefer dark mode? Because light attracts bugs!",
        },
        {
            id: 3,
            title: "Math Joke",
            joke: "Parallel lines have so much in common. It’s a shame they’ll never meet.",
        },
        {
            id: 4,
            title: "Physics Joke",
            joke: "Why can't you trust an atom? Because they make up everything!",
        },
    ];
    
    res.json(jokes); 
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
