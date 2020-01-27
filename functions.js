const returnResp = (res, data)=>{
    console.log(data);
    res.status(201).json(data);
}
module.exports ={
    returnResp
}