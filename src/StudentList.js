import React from 'react';
import StudentItem from './StudentItem';

const StudentList = (props) => {
   
    const studentItems = props.gifs.map((object) => {
      return <StudentItem key={object.id} gif={object.images.preview_gif.url} />
    });
    
  
    return (
      <div className="Student-list">{studentItems}</div>
    );
  };

  export default StudentList;