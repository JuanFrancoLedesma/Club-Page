//
// ░░░░░░░░▄▄▄██████▀▀██████▄▄▄░░░░░░░░
// ░░░░▄███▀█▄░░░░░▄░░▄░░░░░▄█▀███▄░░░░
// ░░██▀█▄████░░░░░████░░░░░████▄█▀██░░
// ▄█▀▄███████▄▄░▄▄████▄▄░▄▄███████▄▀█▄
// ██░██████████████████████████████░██
// ██░██████████████████████████████░██
// ▀██▀████▀░▀▀█▀░▀▀██▀▀░▀█▀▀░▀████▀██▀
// ░░██▄█▀█▄░░░░░░░░▀▀░░░░░░░░▄█▀█▄██░░
// ░░░░▀███▄▄▄░░░░░░░░░░░░░░▄▄▄███▀░░░░
// ░░░░░░░░▀▀▀██████████████▀▀▀░░░░░░░░

require("dotenv").config();
import mongoose from "mongoose";
import app from "./src/routes";

const PORT = process.env.PORT || 3000

mongoose.connect("mongodb+srv://Mister:mister1234@taekwon.awebaxu.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>console.log('Connected to MongoDb Atlas'))
    .catch((e : any)=>console.log(e.message))

app.listen(PORT, () => console.log(`Server listening in port ${PORT}`));

