
// which route is this pulling from??






async function build_dropdown()
{
    let home_url = "/ddl";
    const home_response = await fetch(home_url);
    const unique_stock  = await home_response.json();
    // appending the list to the dropdown
    for (let i = 0; i < unique_stock.length; i++) {
        text = unique_stock[i]
        const section = document.querySelector('#selDataset')
        option = document.createElement("option")
        option.setAttribute("value", text)
        option.textContent = `${text}`
        section.append(option)
    };
};

async function main() 
{
    build_dropdown();

    let home_url = "/stock";
    const home_response = await fetch(home_url);
    const data = await home_response.json();
   
    var stockticker = data[0];



// // build chart since 
// async function chartbuild()
// {
//     let home_url = "/stock";
//     const home_response = await fetch(home_url);
//     const data = await home_response.json();
   
//     var stockticker = data[0];

//     var trace1 =  {
//         x: [Xp],
//         y: [y],
//         type: 'scatter',
//         label: [stock_id + "History"],
//         color: "blue"
//     };
    
//     var trace2=  {
//         x: [Xp],
//         y: [y_learned],
//         type: 'scatter',
//         label: [stock_id + "Mathmatical Model"],
//         color: "red"
//     };
    
//     var trace3=  {
//         x: [future_x],
//         y: [y_predict],
//         type: 'scatter',
//         label: [stock_id + "Future Predictions"],
//         color: "green"
//     };
    
//     var chart = [trace1, trace2, trace3];

//     var layout = {title:'S&P 500 Materials Sector Price Predictions'};
    
//     Plotly.newPlot('myDiv', chart, layout);

// }; 
};
let data = {}      
main();
