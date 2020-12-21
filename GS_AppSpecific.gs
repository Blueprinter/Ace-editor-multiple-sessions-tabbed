function getTheFileContent(po) {
  var content,fileExt,fileType;
  /*
    po.fileName - file name with file extension of gs - html -json
  */
  
  //Logger.log('po: ' + JSON.stringify(po))
  fileType = po.fileName.slice(po.fileName.indexOf(".")+1);
  //Logger.log('fileType',fileType)

  switch(fileType) {
    case "html":
      content = HtmlService.createHtmlOutputFromFile(po.fileName).getContent();
      break;
    case "gs":
      content = 'function doGet() {\n  return HtmlService.createTemplateFromFile("index").evaluate().setTitle("Tabs Page");\n  //\
This is sample content not the actual file content\n\  //To get file content use the Apps Script API\n}"';
      break;
  }
  
  //Logger.log("content: " + content)
  return content;
}
