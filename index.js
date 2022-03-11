
var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx,{
    type:"line",
    data:{
        labels: ['23-feb ','24-feb','25-feb','26-feb', '27-feb', '28-feb'],
        datasets: [{
            label:'num datos', 
            data:[100.00,116.00,113.00,114.00,114.50,106.00 ],
            backgroundColor:[
                'rgb(66,134,244)',
                'rgb(74,135,72)',
                'rgb(229,89,50)'
            ],

            borderColor:[
                'rgb(0,0,0)'
            ]

        }]
    },
    options:{ 
        scales:{
            y:{     
                beginAtZero: true                
            }
        }
    }
});