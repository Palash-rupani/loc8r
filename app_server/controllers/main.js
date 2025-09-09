/*GET HOMEPAGE*/
const index=(req,res) =>{
    res.render('index',{title:'wpm project'});
};
 module.exports = {
    index,
 };