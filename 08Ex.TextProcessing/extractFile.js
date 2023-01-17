function extractFile(string){

    //console.log(string);
    let fileNameIndexStart = string.lastIndexOf("\\") + 1;
    let fileExtensionIndexStart = string.lastIndexOf(".") + 1;
    let fileNameIndexEnd = fileExtensionIndexStart - 1;

    let fileName = string.substring(fileNameIndexStart, fileNameIndexEnd);
    let extensionName = string.substring(fileExtensionIndexStart);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extensionName}`)
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');