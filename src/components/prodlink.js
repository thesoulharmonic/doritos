import React from 'react'

function prodLinks(props) { const clickToWin = () => {
    alert(props.alert);
  };
return ( <div>
      <button className="menuButton" onClick={clickToWin}>Reveal your prize!</button>
    </div>
); }

export default prodLinks;