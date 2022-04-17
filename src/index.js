
const express=require("express");
const app=express();
const cors=require("cors");
const port=process.env.PORT || 8080;
const connect=require("./config/db");
const residentController=require("./controller/resident.controller");
const flatController=require("./controller/flat.controller");
const blockController=require("./controller/block.controller");
const managerController=require("./controller/manager.controller");
app.use(express.json());

app.use(cors({origin:"*"}));


app.use("/flat",flatController);
app.use("/block",blockController);
app.use("/resident",residentController);
app.use("/manager",managerController);
app.listen(port,async()=>{
    try {
        connect();
        console.log(`http://localhost:${port}`)
    } catch (error) {
        console.log(error.message);
    }

})