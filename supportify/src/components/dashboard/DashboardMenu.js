import React from 'react';
import { Link } from 'react-router-dom';
import { Select} from 'antd';
import SchoolList from './../schools/SchoolList';
import Payment from './../Payment';

export default function DashboardMenu(props) {

  const handleChange = (value) => {

    props.setQuery(value);
  }

  return (
    <section>
        {/* <Link to={'/dashboard/schools'}>Schools</Link>
        <Link to={'/dashboard/issues/list'}>Issues List</Link> */}
        <div className = 'schoollist'>
        <SchoolList />
        </div>

        <div>
          <Payment />
        </div>


        <div className = 'selectstatus'>
          <label htmlFor = 'statusFilter'>Sort By:</label>
          <select id = 'statusfilter' name='status' defaultValue = {'All'} onChange = {handleChange}>
            <option value = ''>All</option>
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
