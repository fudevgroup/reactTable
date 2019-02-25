import React,{Component} from 'react';
import TableInputLine from './TableInputLine';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

class Table extends Component{

    state= {
        rows: [],
    }

    onDeleteRow = (id) =>{
        let {rows} = this.state;
        rows = rows.filter(row=>row.id !== id);
        this.setState({rows});
    }
    onSaveRow = (row) =>{
        const {rows} = this.state;
        rows[row.id] = row;
        this.setState({rows});
    }

    onAdd = (row) =>{
        const {rows} = this.state;
        row.id = uuidv4();
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
                    return <TableRow
                    data={row}
                    schema={schema}
                    key={row.id}
                    onDelete={this.onDeleteRow}
                    onSave={this.onSaveRow}
                    />
                })}
            </tbody>
        </table>
    }
}


function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


export {Table};