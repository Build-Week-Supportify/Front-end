import React from 'react'
import { connect } from 'react-redux';
import ListItem from './ListItem'



function IssueList(props) {

    return (
        <>

    <div>
        <>
        <p>{props.userData.school}</p>

        { !props.userInfo.isBoardMember && <button 
            onClick={ () =>  props.Set_IssueType( 'createnew') }>Add Issue Ticket
        </button> }
        </>
    </div>

    <ul>
        <li>Date Created</li>
        <li>Title</li>
        <li>Status</li>
        <li>View</li>
        { !props.userInfo.isBoardMember && <button>Delete</button>}
    </ul>

    <div> 
        {props.issueData &&
        props.issueData.filter(issue => issue.status.includes(props.query)).map(issue => {
            return (
            <ListItem
                {...props}
                data={issue}
                key={issue.id}
                setIssue={ props.setIssue }
                Set_IssueType={ props.Set_IssueType }
            />
            );
        })}
    </div>
    </>
);
}
const mapStateToProps = state => {

    return {
    userInfo: state.userInfo,
    };
};

export default connect(
    mapStateToProps,
    {  }
)(IssueList);
