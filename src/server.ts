import App from './app';
import * as bodyParser from 'body-parser';
// import loggerMiddleware from './middleware/logger'

// CONTROLLERS
import RouteCars from './routes/car/routes';
import RouteBrand from './routes/brand/routes';
import RouteModels from './routes/models/routes';
import RouteReview from './routes/review/routes';
import RoutePromotion from './routes/promotion/routes';
import RouteEmail from './routes/email/routes';
import RouteFile from './routes/file/routes';

// SET DEFAULT CONFIG
const config = {
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 4200
}

const configBody = {
    limit: "50mb",
    extended: false,
    parameterLimit: 50000
}

const app = new App({
    port: +config.PORT,
    controllers: [
        new RouteCars(),
        new RouteBrand(),
        new RouteModels(),
        new RouteReview(),
        new RoutePromotion(),
        new RouteEmail(),
        new RouteFile()
    ],
    middleWares: [
        bodyParser.urlencoded(configBody),
        bodyParser.json({ limit: configBody.limit })
    ]
});

app.listen();
