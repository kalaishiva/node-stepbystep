const app = require('./app');

const { PORT } = process.env
    //process.env.PORT

app.listen(PORT, () => "Server is running in 4000")