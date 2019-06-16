import React from 'react';


const StudentItem = (props) => {
  return (
        <div>
            
            <img src={props.gif} />
            <lable>{studentname}</lable>
            <lable>{campusname}</lable>

        </div>
      
      
    
  )
};

export default StudentItem;