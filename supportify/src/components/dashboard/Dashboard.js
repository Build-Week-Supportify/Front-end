
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import DashboardMenu from '../dashboard/DashboardMenu';
// import SchoolList from '../SchoolList';



class Dashboard extends Component {
    render() {
        return (
            <div>
                <div>
                    <DashboardMenu />
                </div>
                <div >
                    {/* <Route path='/dashboard/schools' component={SchoolList} /> */}
                    {/* <Route path='/dashboard/issues/list' component={IssueList} />
                    <Route path='/dashboard/issues/equipment-list' component={EquipmentIssueList} /> */}
                </div>
            </div>
        );
    }
}

export default Dashboard;