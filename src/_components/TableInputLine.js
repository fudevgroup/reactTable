import React,{Component} from 'react';
import TableInput from './TableInput';

export default class TableInputLine extends Component {

    state = {

    };


    onChange = ({target:{name,value,type,checked}}) =>{
        if (type==="checkbox"){
            this.setState({[name]:checked})
        }
        else {
            this.setState({[name]: value})
        } 
    }

    onClickAdd = () =>{
        const {props:{onAdd,schema},state} = this;
        if (Object.keys(schema).every(_key=>schema[_key].required ? (state[_key] || '') !== '' : true))
            onAdd(state);
    }

    render() {
        const {schema} = this.props;
        return (
            <>
                {Object.keys(schema).map(_key=>{
                    return <TableInput
                    key={_key}
                    name={_key}
                    {...schema[_key]}
                    onChange={this.onChange}
                    value={this.state[_key]||''}
                    />
                })}
                <td><button onClick={this.onClickAdd}>Add</button></td>
            </>
        )
    }
}