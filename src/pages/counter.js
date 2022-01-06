import React from 'react';

import { useCount } from './../context/count-context';

const Counter = () => {
    // set dispatch and state count from useCount()
    const count = useCount();
    return (
      <>
        {/* change 0 with count from context */}
        <div className='d-flex ps-3'>
         {count.state.count}
        
          {/* use dispatch for onClick method */}
          <span>
            <button className="count-button border-0 bg-light" onClick={() => count.dispatch({type: 'increment'})} >
              <i className="far fa-heart"></i>
            </button>
          </span>
          {/* <button className="count-button" onClick={() => count.dispatch({type: 'decrement'})}>-</button> */}
        </div>
      </>
    );
  }
  
  export default Counter;