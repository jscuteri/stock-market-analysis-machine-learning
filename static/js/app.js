async function build_dropdown()
{
    let home_url = "/get_asset_ids";
    const home_response = await fetch(home_url);
    const unique_stock  = await home_response.json();

    // appending the list to the dropdown
    for (let i = 0; i < unique_stock.length; i++) 
    {
        text = unique_stock[i];
        const section = document.querySelector('#selDataset');
        option = document.createElement("option");
        option.setAttribute("value", text);
        option.textContent = `${text}`;
        section.append(option);
    };
};

async function Submit()
{
    let select     = document.getElementById('selDataset');
    let asset_id   = select.options[select.selectedIndex].text; 
    get_asset_by_asset_id(asset_id);
};

async function get_asset_by_asset_id(asset_id)
{
    let home_url        = "/get_asset_by_asset_id/" + asset_id;
    const home_response = await fetch(home_url);
    const graph_data    = await home_response.json();
    chartbuild2040(asset_id, graph_data);
    chartbuild2050(asset_id, graph_data);
};

function chartbuild2040(asset_id, graph_data)
{
    let future_x2050_bucket   = [];
    let y_predict2050_bucket  = [];   
    let y_predict_bucket      = [];
    let future_x_bucket       = [];
    let y_learned_bucket      = [];
    let y_bucket              = [];
    let xp_bucket             = [];  

    let _2022Price = -1;
    let _2040Price = -1;
    let _2050Price = -1;

    for (let i = 0; i < graph_data.length; i++) 
    {
        id              = graph_data[i].id;
        asset_id        = graph_data[i].asset_id;
        future_x2050    = graph_data[i].future_x2050;
        y_predict2050   = Number(graph_data[i].y_predict2050);
        y_predict       = Number(graph_data[i].y_predict);
        future_x        = graph_data[i].future_x;
        y_learned       = Number(graph_data[i].y_learned);
        y               = Number(graph_data[i].y);
        xp              = graph_data[i].xp;

        if(!isNaN(y) && y > 0)
        {
            _2022Price = Math.round(Number(y));
        };

        if(!isNaN(y_predict) && y_predict > 0)
        {
            _2040Price = Math.round(Number(y_predict));
        };

        if(!isNaN(y_predict2050) && y_predict2050 > 0)
        {
            _2050Price = Math.round(Number(y_predict2050));
        };      

        future_x2050_bucket.push(future_x2050);
        y_predict2050_bucket.push(y_predict2050);
        y_predict_bucket.push(y_predict);
        future_x_bucket.push(future_x);
        y_learned_bucket.push(y_learned);
        y_bucket.push(y);
        xp_bucket.push(xp);
    };

     var trace1 =  
     {
         x: xp_bucket,
         y: y_bucket,
         type: 'scatter',
         name: asset_id + " History",
         color: "blue"
     };
    
     var trace2 =  
     {
         x: xp_bucket,
         y: y_learned_bucket,
         type: 'scatter',
         name: asset_id + " Mathmatical Model",
         color: "red"
     };
    
     var trace3 =  
     {
       x: future_x_bucket,
         y: y_predict_bucket,
         type: 'scatter',
         name: asset_id + " Future Predictions",
         color: "green"
     };
    
    var chart = [trace1, trace2, trace3];

    var layout = 
    {
        title: asset_id + ' 2040 Price Predictions',
        xaxis: 
        { 
            showticklabels: false,
            title: 
            {
                text: 'Date Range: 2004 - 2040',
                font: 
                {
                  family: 'Courier New, monospace',
                  size: 18,
                  color: '#000000'
                }
            }
        }
    };
    
    Plotly.newPlot('myDiv', chart, layout);

    document.getElementById('todayPrice2040_1').innerHTML="March 7, 2022 Price: $"  + _2022Price.toString();
    document.getElementById('futurePrice2050_1').innerHTML="Estimated 2040 Price: $" + _2040Price.toString();
    document.getElementById('todayPrice2040_1').removeAttribute("hidden");
    document.getElementById('futurePrice2050_1').removeAttribute("hidden");

    //
    //
    //
    //2050 Plot
    //
    //
    //

    var trace4 =  
    {
        x: xp_bucket,
        y: y_bucket,
        type: 'scatter',
        name: asset_id + " History",
        color: "blue"
    };
   
    var trace5 =  
    {
        x: xp_bucket,
        y: y_learned_bucket,
        type: 'scatter',
        name: asset_id + " Mathmatical Model",
        color: "red"
    };
   
    var trace6 =  
    {
      x: future_x2050,
        y: y_predict2050,
        type: 'scatter',
        name: asset_id + " Future Predictions",
        color: "green"
    };
   
   var chart = [trace1, trace2, trace3];

   var layout = 
   {
       title: asset_id + ' 2050 Price Predictions',
       xaxis: 
       { 
           showticklabels: false,
           title: 
           {
               text: 'Date Range: 2004 - 2050',
               font: 
               {
                 family: 'Courier New, monospace',
                 size: 18,
                 color: '#000000'
               }
           }
       }
   };
   
   Plotly.newPlot('myDiv2', chart, layout);

   document.getElementById('todayPrice2040_2').innerHTML="March 7, 2022 Price: $"   + _2022Price.toString();
   document.getElementById('futurePrice2050_2').innerHTML="Estimated 2050 Price: $" + _2050Price.toString();
   document.getElementById('todayPrice2040_2').removeAttribute("hidden");
   document.getElementById('futurePrice2050_2').removeAttribute("hidden");

}; //end function

function chartbuild2050(graph_data)
{
     //let home_url = "/get_asset_by_asset_id/" + asset_id;
     //const home_response = await fetch(home_url);
     //const data = await home_response.json();
   
     var stockticker = data[0];

     var trace1 =  
     {
         x: Xp,
         y: y,
         type: 'scatter',
         label: [stock_id + "History"],
         color: "blue"
     };
    
     var trace2=  
     {
         x: Xp,
         y: y_learned,
         type: 'scatter',
         label: stock_id + "Mathmatical Model",
         color: "red"
     };
    
     var trace3=  
     {
       x: future_x,
         y: y_predict,
         type: 'scatter',
         label: stock_id + "Future Predictions",
         color: "green"
     };
    
    var chart = [trace1, trace2, trace3];

    var layout = {title:'S&P 500 Materials Sector Price Predictions'};
    
    Plotly.newPlot('myDiv', chart, layout);
}; 

async function main()
{
    build_dropdown();
};

main();