server.get('/', (req,res) => {
    return res.json(db)
});

server.post('/', (req,res) => {
    const { body } = req
    db.push(body)
});

server.put('/', (req,res) => {
    return res.json(db)
});

server.delete('/:id', (req,res) => {
    return res.json(db)
});

server.listen(3000, () => {
    console.log('Servidor esta funcionando');
});
