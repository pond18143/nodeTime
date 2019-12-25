module.exports = function(app){
  const handle = require('./handle');
 
// app.get('/', function (req, res) {
//   var timecurent = ('date_time_current',moment().format(SLASH_DMYHMS))
//   res.send(timecurent)
// })
// app.get('/:n', function (req, res) {
//   var n = req.params;
//   var timenext = ('after_date_time_current',moment().add(n, 'days').format('h:mm:ss a'));
//   res.send(timenext)
// })

// app.get('/:b', function (req, res) {
//   var b = req.params;
//   var timeback = ('before_date_time_current',moment().subtract(b, 'days').format('h:mm:ss a'));
//   res.send(timeback)
// })
app.get('/:n', function (req,res){
  var no = req.params.n;
  var time = handle.assignment1(no);
  res.status(200).send(time)
  })

app.post('/pondcsv',(req,res)=>{
var resual= handle.assignment2(req.body)
  res.status(200).json(resual).toString 
  })

}