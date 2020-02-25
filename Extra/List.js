import React,{Component} from 'react';

const items=["rutu", "jaya", "ankita"];

class List extends Component
{
    render()
    {
        return(
        <ol>{items.map((item, index)=><li key={index}>{item}</li>)}</ol>
        )
    }
}

export default List