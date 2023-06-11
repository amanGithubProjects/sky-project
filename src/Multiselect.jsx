import React, { useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';


const Multiselected = () => {
 
const [state, setState] = useState(["Jharkhand","West-Bengal","Delhi","Maharastra","Odisa","Karnatka","M-P","U-P"]);
  return(

    <Multiselect
    placeholder='e.g- Rajasthan'
    onSearch={(e) => {console.log(e)} }
    isObject={false}
    onRemove={(e) => {console.log(e)}}
    onSelect={(e) => {console.log(e)}}
    options={state}
    showCheckbox
    selectedValues = {["Jharkhand","West-Bengal"]}
    // disablePreSelectedValues
    />
  )
  };
  
  export default Multiselected;