import React,{Component} from 'react';
import TableInput from './TableInput';

export default class TableInputLine extends Component {

    state = {

    };


    onChange = ({target:{name,value,type,checked}}) =>{
        debugger
        if (type==="checkbox"){
            this.setState({[name]:checked})
        }
        else {
            this.setState({[name]: value})
        } 
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
                {/* <td><button onClick={this.onClickAdd}>Add</button></td> */}
            </>
        )
    }
}