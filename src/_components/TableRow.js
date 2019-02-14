import React, { Component } from 'react';

export default class TableRow extends Component {
    render () {
        const {data,schema} = this.props;
        return (
            <tr>
                {Object.keys(schema).map(_key=>{
                    debugger
                    return <TableCell type={schema[_key].type} value={data[_key]} />
                })}
            </tr>
        )
    }
}

const TableCell = ({type,value}) => {
    switch(type){
        case String:
        case Number:
            return <td>{value}</td>
        case Boolean:
            return <td><input checked={value} type="checkbox" disabled/></td>
    }   
}
