module.exports = {
    //Title: gethomepage
    //Purpose: Renders the starting page of the project. Tests that the homepage renders properly
    gethomepage: (req, res) =>{
        let  data = {
            content: 'Hello world!',
            title: 'Bootstrap example'
        }

        res.render('index.html', data)   
    }
}