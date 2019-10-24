import React from 'react';
import { connect } from 'react-redux';
import { deleteIssue } from '../../store/actions'


function ListItem(props) {
  
  return (
    <>
        <div>
        <p>{props.data.date}</p>
        <p>{props.data.issue_title}</p>
        <p> { props.data.status } </p>
        </div>

        <div>
          <>
          { props.isBoardMember && (<button 
            id={ props.data.id }
            onClick={ ()=> props.setIssue( props.data.id ) }
            >View</button>)}
            </>
        </div>



        <div>
        { !props.isBoardMember && (
          <button 
          id={props.data.id}
          onClick={() => {
            deleteIssue( props.data.id, props, props.data.issue_title , props.Set_IssueType )
          }}
            >Delete</button>)}
          </div>
        

          <div>
              id={ props.data.id }
              onClick={ ()=> props.setIssue( props.data.id ) }
          </div> 

          <div>
            { !props.isBoardMember && (
            <button  id={ props.data.id } onClick={() => {
            deleteIssue( props.data.id, props, props.data.issue_title , props.Set_IssueType )
              }}
              />)}
              </div>      
              </>
  );
}
const mapStateToProps = state => {
  
  return {
    userInfo: state.userInfo
  };
};

export default connect(mapStateToProps,{deleteIssue})(ListItem);
