
// which route is this pulling from??






function OptionChanged(stockticker)
{
    let btnExplore = document.getElementById('btnExplore');

    btnExplore.onclick = function () 
    {
       location.href = "./route=" + stockticker;
    };
    
    stockticker_id();
}

async function main() 
{
    let home_url = "/stock";
    const home_response = await fetch(home_url);
    const data = await home_response.json();
   
    var stockticker_id = data[0];

    let list = [];

    for (let x = 0; x < stockticker.length; x++) 
    {
        let ticker = stockticker[x].stock;
        list.push(stock);
    };
    let unique_stock =[... new Set(list)].sort();

    countryOptionChanged(unique_stock[0]);

    // appending the list to the dropdown
    for (let i = 0; i < unique_stock.length; i++) {
        text = unique_stock[i]
        const section = document.querySelector('#ddlCountries')
        option = document.createElement("option")
        option.setAttribute("value", text)
        option.textContent = `${text}`
        section.append(option)
    };

// build chart since data is already there
    var trace1 =  [{
        x: [Xp],
        y: [y],
        type: 'scatter',
        label: [stock_id + "History"],
        color: "blue"
    },

    var trace2=  [{
        x: [Xp],
        y: [y_learned],
        type: 'scatter',
        label: [stock_id + "Mathmatical Model"],
        color: "red"
    },
    var trace3=  [{
        x: [future_x],
        y: [y_predict],
        type: 'scatter',
        label: [stock_id + "Future Predictions],
        color: "green"
    },
    
    var data = [trace1, trace2, trace3];

    var layout = {
        title:'S&P 500 Materials Sector f'{stock_id} + 'Price Predictions'
    };
    
      Plotly.newPlot('myDiv', data, layout);
};
let data = {}       
main();
