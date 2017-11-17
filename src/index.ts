import * as express from 'express';
import * as path from 'path';
import * as bp from 'body-parser';
import * as url from 'url';
import api from './routers/api';

const app = express();

app 
    .disable('x-powered-by')
    //uncomment for dev
    .use((req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET, POST, UPDATE, DELETE");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");    
        next();
    })
    .use(bp.urlencoded({ extended: true }))
    .use(bp.json())
    .use('/api', api)
    //to serve dist 
    .use(express.static(path.join(__dirname + '/../dist')))
    .get('/*', (req: express.Request, res: express.Response) => {
        res.sendFile(path.join(__dirname + '/../dist/index.html'));
    });

app.listen(process.env.PORT || 3000, () => {
    console.log(`listening on port ${process.env.PORT || 3000}`);
});