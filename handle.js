const moment = require('moment');
const SLASH_DMYHMS = 'DD/MM/YYYY HH:mm:ss';
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

function assignment1(no){
var time ={
    date_time_current:moment().format(SLASH_DMYHMS),
    after_date_time_current:moment().add(no, 'days').format('h:mm:ss a'),
    before_date_time_current:moment().subtract(no, 'days').format('h:mm:ss a')};
return time;
}
function assignment2(data) {
    const csvWriter = createCsvWriter({
        path: 'person.csv',
        header: [
          {id: 'name', title: 'Name'},
          {id: 'age', title: 'Age'},
          {id: 'school', title: 'School'},
          {id: 'major', title: 'Major'},
          {id: 'faculty', title: 'Faculty'},
        ]
      });
    const fileCsv = [
        {
          name: data.Name,
          age : data.Age,
          school: data.School,
          major: data.Major,
          faculty: data.Faculty
        }
      ];
    csvWriter
        .writeRecords(fileCsv)
        .then(()=> console.log('The CSV file was written successfully'));
    }

module.exports = {
    assignment1 : assignment1,
    assignment2 : assignment2
}