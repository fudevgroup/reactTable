import React, { Component } from 'react';
import TableInput from './TableInput';

export default class TableRow extends Component {
    constructor(props){
        super(props);
        this.state = {...props.data,isOnEdit:false};
    }

    onEdit = () =>{
        if (this.state.isOnEdit){
            const row = {...this.state};
            delete row.isOnEdit;
            this.props.onSave(row);
        }
        this.setState({isOnEdit: !this.state.isOnEdit});
    }

    onDelete = () =>{
        this.props.onDelete(this.props.data.id);
    }

    onChange = ({target:{name,value,type,checked}}) =>{
        if (type==="checkbox"){
            this.setState({[name]:checked})
        }
        else {
            this.setState({[name]: value})
        } 
    }

    render () {
        const {schema} = this.props;
        const {isOnEdit} = this.state;
        return (
            <tr>
                {Object.keys(schema).map(_key=>{
                    return isOnEdit ?
                    <TableInput
                    key={_key}
                    name={_key}
                    {...schema[_key]}
                    onChange={this.onChange}
                    value={this.state[_key]||''}
                    />:
                    <TableCell key={_key} type={schema[_key].type} value={this.state[_key]} />
                })}
                <td>
                    <button onClick={this.onEdit}>{isOnEdit?'Save':'Edit'}</button>
                    <button onClick={this.onDelete}>Delete</button>
                </td>
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
