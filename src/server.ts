import express , { Express } from 'express';
import bodyParser from 'body-parser';
// import { loggerMiddleware } from './middleware/logger';
import router from './routes/author'
// import { notFoundHandler } from './middleware/error';

const app: Express = express();
const PORT = process.env.PORT || 3000;

//examples of builtin middleware there are essential for passing incoming json from the body of request
app.use(express.json());
app.use(bodyParser.json());

// app.use(loggerMiddleware)
app.use("/v1/authors", router)

// app.use(notFoundHandler)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 