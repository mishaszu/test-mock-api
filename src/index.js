const express = require('express')
const app = express()
const port = 4000
const R = require('ramda');

const {db} = require('./db');

app.get('/api/hello', (_, res) => {
    res.send('Hello World!');
})

app.get('/api/frameworks', (_, res) => {
    R.pipe(
        R.filter(R.prop('active')),
        R.tap(v => res.json(v))
    )(db.getData('/frameworks'));
});

app.get('/api/frameworks/:framework', (req, res) => {
    try {
        const f = db.getData(`/frameworks/${req.params.framework.toLowerCase()}`);
        const languages = db.getData('/languages');
        const l = Object.entries(languages)
            .filter(
                ([key, value]) =>
                    value.frameworks.some(y => y === f.id)
            ).map(([key, value]) => ({language: key, ...value}));
        res.json({...f, languages: l});
    } catch (e) {
        res.status(404);
        res.send();
    }
})

app.get('/api/languages', (req, res) => {
    const l = db.getData('/languages');
    res.json(l);
});

app.get('/api/languages/:language', (req, res) => {
    try {
        const l = db.getData(`/languages/${req.params.language}`);
        res.json(l);
    } catch (e) {
        res.status(404);
        res.send();
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

