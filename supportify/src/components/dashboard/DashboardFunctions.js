import React, { useState, useEffect } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import DashboardMenu from '../dashboard/DashboardMenu';
import Issue from '../single-issue/single-issue.component';
import IssueList from '../IssueList/IssueList';
import { userComments } from '../../store/actions';

function DashboardFunctions(props) {

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
        .then(res => {
            console.log('issue list',res.data);
            setIssuesList(res.data);
        })
        .catch(err => {
            console.log(err);
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
    <section>
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
    </section>
);
}

const mapStateToProps = state => {

    return {
        userInfo: state.userInfo,
        comments: state.comments,
        isFetching: state.isFetching
    };
};

export default connect( mapStateToProps, {userComments})(DashboardFunctions);
