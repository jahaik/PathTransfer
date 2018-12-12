#target photoshop  
main();  
function main(){  
var jpgFolder = Folder.selectDialog("Please select the jpg folder");  
if( jpgFolder == null) return;  
var tifFolder = Folder.selectDialog("Please select the tif folder");  
if( tifFolder == null) return;  
var fileList = jpgFolder.getFiles("*.jpg");  
for(var a in fileList){  
    var JPG = fileList[a];  
    var tif = File( tifFolder + "/" + fileList[a].name.toString().replace(/jpg$/i,'tif'));  
    if(!tif.exists) continue;  
    open(JPG);  
    open(tif);  
    //needs amending with your action name and actionset  
    doAction("Transfer Path from JPG to Tiff","Jeremy's Awesome Actions ™");  
    }  
}; 