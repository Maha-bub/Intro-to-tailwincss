function parallelogramArea(){
    const base=getInputById('base');
    const height=getInputById('height');

    const Area=base*height;
    //show area result for console
    console.log('area of the parallelogram', Area);

    //show area result
    setInnerTextById('result',Area);

    

    
}

function  getInputById(inputFieldId){
    const inputField=document.getElementById(inputFieldId)
    const inputfieldValue=inputField.value;
    const inputValue=parseFloat(inputfieldValue);
    //Console.log(inputVlaue)
    return inputValue;
}



function setInnerTextById(elementId,Area){
    const element=document.getElementById(elementId);
    element.innerText=Area;
    
}