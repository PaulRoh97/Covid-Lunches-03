module.exports = {
    gethomepage: (req, res) =>{
        let  data = {
            content: 'Hello world!',
            title: 'Bootstrap example'
        }
        
        res.render('index.njk', data)
        
    }
}