function html2String() 
{
    document.getElementById("htmlOutput").value = '';
    
    var comecoString = 'String minhaPagina ="';
    var finalString = '";';
    var htmlInputText = document.getElementById('htmlInput').value;
    
    var result = htmlInputText.replace(/"/g, '\\"');
    result = result.trim();
    result = result.replace(/\s+/g, " ");
    
    document.getElementById("htmlOutput").value = comecoString + result + finalString;
}	