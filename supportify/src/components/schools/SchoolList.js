import React from 'react';
import School from './School';

const SchoolList = ({ list }) => {

    console.log('school list', list);
    return (
    <div className = 'item-container'>
        {list && list.map(item => <School key={item.id} item={item} />)}
    </div>
    );
};

export default SchoolList;