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
    buildCharts(asset_id, graph_data);
    get_description_for_asset_id(asset_id);
};

function buildCharts(asset_id, graph_data)
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

function get_description_for_asset_id(asset_id)
{
    myObject = { 'DIA': "The DIA Exchange Traded Funds (ETF) follows the price and performance of the Dow Jones Industrial Average (DJIA) Index. An exchange-traded fund (ETF) is an investment that's comprised of other investments, like stocks. It's similar to a mutual fund, but ETFs are traded on an exchange.  Notable companies that are apart of the DIA are: Apple, American Express, Home Depot, Coco-Cola, Mcdonalds, Visa and Walmart.", 
                 'IWM': "IWM is an exchange-traded fund (ETF) that tracks the performance of the Russell 2000 Index. This index tracks select U.S. companies with a smaller market capitalization . The average weighted market cap of the Russell 2000 company was $3.13 billion as of January 2022.  Notable companies that are apart of IWM are: AMC, AVIS Budget, Asana, BJ's Wholesale Club and Texas Roadhouse.", 
                 'QQQ': "QQQ is an Invesco Exchange Traded Fund (ETF) that tracks the Nasdaq 100.The Nasdaq-100 Index (NDX) is a collection of the largest 100 non-financial companies in the world listed on the Nasdaq exchange.  Notable companies that trade are a part of the QQQ are: Adobe, Amazon, Apple, Microsoft, Pepsi and Tesla. ",
                 'SPY': "The SPDR S&P 500 is an exchange-traded fund (ETF) that was created to provide an investment vehicle that produces returns roughly in line with the S&P 500 Index before expenses.The S&P 500 index is composed of U.S. companies across all Global Industry Classification Standard (GICS) sectors with an unadjusted market capitalization of $8 billion or greater. Each company in the index must also have had positive earnings in the most recent quarter and over the most recent four quarters.  Notable companies that are apart of the SPY are: Meta Platforms (Facebook), Apple, Google, JP Morgan, Tesla, Disney, Netflix, Nike, Walmart and Chipotle",
                 'XLB': "XLB DeXLB is an exchange-traded fund (ETF) that tracks the performance of construction materials, metals mining, chemicals and manufacturing companies that trade on the S&P 500.  Notable companies apart of XLB are: Sherwin-Williams, Dow, Linde, Nucor and Freeport-McMoran.scription",
                 'XLE': "XLE is an exchange-traded fund (ETF) that tracks the performance of the energy companies that trade on the S&P 500.  Notable companies apart of XLE are: Exxon Mobil, Chevron, Philipps 66, Kinder Morgan and Schlumberger.",
                 'XLF': "XLF is an exchange-traded fund (ETF) that tracks the performance of the financial services companies that trade on the S&P 500.  Notable companies apart of XLF are: Berkshire Hathaway, JP Morgan, Citi, American Express, Morgan Stanley and Goldman Sachs.",
                 'XLI': "XLI is an exchange-traded fund (ETF) of S&P 500 companies from the following industries: aerospace and defense; industrial conglomerates; marine; transportation infrastructure; machinery; road and rail; air freight and logistics; commercial services and supplies. Notable companies that are apart of XLI are: 3M, General Electric, Union Pacific, Lockheed Martin and Boeing.",
                 'XLK': "XLK is an exchange-traded fund (ETF) that tracks the performance of technology companies in the S&P 500.  Notable companies apart of XLK are: Apple, Microsoft, Adobe, Intel, PayPal and NVIDIA.",
                 'XLP': "XLP is an exchange-traded fund (ETF) that tracks the performance of consumer staples companies in the S&P 500. Notable companies apart of XLP are: Coco-Cola, Proctor and Gamble, Pepsi, Costco, Walmart and Altria.",
                 'XLU': "XLU is an exchange-traded fund (ETF) that tracks the performance of utility companies in the S&P 500. Notable companies apart of XLU are:  NextEra Energy, Duke Energy, Dominion Energy, Exelon and American Water Works.",
                 'XLV': "XLY is an exchange-traded fund (ETF) that tracks the performance of health care companies in the S&P 500. Notable companies apart of XLV are:  UnitedHealth Group, Johnson & Johnson, Merck, Thermo Fisher, AbbVie and Pfizer.",
                 'XLY': "XLY is an exchange-traded fund (ETF) that tracks the performance of consumer discretionary companies in the S&P 500. Notable companies apart of XLY are:  Amazon, Mcdonalds, Nike, Target, Booking Holdings, Starbucks, Home Depot and Lowe's."};
                 
     description = myObject[asset_id];

     document.getElementById('description').innerHTML = description;
};

async function main()
{
    build_dropdown();
};

main();