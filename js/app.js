$(document).ready(function(){

    // Start Student Couter Section

    var getcountervalues = document.querySelectorAll('.countervalue');
    // console.log(getcountervalues);

    getcountervalues.forEach(function(getcountervalue){
        // console.log(getcountervalue);

        getcountervalue.textContent = 0;

        const updatecounter = function(){

            const getcttarget = +getcountervalue.getAttribute('data-target');
            // console.log(getcttarget);
            // console.log(typeof getcttarget);

            const getcontent = +getcountervalue.innerText;
            // console.log(getcontent);
            // console.log(typeof getcontent);

            const incnumber = getcttarget/100;
            // console.log(incnumber);

            if(getcontent < getcttarget){
                getcountervalue.textContent = getcontent+incnumber;
                setTimeout(updatecounter,50);
            }
        }

        updatecounter();
    });

});



// Start Footer Section
    const getyear = document.getElementById('getyear');
    const getfullyear = new Date().getUTCFullYear();
    getyear.textContent = getfullyear;
// End Footer Section

// Start Gratuate Section
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Myanmar',     8],
          ['Thailand',      2],
          ['Singapore',  4],
          ['Indonesia', 2],
          ['Sirilinka',    8]
        ]);

        var options = {
          title: 'International Students',
          width:400,
          height:300,
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

// End Gratuated Section

// Start login & Sticknote 
    //start login
    $('#openform').click(function(){
        document.getElementById('myform').style.display="block";
    });

    $('#closeform').click(function(){
        document.getElementById('myform').style.display="none";
    });
    
    //end login
// End login & Sticknote 


// 13FN