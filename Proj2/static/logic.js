Promise.all([
    //@app.route('/teacher_performance')
    // def teacherperformance
    // d3.json('/teacher_performance'),
    d3.json('static/fakeData.json'),  //put Kayla's routes here
    d3.json('static/@app.route("/scores")'),
    d3.json('static/fakeData.json'),
    d3.json('static/fakeData.json')

    // d3.json('@app.route("/retention")'),  //put Kayla's routes here
    // d3.json('@app.route("/scores")'),
    // d3.json('@app.route("/budget")),
    // d3.json('@app.route("/salary")')

])
    .then(([
        teacherTurnoverData,
        performanceData,
        districtBudgetData,
        teacherSalaryData,
    ]) => {


        var drawTeacherTurnoverChart = function () {

            var teacherTurnoverChartJsData = {
                // labels: teacherTurnoverData.map(_=>_.district),
                labels: teacherTurnoverData.district, //teacherTurnoverData.map(_=>_.district),
                datasets: [{
                    // label: 'Teacher Turnover',
                    // https://www.w3schools.com/colors/colors_picker.asp
                    // backgroundColor: 'blue', //color(window.chartColors.red).alpha(0.5).rgbString(),
                    backgroundColor: ['#80aaff', 'red', 'purple', 'orange','green','aqua','dimgrey','coral','magenta','maroon','chocolate','indigo','#80FF00','#003366','deeppink','cadetblue'], //color(window.chartColors.red).alpha(0.5).rgbString(),
                    borderColor: 'blue', //window.chartColors.red,
                    borderWidth: 1,
                    data: teacherTurnoverData.teacherCount
                }]

            };

            // window.onload = function () {
            var ctx = document.getElementById('teacher-turnover-canvas').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: teacherTurnoverChartJsData,
                options: {
                    responsive: true,
                    legend: {
                        display: false,
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Teacher Turnover'
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                min: 0,
                                // Math.max([1, 2, 3, ])
                                // Math.max(1, 2, 3)
                                max: Math.max(...teacherTurnoverData.teacherCount) + 3
                            }
                        }]
                    }
                }
            });

        }
        drawTeacherTurnoverChart();
        // };

        
        var drawPerformanceChart = function () {

            var performanceChartJsData = {
                // labels: performanceData.map(_=>_.district),
                labels: scores.index, //performanceData.map(_=>_.district),
                datasets: [{
                    label: 'Performance Scores',
                    // https://www.w3schools.com/colors/colors_picker.asp
                    // backgroundColor: 'blue', //color(window.chartColors.red).alpha(0.5).rgbString(),
                    backgroundColor: ['#80aaff', 'red', 'purple', 'orange','green','aqua','dimgrey','coral','magenta','maroon','chocolate','indigo','#80FF00','#003366','deeppink','cadetblue'], //color(window.chartColors.red).alpha(0.5).rgbString(),
                    borderColor: 'blue', //window.chartColors.red,
                    borderWidth: 1,
                    data: scores.data
                }]

            };

            // window.onload = function () {
            var ctx = document.getElementById('performance-score-canvas').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: performanceChartJsData,
                options: {
                    responsive: true,
                    legend: {
                        display: false,
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Performance Scores'
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                min: 0,
                                // Math.max([1, 2, 3, ])
                                // Math.max(1, 2, 3)
                                max: Math.max(...scores.data) + 3
                            }
                        }]
                    }
                }
            });
        }
        drawPerformanceChart();

   
        var drawBudgetChart = function () {

            var districtBudgetChartJsData = {
                // labels: performanceData.map(_=>_.district),
                labels: districtBudgetData.district, //performanceData.map(_=>_.district),
                datasets: [{
                    label: 'District Budget',
                    // https://www.w3schools.com/colors/colors_picker.asp
                    // backgroundColor: 'blue', //color(window.chartColors.red).alpha(0.5).rgbString(),
                    backgroundColor: ['#80aaff', 'red', 'purple', 'orange','green','aqua','dimgrey','coral','magenta','maroon','chocolate','indigo','#80FF00','#003366','deeppink','cadetblue'], //color(window.chartColors.red).alpha(0.5).rgbString(),
                    borderColor: 'blue', //window.chartColors.red,
                    borderWidth: 1,
                    data: districtBudgetData.teacherCount
                }]

            };

            // window.onload = function () {
            var ctx = document.getElementById('district-budget-canvas').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: districtBudgetChartJsData,
                options: {
                    responsive: true,
                    legend: {
                        display: false,
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'District Budgets'
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                min: 0,
                                // Math.max([1, 2, 3, ])
                                // Math.max(1, 2, 3)
                                max: Math.max(...districtBudgetData.teacherCount) + 3
                            }
                        }]
                    }
                }
            });
        }
        drawBudgetChart();

   
        var drawSalaryChart = function () {

            var teacherSalaryChartJsData = {
                // labels: performanceData.map(_=>_.district),
                labels: teacherSalaryData.district, //performanceData.map(_=>_.district),
                datasets: [{
                    label: 'Teacher Salary',
                    // https://www.w3schools.com/colors/colors_picker.asp
                    // backgroundColor: 'blue', //color(window.chartColors.red).alpha(0.5).rgbString(),
                    backgroundColor: ['#80aaff', 'red', 'purple', 'orange','green','aqua','dimgrey','coral','magenta','maroon','chocolate','indigo','#80FF00','#003366','deeppink','cadetblue'], //color(window.chartColors.red).alpha(0.5).rgbString(),
                    borderColor: 'blue', //window.chartColors.red,
                    borderWidth: 1,
                    data: teacherSalaryData.teacherCount
                }]

            };

            // window.onload = function () {
            var ctx = document.getElementById('teacher-salaries-canvas').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: teacherSalaryChartJsData,
                options: {
                    responsive: true,
                    legend: {
                        display: false,
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Teacher Salaries'
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                min: 0,
                                // Math.max([1, 2, 3, ])
                                // Math.max(1, 2, 3)
                                max: Math.max(...teacherSalaryData.teacherCount) + 3
                            }
                        }]
                    }
                }
            });
        }
        drawSalaryChart();
   
    });


// This indicates which screen will present by default: Flex option
d3.select('.teacher-turnover').style('display', 'none')
d3.select('.performance-scores').style('display', 'flex')
d3.select('.teacher-salaries').style('display', 'none')
d3.select('.district-budget').style('display', 'none')

d3.select('nav').on('click', (event) => {
    if (d3.event.target.text === 'Turnover') {
        d3.select('.teacher-turnover').style('display', 'flex')
        d3.select('.performance-scores').style('display', 'none')
        d3.select('.teacher-salaries').style('display', 'none')
        d3.select('.district-budget').style('display', 'none')

    } else if (d3.event.target.text === 'Scores') {
        d3.select('.performance-scores').style('display', 'flex')
        d3.select('.teacher-turnover').style('display', 'none')
        d3.select('.teacher-salaries').style('display', 'none')
        d3.select('.district-budget').style('display', 'none')

    } else if (d3.event.target.text === 'Salaries') {
        d3.select('.performance-scores').style('display', 'none')
        d3.select('.teacher-turnover').style('display', 'none')
        d3.select('.teacher-salaries').style('display', 'flex')
        d3.select('.district-budget').style('display', 'none')

    } else if (d3.event.target.text === 'Budget') {
        d3.select('.performance-scores').style('display', 'none')
        d3.select('.teacher-turnover').style('display', 'none')
        d3.select('.teacher-salaries').style('display', 'none')
        d3.select('.district-budget').style('display', 'flex')
    }
})