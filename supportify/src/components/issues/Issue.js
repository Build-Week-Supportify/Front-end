import React   from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { updateForm } from "../../store/actions";
import { formatDate } from '../../utils/ModalConfirm';
import IssueForm from './IssueForm';

function SingleIssue( props ) {

  let issueType = props.issueType;
  let showForm = ( issueType === 'clear')? false : true;
  
  const SIT = props.Set_IssueType; 
  const updateIssues = props.updateIssues;
  let showSingle = (props.winWidth >= 1200 || props.issueType !== 'clear')? { display: 'flex' } : { display : 'none'} ;

  let { 
    first_name ,
    last_name,
    school,
    isBoardMember,
  } = props.userData;

  let {
    id,
    status,
    issue_title,
    issue_description,
    date
  } = props.issue;

  let userName = ( first_name && last_name)? `${first_name.replace(/^[a-z]/, match=> match.toUpperCase())} ${last_name.replace(/^[a-z]/, match=> match.toUpperCase())}`: '';
  
  let InitNewIssue ={
      id: Math.floor(Math.random()*10000),
      status: 'Needs Attention',
      createdBy: userName,
      date: formatDate(), 
      description:  '',
      title:  '',
  } 

  let InitEdit = {
        id: id,
        status : status,
        createdBy: userName,
        date: date,
        description:  issue_description,
        title:  issue_title
  }

  let initObject = ( issueType === 'edit' ) ? InitEdit : InitNewIssue;

  return (
    <div>
      <div>
        {showForm && props.issueType === 'edit' && <p>ID: {props.issue.id}</p>}
        {showForm && props.issueType === 'createnew' && <p>Create New Issue</p>}

        {!showForm && (
          <p>
            Please select an issue from the list or create a new issue.
          </p>
        )}
      </div>

      {showForm && (
        <Formik
          enableReinitialize
          initialValues={{ ...initObject, props}}

          onSubmit={(values, { resetForm, setSubmitting  }) => {
            resetForm();
          }}

          validationSchema={yup.object().shape({
            title: yup.string().required("Please provide a title"),
            description: yup.string().required("Please provide decription")
          })}

          render={props => (
            <IssueForm
              {...props}
              isBM={isBoardMember}
              issueType={issueType}
              Set_IssueType={SIT}
              updateIssues={updateIssues}
            />
          )}
        />
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    getErrorMessage: state.getErrorMessage
  };
};

export default connect(
  mapStateToProps,
  { updateForm }
)(SingleIssue);
