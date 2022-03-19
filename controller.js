
const showlowercase=(req,res)=>{
    try{
    const data=req.body.data
    //console.log("data: ",data)
    let bigArr=[]
    data.forEach(element => {
        bigArr=bigArr.concat(element)
    });
    console.log(bigArr)
    
    bigArr.forEach(element=>{
        element=element.toLowerCase()
    })

    res.status(200).send("hello world")
    }
    catch(err)
    {
        console.error("problem in showlowercase is: ",err)
        res.status(500).send("problem in showlowercase is: ",err)
    }
}


module.exports={showlowercase}