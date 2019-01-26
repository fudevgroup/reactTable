import React,{Component} from 'react';

class Table extends Component{

    state= {
        rows: [],
        addNew:{}
    }

// onChange = (event) =>{
//     const {name,value,type,checked} = event.target;
    onChange = ({target:{name,value,type,checked}}) =>{
        const {addNew} = this.state;
        if (type==="checkbox"){
            addNew[name]= checked;
            this.setState({addNew})
        }
        else {
            this.setState({addNew:{...addNew,[name]: value}})
        } 
    }

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
                    {Object.keys(schema).map(_key=>{
                        return <TableInput
                        key={_key}
                        name={_key}
                        {...schema[_key]}
                        onChange={this.onChange}
                        value={this.state.addNew[_key]||''}
                        />
                    })}
                    <td><button onClick={this.onClickAdd}>Add</button></td>
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


const TableHeader = (props) => {
    const {displayName} = props;
    return <th>{displayName}</th>
}

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



export {Table};