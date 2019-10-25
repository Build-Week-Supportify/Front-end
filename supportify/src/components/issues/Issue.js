import React   from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { updateForm } from '../../store/actions';
// import { formatDate } from '../../utils/ModalConfirm';
import IssueForm from './IssueForm';

function Issue(props) {

  let issueType = props.issueType;
  let showForm = ( issueType === 'clear')? false : true;
  
  const setType = props.Set_IssueType; 
  const updateIssues = props.updateIssues;

  let { first_name , last_name, schools, isBoardMember,} = props;

  let {id, status, issue_title, issue_description, date} = props.issue;

  let username = ( first_name && last_name)? `${first_name.replace(/^[a-z]/, match=> match.toUpperCase())} ${last_name.replace(/^[a-z]/, match=> match.toUpperCase())}`: '';
  
  let newIssue ={
      id: '',
      status: 'Needs Attention',
      createdBy: username,
      description:  '',
      title:  '',
  } 

  let issueEdit = {
        id: id,
        status : status,
        createdBy: username,
        date: date,
        description:  issue_description,
        title:  issue_title
  }

  let initObject = ( issueType === 'edit' ) ? issueEdit : newIssue;

  return (
    <div>
      <div>
        {showForm && props.issueType === 'edit' && <p>ID: {props.issue.id}</p>}
        {showForm && props.issueType === 'createnew' && <p>Create New Issue</p>}

        {!showForm && (
          <p>
            Select Issue or Add Issue
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
            title: yup.string().required('Title Missing'),
            description: yup.string().required('Description Missing')
          })}

          render={props => (
            <IssueForm
              {...props}
              isBM={isBoardMember}
              issueType={issueType}
              Set_IssueType={setType}
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

export default connect(mapStateToProps, { updateForm })(Issue);
