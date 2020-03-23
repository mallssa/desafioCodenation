const express = require('express');
const bodyparser = require('body-parser'); 

const app = express();
app.use(require("./route"));

app.set("view-engine","ejs")
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: false
}));


app.listen(3000,() => {
    //console.log("Alguma coisa");
});






