
const express=require("express");
const app=express();
const cors=require("cors");
const port=process.env.PORT || 8080;
const connect=require("./config/db");
const residentController=require("./controller/resident.controller");
const flatController=require("./controller/flat.controller");
const blockController=require("./controller/block.controller");

app.use(express.json());

app.use(cors({origin:"*"}));

app.use("/resident",residentController);
app.use("/flat",flatController);
app.use("/block",blockController);

app.listen(port,async()=>{
    try {
        connect();
        console.log(`http://localhost:${port}`)
    } catch (error) {
        console.log(error.message);
    }

})