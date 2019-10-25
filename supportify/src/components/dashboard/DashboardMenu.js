import React from 'react';
import SchoolList from './../schools/SchoolList';
import Payment from './../Payment';
import AddSchool from '../schools/AddSchool';

export default function DashboardMenu(props) {

  const handleChange = (value) => {

    props.setQuery(value);
  }

  return (
    <section>
        <div className = 'schoollist'>
        <SchoolList />
        <AddSchool />
        </div>


        <div className = 'selectstatus'>
          <label htmlFor = 'statusFilter'>Sort By:</label>
          <select id = 'statusfilter' name='status' defaultValue = {'All'} onChange = {handleChange}>
            <option value = 'All'>All</option>
            <option value = 'Needs Attention'>Needs Attention</option>
            <option value = 'Queued'>Queued</option>
            <option value = 'Completed'>Completed</option>
          </select>        
        </div>

        <div>
          <Payment />
        </div>
    </section>
      
  )
}
