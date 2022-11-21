const { ipcRenderer } = require('electron');


var outerDiv = document.getElementById("BoardContainerDiv");

var boardDiv = document.createElement("div");


var cols = 4*15;
var cellWidthHeight = 20;

boardDiv.setAttribute("style","width: "+(cols*cellWidthHeight).toString()+"px;height: "+(cols/2*cellWidthHeight).toString()+"px;");


for(var i=0;i<cols/2;i++){
    for(var j=0;j<cols;j++){
        let cellDiv = document.createElement("div");
        cellDiv.setAttribute("style","width: "+(cellWidthHeight).toString()+"px;height: "+(cellWidthHeight).toString()+"px;outline: 1px solid;float: left;");
        boardDiv.appendChild(cellDiv);
    }
}
outerDiv.appendChild(boardDiv);


itemsContainerDiv = document.getElementById("itemsImportedFromCSV");

ipcRenderer.on('plotElements', (event, params) => {
    //alert("received something");
    
    if (params) {
        
        console.log("received params:");
        console.log(params);
        var FileName='';
        for(let i=0;i<params.length;i++){
            FileName = params[i][0];
            FileExtension = FileName.split('.')[1];
            let aDiv = document.createElement("div");
            aDiv.innerHTML = FileName;
            itemsContainerDiv.appendChild(aDiv);
        }


        console.log("RUNTIME ARRIVED HERE 04");
    }
});