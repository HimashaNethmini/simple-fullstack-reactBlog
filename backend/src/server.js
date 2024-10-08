import express from 'express'

//fake db for now
let articlesInfo = [{
    name: 'learn-react',
    upvotes:0,
}, {
    name: 'learn-node',
    upvotes:0,
}, {
    name: 'mongodb',
    upvotes:0,
}]

//creating a new express app for the project
const app = express();
app.use(express.json());

//create an upvode endpoint
app.put('/api/articles/:name/upvote', (req,res) => {
    //what artciles need to be upvote
    const { name } = req.params;
    //find the artcile with that name
    const article = articlesInfo.find(a => a.name === name);
    if(article) {
        article.upvotes += 1;
        res.send(`The ${name} article now has ${article.upvotes} upvotes`);
    } else {
        res.send('That article doesn\'t exist');
    }

});

//make the express listen
const PORT = app.listen(8000, () => {
    console.log('Server is listening on', PORT)
})