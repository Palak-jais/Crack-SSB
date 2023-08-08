import React from 'react';
const BackgroundImageComponent = () => {
  const myStyle = {
    backgroundImage: "url('../public/soldier.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '300px',  
  };
  return (
    <div style={myStyle}>
      
    </div>
  );
};

export default BackgroundImageComponent;
