import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

import db from './models';

db.sequelize.sync()
.then(()=>{
    app.listen(port, ()=> {
        console.log('Server listening on port',port);
    })
});