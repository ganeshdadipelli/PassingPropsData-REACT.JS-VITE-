/*eslint-disable */
import React from 'react'
import ChildComp from '../ChildCompo/ChildComp';
const ParentComp= () =>{
const userData ={
    name:'Ganesh',
    age:28,
    proffesion:'Software Developer'
};

return(
<div className="hello">
    <h1>parent Component </h1>
    <ChildComp user={userData}/>
    
</div>


);
};
export default ParentComp;