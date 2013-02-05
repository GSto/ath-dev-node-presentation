
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', { title: 'Athens Developers Node.js Presentation' });
};

exports.controller = function(req, res) {
    res.render('controller', { title: 'Controller'});
}