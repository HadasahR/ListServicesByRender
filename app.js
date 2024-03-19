const  express= require('express')
const bodyParser =require('body-parser')
const app = express()
app.use(bodyParser.json())

app.get('', (req, res) => {
    res.status(200).send('😍👍❤')
})
const sdk = require('api')('@render-api/v1.0#ja8rb1jlsxhh7qu');

sdk.auth('rnd_bXtDF8Qz8ONlFqehv0RlztJK9Lft');
sdk.getServices({limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));


app.listen(3001, () => {
    console.log(`my app is listening in http://localhost:3001`);
})