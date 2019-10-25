import React from 'react'
import { connect } from 'react-redux';
import ListItem from './ListItem'



function IssueList(props) {

    return (
        <>

    <div>
        <>
        <p>{props.school_name}</p>

        { !props.isBoardMember && 
        <button onClick={ () =>  props.Set_IssueType('createnew') }className = 'issuebtn'>Add Issue Ticket</button> }
        </>
    </div>

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

export default connect(mapStateToProps,{ })(IssueList);
