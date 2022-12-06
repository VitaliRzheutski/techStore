"use strict";

const {db} = require('./server/db')
const app = require("./server");
const PORT =1337;

db.sync().then(function(){
      app.listen(PORT, () =>
      console.log(`studiously serving silly sounds on port ${PORT}`)
    )
    })
    

