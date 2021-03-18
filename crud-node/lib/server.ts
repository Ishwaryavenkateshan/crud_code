import * as express from 'express'
import * as bodyParser from 'body-parser'
import Routes from './routes'
import * as mongoose from 'mongoose'

var PORT = "3001"
class App {

    public app: express.Application;
    public routesPrv : Routes = new Routes();

    constructor(){
        this.app = express();
        this.config();
        this.routesPrv.routes(this.app)
        this.connectDB()
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static("public"));
    }

    private async connectDB(): Promise<void>{
        await mongoose.connect('mongodb://localhost:27017/crud', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        console.log("db status code --->", mongoose.connection.readyState)
    }

}

new App().app.listen(PORT, ()=>{
    console.log("app listening on port"+ PORT)
})