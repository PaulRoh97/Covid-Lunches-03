
var schedule_table = [[1, "02/01/20",  "2:00 am", 0],
                      [2, "05/01/20",  "4:00 pm", 1],
                      [4, "02/01/21",  "6:00 pm", 2]];

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
        document.write("<td>"+entry_id+"</td>");
        document.write("<td>"+entry_date+"</td>");
        document.write("<td>"+entry_time+"</td>");

        /*status: write a dot based on value*/
        if(entry_status == 0){
            document.write('<td><span class="dot complete"></span></td>');
        }
        else if(entry_status == 1){
            document.write('<td><span class="dot incomplete"></span></td>');
        }
        else{
             document.write('<td><span class="dot\"></span></td>');
        }

        document.write("</tr>");
    }
}