import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from "axios";
import DashboardMenu from '../dashboard/DashboardMenu';
import Issue from '../issues/Issue';
import IssueList from '../issues/IssueList';
import { userComments } from '../../store/actions';

function Dashboard(props) {

    const [currentIssue, setCurrentIssue ] = useState({})
    const [ issueType, setIssueType ] = useState('clear');
    const [query, setQuery] = useState('');
    const [issuesList, setIssuesList] = useState([]);
    const [newIssues, setNewIssues] = useState({});
    const { userComments } = props


    useEffect(() => {

        if (localStorage.getItem('token')) {

        axios
            .get('https://bw-supportify.herokuapp.com/issues/')

            .then(response => {
                console.log("get IssueList action",response.data);
                setIssuesList(response.data);
            })

            .catch(error => {
                console.log(error);
            });
        }
    }, [newIssues]);

    useEffect(() => {   
        userComments();    
    }, []);

    function Set_IssueType( type ){
        console.log('setIssueType called');
        setIssueType( type )
    }

    function findIssue( id ){
    return issuesList.reduce( ( match , issue) => {
        return issue.id === id ? match = issue : match;
        }, {})
    }

    function setIssue( id ){
        let result = findIssue(id);
        setCurrentIssue(  result );
        Set_IssueType('edit')
    }

    return (

            <div>
        <DashboardMenu setQuery={setQuery} />
            <div>
        <IssueList
            Set_IssueType={Set_IssueType}
            issueType={issueType}
            setIssue={setIssue}
            userData={props.userInfo}
            issueData={issuesList}
            query={query}
            updateIssues={setNewIssues}
        />

        <Issue
            userData={props.userInfo}
            issue={currentIssue}
            issueType={issueType}
            Set_IssueType={Set_IssueType}
            updateIssues={setNewIssues}
        />
        </div>
    </div>
    );
}

const mapStateToProps = state => {
    return {
        userInfo: state.userInfo,
        comments: state.comments,
        isFetching: state.isFetching
    };
};

export default connect(mapStateToProps, { userComments })(Dashboard);


// import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
// import DashboardMenu from '../dashboard/DashboardMenu';
// import IssueList from './../issues/IssueList';
// // import SchoolList from '../SchoolList';



// class Dashboard extends Component {
//     render() {
//         return (
//             <div>
//                 <div>
//                     <DashboardMenu />
//                 </div>
//                 <div >
//                     {/* <Route path='/dashboard/schools' component={SchoolList} /> */}
//                     <Route path='/dashboard/issues/list' component={IssueList} /> 
//                 </div>
//             </div>
//         );
//     }
// }

// export default Dashboard;