


updateNews();
updateGrayscale();
updateWhale();
updateMarketcup();
function updataTable (name ,data)
{
    var table = document.getElementById(name).getElementsByTagName('tbody')[0];
    var newsData = data[name];
    for (var i=0;i<newsData.length ;i++)
    {

        var row = table.insertRow(table.rows.length);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = '<a href="' +  newsData[i]['link'] + '">'+newsData[i]['title']+'</a>';

    }

}

function updateNews ()
{
    let request = new XMLHttpRequest();
    var url = "https://script.google.com/macros/s/AKfycbw1cZzkhGUX3tDug4mGA20fTTq7fIU0xxORqgNHCgYZW8KndEA/exec?sheet=all";
  request.open('GET', url);
  request.responseType = 'text';
  request.onload = function() {
        var jsonStr = JSON.parse(request.response);
        console.log(jsonStr);
        updataTable("coindesk",jsonStr);
        updataTable("theblock",jsonStr);
        updataTable("cointelegraph",jsonStr);
        updataTable("decrypt_co",jsonStr);
        updataTable("newsbtc",jsonStr);
        updataTable("bitcoin_com",jsonStr);
   
    }
    request.send();


}
function updateWhale()
{
    let request = new XMLHttpRequest();
    var url = "https://script.google.com/macros/s/AKfycbyWFnH8LpsKoqYflklICLhDG5--xrTdfwtlZfMsxjBS6-z-V4c/exec?action=whale";
    request.open('GET', url);
    request.responseType = 'text';
    request.onload = function() {
        var jsonStr = JSON.parse(request.response);
        console.log(jsonStr);
        var grayScaleData = jsonStr['whale'];
        var table = document.getElementById("whale").getElementsByTagName('tbody')[0];
        for (var i=0;i<grayScaleData.length ;i++)
        {
            var row = table.insertRow(table.rows.length);
            row.insertCell(0).innerHTML =grayScaleData[i]['createat']
            row.insertCell(1).innerHTML =grayScaleData[i]['fulltext']
         
        }
      
    
    }
    request.send();

}
function updateGrayscale()
{
  
    let request = new XMLHttpRequest();
    var url = "https://script.google.com/macros/s/AKfycbyWFnH8LpsKoqYflklICLhDG5--xrTdfwtlZfMsxjBS6-z-V4c/exec?action=grayscale";
    request.open('GET', url);
    request.responseType = 'text';
    request.onload = function() {
        var jsonStr = JSON.parse(request.response);
        console.log(jsonStr);
        var grayScaleData = jsonStr['grayscale'];
        var table = document.getElementById("grayscale").getElementsByTagName('tbody')[0];
        for (var i=0;i<grayScaleData.length ;i++)
        {
            var row = table.insertRow(table.rows.length);
            row.insertCell(0).innerHTML =grayScaleData[i]['symbol']
            row.insertCell(1).innerHTML =grayScaleData[i]['total holdings']
            row.insertCell(2).innerHTML =grayScaleData[i]['total holdings(usd)']
            row.insertCell(3).innerHTML =grayScaleData[i]['holdings(per share)']
            row.insertCell(4).innerHTML =grayScaleData[i]['public market (per share)']
            row.insertCell(5).innerHTML =grayScaleData[i]['premium rate']
            row.insertCell(6).innerHTML =grayScaleData[i]['close time']
            row.insertCell(7).innerHTML =grayScaleData[i]['24h change']
            row.insertCell(8).innerHTML =grayScaleData[i]['7D  change']
            row.insertCell(9).innerHTML =grayScaleData[i]['30D change']
        }
      
    
    }
    request.send();

}
function updateMarketcup ()
{
    let request = new XMLHttpRequest();
    var url = "https://script.google.com/macros/s/AKfycbyWFnH8LpsKoqYflklICLhDG5--xrTdfwtlZfMsxjBS6-z-V4c/exec?action=marketcup";
    request.open('GET', url);
    request.responseType = 'text';
    request.onload = function() {
        var jsonStr = JSON.parse(request.response);
        console.log(jsonStr);
        var grayScaleData = jsonStr['marketcup'];
        var table = document.getElementById("marketcup").getElementsByTagName('tbody')[0];
        for (var i=0;i<grayScaleData.length ;i++)
        {
            var row = table.insertRow(table.rows.length);
            row.insertCell(0).innerHTML =grayScaleData[i]['moves']
            row.insertCell(1).innerHTML =grayScaleData[i]['rank']
            row.insertCell(2).innerHTML =grayScaleData[i]['name']
            
            row.insertCell(3).innerHTML = '<img src="' +  grayScaleData[i]['imgpath'] + '"></img>';   
            row.insertCell(4).innerHTML =grayScaleData[i]['marketcup']
            row.insertCell(5).innerHTML =grayScaleData[i]['price']
            row.insertCell(6).innerHTML =grayScaleData[i]['24h change']
            row.insertCell(7).innerHTML =grayScaleData[i]['1d change']
            
        }
      
    
    }
    request.send();


}
