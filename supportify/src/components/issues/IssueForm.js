import React from 'react';
import {  Form, Field, ErrorMessage } from 'formik';
import { updateForm, saveIssue, deleteIssue, saveComment } from '../../store/actions';
import { connect } from 'react-redux';
import { deleteConfirm} from '../../utils/ModalConfirm';
import { differenceInCalendarDays } from 'date-fns'

function Stat( { label, data }){

  return(
    <div>
      <p>{ label }</p>
      <p>{ data }</p>
    </div>
  )
}

function SingleIssueForm(props) {

  let {values, handleChange,} = props;

  let {id, createdBy, title , usersComment, date, description, status,} = props.values;

  let boardMember = props.isBoardMember; 

  return (
  
    <Form>
          {boardMember && (
            <>
              <label htmlFor = 'status'>Status:</label>
              
              <Field
                name = 'status'
                render = {props => (
                  <BMSelectStatus {...props} placeholder={status} />
                )}
              />
              </>
          )}

          {!boardMember && <Stat label="Status: " data={status}/>}
          <Stat label="Created By: " data={createdBy} />
          <Stat label="Date Created:" data={date} />

          <Stat label="Days Passed:" data={differenceInCalendarDays(new Date(), new Date(date))}/>

          {boardMember && <Stat label="Title: " data={title} />}

          {boardMember && <Stat label="Description: " data={description} />}

          {boardMember && (
            <div>
              <label htmlFor="bmComment"> Board Comment:{" "}</label>

              <input
                name="bmComment"
                placeholder={"Board Member Comment"}
                onChange={handleChange}
                value={values.bmComment}
              />

              <ErrorMessage component="p" name="bmComment" />
            </div>
          )}

          {!boardMember && (
            <div>
              <label htmlFor="title">Title:{" "}</label>

              <input
                placeholder={"issue title"}
                onChange={handleChange}
                value={values.title}
                id="title"
                name="title"
              />

              <ErrorMessage component="p" name="title" />
            </div>
          )}

          {!boardMember && (
            <div>
              <label htmlFor="description"> Description:{" "}</label>

              <input
                name="description"
                placeholder={"issue description"}
                onChange={handleChange}
                value={values.description}
              />

              <ErrorMessage component="p" name="description" />
            </div>
          )}

      <div>
        {!boardMember && props.issueType === 'edit' && (
          <button onClick={ () => {deleteConfirm( id, props, title, props.Set_IssueType)
            }}>Delete</button>
        )}

        <button type="button" onClick={() => props.Set_IssueType("clear")}>
          Close</button>

        {!boardMember &&props.issueType === "edit" && (
          <button type="submit"
            onClick={() => {
              const issueInfo = {
                id: id,
                issue_title: title,
                issue_description: description,
                date: date,
                status: status,
                school_id: 1 
              };
              
              props.updateForm(id, issueInfo, props);
              props.Set_IssueType('clear')
            }}>Submit</button>
        )}

        {boardMember && props.issueType === "edit" && (
          <button type="submit"
            onClick={() => {
              const issueInfo = {
                id: id,
                status: status,
                school_id: 1 
              };

              const comment = {
                id: 1, 
                comment: usersComment,
                issue_id: id,
                board_id: props.userInfo.board_id
              };
              
              props.updateForm(id, issueInfo, props);
              props.saveComment(comment);
              props.Set_IssueType('clear')
            }}>Submit </button>
        )}

        {props.issueType === "createnew" && (
          <button type="submit"
            onClick={() => {
              const issueInfo = {
                id: id,
                issue_title: title,
                issue_description: description,
                date: date,
                status: status,
                school_id: 1 
              };
              console.log("submit button", props.values);
              props.saveIssue(issueInfo, props);
              props.Set_IssueType('clear')
            }}
          >Create</button>
        )}
      </div>
    </Form>
  );
}


function BMSelectStatus({  field, form, ...props} ){

    return (
                <select 
              { ...field}
              {...props}
                >
                <option value="Needs Attention">Needs Attention</option>
                <option value="Resolution In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
                <option value="Dismissed">Dismissed</option>
              </select>
    )
}


const mapStateToProps = state => {
  return {
    userInfo: state.userInfo,
    getErrorMessage: state.getErrorMessage
  };
};

export default connect(
  mapStateToProps,
  { updateForm, saveIssue, deleteIssue, saveComment}
)(SingleIssueForm);
