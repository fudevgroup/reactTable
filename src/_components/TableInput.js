import React from 'react';

const TableInput = ({displayName,type,required,onChange,value,name}) => {
    switch(type){
        case String:
            return <td><input value={value} name={name} type="text" placeholder={`${displayName}${required?'*':null}`} onChange={onChange}/></td>
        case Number:
            return <td><input value={value} name={name} type="number" placeholder={`${displayName}${required?'*':null}`} onChange={onChange}/></td>
        case Boolean:
            return <td><input checked={value} name={name} type="checkbox" onChange={onChange}/></td>
    }   
}


export default TableInput;