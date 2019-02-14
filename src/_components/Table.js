import React,{Component} from 'react';
import TableInputLine from './TableInputLine';
import TableHeader from './TableHeader';

class Table extends Component{

    state= {
        rows: [],
        addNew:{}
    }

// onChange = (event) =>{
//     const {name,value,type,checked} = event.target;
    

    onClickAdd = () =>{
        const {rows,addNew} = this.state;
        rows.push(addNew);
        this.setState({rows,addNew:{}});
    }

    render() {
        const {schema} = this.props;
        return <table style={{background: '#FFF',borderRadius:15,padding:20,boxShadow: '0 2px 6px rgba(0,0,0,0.2)'}}>
            <thead>
                <tr>
                    {Object.keys(schema).map(_key=>{
                        return <TableHeader key={_key} displayName={schema[_key].displayName}/>
                    })}
                    <th>Action</th>
                </tr>
                <tr>
                    <TableInputLine schema={schema}/>
                </tr>
            </thead>
            <tbody>
                {this.state.rows.map(row=>{
                    return <tr>
                        {Object.keys(row).map(rc=><td>{row[rc]}</td>)}
                    </tr>
                })}
            </tbody>
        </table>
    }
}



export {Table};