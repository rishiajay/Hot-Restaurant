var tableData = require('../data/table-data.js');
var waitingListData = require('../data/waitinglist-data.js');

module.exports = function (app) {

    app.get('/api/tables', function (req, res) {
        res.json(tableData);
    });
    app.get('/api/tables', function (req, res) {
        res.json(tableData);
    });
    app.post('/api/tables', function (req, res) {
        if(tableData.length < 5) {
            tableData.push(req.body);
            res.join(false);
        }
    });

    app.post('/api/clear', function(){
        tableData = [];
        waitingListData = [];

        console.log(tableData);
        console.log(waitingListData);
    })
    
}