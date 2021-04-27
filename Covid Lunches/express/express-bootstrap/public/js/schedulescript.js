
var schedule_table = [[1, "02/01/20",  "2:00 am", 0],
                      [3, "02/01/20",  "2:00 am", 1],
                      [2, "05/01/20",  "4:00 pm", 1],
                      [4, "02/01/21",  "6:00 pm", 2]];

/*Add an alert if there is a late pickup */
function addAlerts(){

    var scheduleTable = document.getElementById("pickup-table");
    
    var rows = scheduleTable.getElementsByTagName("tr");
    for(var i = 1; i < rows.length; i++){
        console.log('Checking alerts to row #' + i);

        var row_id = rows[i].cells[0].innerText;
        var row_status = rows[i].cells[3].innerText;
        if(row_status == "Late"){
            document.getElementById('Alerts').insertAdjacentHTML('beforebegin', '<div class="alert alert-danger alert-dismissible"> \
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> \
            <strong> Warning: </strong> Entry ' + row_id + ' Has not been picked up!</div>');
        }
    }
}

/*Add in the contents for the schedule table */
function addTableContents(){

    /*Add to table based on how many entrees in schedule*/
    var table_size = schedule_table.length
    for(i = 0; i < table_size; i++){

        console.log('Adding the ' + (i + 1) + 'th entree to table');

        /*Should be able to access entrees the same way */
        var entry_id = schedule_table[i][0];
        var entry_date = schedule_table[i][1];
        var entry_time = schedule_table[i][2];
        var entry_status = schedule_table[i][3];

        document.write("<tr>");
        document.write('<td id="schedule_id">'+entry_id+'</td>');
        document.write('<td>'+entry_date+'</td>');
        document.write('<td>'+entry_time+'</td>');

        /*status: write a dot based on value*/
        if(entry_status == 0){
            document.write('<td id="schedule_status" class="dot complete"> Received Pickup </td>');
        }
        else if(entry_status == 1){
            document.write('<td id="schedule_status" class="dot incomplete"> Late </td>');
        }
        else{
             document.write('<td id="schedule_status" class="dot"> Awaiting Pickup </td>');
        }

        document.write("</tr>");
    }
}