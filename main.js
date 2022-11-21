// 1.
const { app, 
  shell,
  ipcMain,
  BrowserWindow } = require('electron');

const fs = require("fs");
const { parse } = require("csv-parse");
//const csv = require('fast-csv');
const data = []

// 2.
let window;


app.on('ready', () => {
  // 4.
  window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  window.loadFile('index.html');

  //.pipe(csv.parse({ headers: true }))
  fs.createReadStream("./FileList01.csv")
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on('error', error => console.error(error))
    .on('data', row => data.push(row))
    .on('end', () => console.log("data"));
    //;
    //.on("data", function (row) {  
  //});

  window.webContents.on('did-finish-load', () => {
    window.webContents.send('plotElements',data);
  });
});
