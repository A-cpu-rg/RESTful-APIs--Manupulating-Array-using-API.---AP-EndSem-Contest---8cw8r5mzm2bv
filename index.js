const express = require('express')
const app = express();
app.use(express.json())


let numberArray = [];

// GET:
app.get('/sum', (req, res) => {
    const {num , arr} = req.body
    if (!num || !arr.length === 0){
        return res.status(200).json({message:"arr is empty"})
    } 
});

// POST: 
app.post('/add', (req, res) => {
    const {num , arr} = req.body;
    try{
        if(!num){
            return res.status(400).json({message:"missing number field"})
        }
        if (arr){
            return res.status(200).json({arr:arr})
        }
        if(num === ""){
            return res.status(400).json({message:"Invalid input num should be a number "})
        }
    }catch(err){
        console.error(err)
        return res.status(500).json({message:"Internal server errror"})
    }
});


// PUT:
app.put('/update', (req, res) => {
    const {num , index} = req.body;
    if(!num || !index.length ===5){
        return res.status(400).json({message:"Invalid input Ensure num is a number and index is valid"})
    } 
    if(index===0){
        return res.status(200).json({message:"arr is updated"})
    }
    index.push(numberArray)
});


// DELETE: 
app.delete('/delete/:index', (req, res) => {
    const {arr} = req.body;
    if(arr === arr.isEmpty){
        return res.status(200).json({message:"arr is deleted"})
    }
    try{
        const {num , index} = req.body;
        if(!num || !index){
            return res.status(400).json({error:"Invalid index"})
        }
    }
});



const PORT= 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
module.exports = { app, numberArray };