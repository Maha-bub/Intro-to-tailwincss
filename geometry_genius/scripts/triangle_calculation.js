function calculateTriangleArea() {  
    // Get the input values for base and height
    const baseInputData=document.getElementById('triangle_base_input');
    
    const baseinputValue=baseInputData.value;
    const base= parseFloat(baseinputValue);

    const heightInputData=document.getElementById('triangle_height_input');
    const heightInputValue=heightInputData.value;
    const height=parseFloat(heightInputValue);

    console.log(base,height);

    // calculate the areo of triangle
    const area=0.5*base*height;

}
