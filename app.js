let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let cors = require('cors')
let dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 9000
let mongo = require('mongodb')
let MongoClient = mongo.MongoClient;
//let mongoUrl = process.env.MonogUrl;
let mongoUrl = process.env.MongoLiveUrl;
let db;

//middleware (supporting lib)
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
// app.use(cors())

app.get('/', (req, res) => {
    res.send('Express Server default')
})

app.get('/home/:collections', (req, res) => {
    db.collection(req.params.collections).find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

app.get('/actionmovies', (req, res) => {
    db.collection('actionmovies').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

app.get('/comedymovies', (req, res) => {
    db.collection('comedymovie').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

app.get('/netflixoriginals', (req, res) => {
    db.collection('netflixoriginals').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

app.get('/scifimovies', (req, res) => {
    db.collection('scifimovies').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

app.get('/thrillermovies', (req, res) => {
    db.collection('thrillermovies').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

//Connection with db
MongoClient.connect(mongoUrl, (err, client) => {
    if (err) console.log(`Error While Connecting`);
    db = client.db('netflix');
    app.listen(port, (err) => {
        if (err) throw err;
        console.log(`Express   Server listening on port ${port}`)
    })
})


/*
app.get('/restaurants/:id',(req,res) => {
  let id = req.params.id;
  let state = req.query.state
  let country  = req.query.country
  console.log(`>>>>>state>>>`,state)
  console.log(`>>>>>country>>>`,country)
  res.send(id)

  // db.collection('restaurants').find().toArray((err,result) => {
  //   if(err) throw err;
  //   res.send(result)
  // })
})
*/