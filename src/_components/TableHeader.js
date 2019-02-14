import React from 'react';

const TableHeader = (props) => {
    const {displayName} = props;
    return <th>{displayName}</th>
}


export default TableHeader;