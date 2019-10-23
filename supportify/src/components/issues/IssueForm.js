import React from 'react';
import {  Form, Field, ErrorMessage } from 'formik';
import { updateForm, saveIssue, deleteIssue, saveComment } from '../../store/actions';
import { connect } from 'react-redux';
import { showDeleteConfirm} from '../../utils/ModalConfirm';
import { differenceInCalendarDays } from 'date-fns';

function Stat( { label, data }){
  return(
    <div className={ styles.statRow }>
      <p>{ label }</p>
      <p>{ data }</p>
    </div>
  )
}

function SingleIssueForm( props ) {

  let {
    values,
    handleChange,
  } = props;

  let {
    id,
    createdBy,
    title ,
    bmComment,
    date ,
    description ,
    status,
  } = props.values;

  let isBM = props.userInfo.isBoardMember; 

  return (
    <form>
          {isBM && (
            <>
              <label htmlFor="status">Status:</label>

              <Field
                name="status"
                render={props => (
                  <BMSelectStatus {...props} placeholder={status} />
                )}
              />
            </>
          )}
          </form>
          )

          <div>
          <>
          {!isBM && <Stat label="Status: " data={status}/>}
          <Stat label="Created By: " data={createdBy} />
          <Stat label="Date Created:" data={date} />

          <Stat label="Days Passed:" data={differenceInCalendarDays(new Date(), new Date(date))}/>
          </>

          {isBM && <Stat label="Title: " data={title} />}

          {isBM && <Stat label="Description: " data={description} />}

          {isBM && (
            <div className={styles.bmCommentDiv}>
              <label
                htmlFor="bmComment"
              >
                Board Comment:{" "}
              </label>
              <input
                name="bmComment"
                placeholder={"Board Member Comment"}
                onChange={handleChange}
                value={values.bmComment}
              />
              <ErrorMessage component="p" name="bmComment" />
            </div>
          )}

          {!isBM && (
            <div className={styles.bmCommentDiv}>
              <label
                htmlFor="title"
              >
                Title:{" "}
              </label>

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

          {!isBM && (
            <div className={styles.bmCommentDiv}>
              <label
                htmlFor="description"
              >
                Description:{" "}
              </label>
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
        <>
        {!isBM && props.issueType === 'edit' && (
          <button 
            onClick={ () => {
                showDeleteConfirm( id, props, title, props.Set_IssueType )
            }}
          >
            Delete
          </button>
        )}

        <button type="button" onClick={() => props.Set_IssueType("clear")}>
          Close
        </button>

        {!isBM &&props.issueType === "edit" && (
          <button
            type="submit"
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

            }}
          >
            Submit
          </button>
        )}

        {isBM && props.issueType === "edit" && (
          <button
            type="submit"
            onClick={() => {
              const issueInfo = {
                id: id,
                status: status,
                school_id: 1 
              };
              const comment = {
                id: 1, 
                comment: bmComment,
                issue_id: id,
                board_id: props.userInfo.board_id
              };
              
              props.updateForm(id, issueInfo, props);
              props.saveComment(comment);
              props.Set_IssueType('clear')
            }}
          >
            Submit 
          </button>
        )}

        {props.issueType === "createnew" && (
          <button
            type="submit"
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
          >
            Create
          </button>
        )}
      </div>
      </>
    </form>
  );


function BMSelectStatus({  field, form, ...props} ){

    return (
                <select 
              { ...field}
              {...props}
                style={{ width: '100%', paddingLeft: '1rem' }} 
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
