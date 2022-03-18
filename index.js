
var ctx = document.getElementById("myChart").getContext("2d");
let delayed;

//Gradient Fill
let gradient = ctx.createLinearGradient(0,0,0,400)
gradient.addColorStop(0,"rgb(158,118,46)");
gradient.addColorStop(1,"rgb(233,202,135)");

const labels = [
    '23-feb ',
    '24-feb',
    '25-feb',
    '26-feb', 
    '27-feb', 
    '28-feb',
    '1-mar',
    '2-mar'
]

const data = {
    labels,
    datasets: [{
        label:'Valor de la accion de metabrick', 
        data:[100.00,116.00,113.00,114.00,114.50,106.00,105.00,105.00, ],
        fill:true,
        backgroundColor:gradient,
        borderColor:'rgb(233,202,135)',
        color:'rgb (255,255,255)',
        pointBackgroundColor:"#000",
        tension:.3,

    }]
}

const config = {
    type:"line",
    data: data,
    options:{ 
        radius:5,
        hitRadius:30,
        responsive:true,
        animation: {
            onComplete: () => {
              delayed = true;
            },
            delay: (context) => {
              let delay = 0;
              if (context.type === 'data' && context.mode === 'default' && !delayed) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
              }
              return delay;
            },
          },
        scales:{
            y:{    
                              
                suggestedMin: 90,
                suggestedMax: 130,
                ticks: {
                    callback: function (value,){
                        return "$" + value 
                    }
                    
                }   
            }          
        },
    }
}
    


const myChart = new Chart(ctx, config);
   
   


