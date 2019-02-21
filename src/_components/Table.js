import React,{Component} from 'react';
import TableInputLine from './TableInputLine';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

class Table extends Component{

    state= {
        rows: [],
    }

// onChange = (event) =>{
//     const {name,value,type,checked} = event.target;
    

    onAdd = (row) =>{
        const {rows} = this.state;
        rows.push(row);
        this.setState({rows});
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
                    <TableInputLine schema={schema} onAdd={this.onAdd}/>
                </tr>
            </thead>
            <tbody>
                {this.state.rows.map(row=>{
                    return <TableRow data={row} schema={schema} />
                })}
            </tbody>
        </table>
    }
}



export {Table};