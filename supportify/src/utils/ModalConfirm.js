import "antd/dist/antd.css";
import { Modal} from "antd";

export function formatDate() {
    var d = new Date(),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
}

const { confirm } = Modal;

export function showDeleteConfirm(  id, props, title, cb ) {
    confirm({
    title: `Are you sure you want to delete ${ title }?`,
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {

        props.deleteIssue(id, props);
        cb('clear');
    },
    onCancel() {
    }
    });
}

export function addCommentsToIssues( issues, comments ){

    return issues.reduce( (updated, issue) => {
    let match = {};
    
    comments.forEach( comment => {
        if((issue.issue_title === comment.issue_title) &&  (issue.issue_description === comment.issue_description)) { match['comment']=  comment.comment }}) 
        console.log('match', match)

    return match ? [ ...updated, {...issue, ...match}]: [...updated, issue ];
    }, [])
}
