import React, { useState } from 'react';

const Leaves = () => {
    const [leaves, setLeaves] = useState([]);

    return (
        <div>
            <h1>Leaves</h1>
          
            <table>
               <p>Total Leaves for Year - 21 </p>
               <p>Your Leaves</p>
               <li>DATE</li>
               <li>DATE</li>
               <p>Remainig Leaves</p>
            </table>
        </div>
    );
};

export default Leaves;
