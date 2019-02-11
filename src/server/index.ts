import express from 'express';

const app = express();
app.use(express.static('dist/webapp'));

const port: number = +process.env.PORT || 3000;
const host: string = process.env.HOST || 'localhost';

app.listen(port, host, () => {
  console.log(`Server up at http://${host}:${port}/ !`);
});

export default app;
