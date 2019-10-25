import { axiosWithAuth } from '../../utils/axiosWithAuth';
import axios from 'axios';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

//registering the user private
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const registerUser = (info, props) => dispatch => {

    dispatch({ type: REGISTER_START });

    // axiosWithAuth()
        axios
        .post('https://bw-supportify.herokuapp.com/auth/register', info)
        // console.log(info)

        .then(response => {
            console.log('register', response);
            dispatch({ type: REGISTER_SUCCESS, payload:response.data });
            localStorage.setItem(response.data);
            // props.history.push('/login');
            window.location = '/login';
        })
        
        .catch(error => {
            console.log(error);
            dispatch({ type: REGISTER_FAILURE, error:error });
        });
};

//login user private
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginUser = (info, props) => dispatch => {

    dispatch({ type: LOGIN_START });

    axiosWithAuth()
        .post('https://bw-supportify.herokuapp.com/auth/login', info)
        
        .then(response => {
            console.log('login', response);
            dispatch({ type: LOGIN_SUCCESS, payload: response.data.user });
            localStorage.setItem('token', response.data.token);
            // props.history.push('/dashboard');
            window.location = '/dashboard';
        })

        .catch(error => {
            console.log(error);
            dispatch({ type: LOGIN_FAILURE, error:error });
        });
};


//saves issues added
export const SAVE_ISSUE = 'SAVE_ISSUE';

export const saveIssue = (info, props) => dispatch => {

    axios
        .post('https://bw-supportify.herokuapp.com/issues/', info)

        .then(response => {
            console.log('saving issue', response);
            props.updateIssues(info);
        })

        .catch(error => {
            console.log(error);
        });
};

//edit issue
export const EDIT_ISSUE = 'EDIT_ISSUE';
export const EDIT_SUCCESS = 'EDIT_SUCCESS';
export const EDIT_FAILURE = 'EDIT_FAILURE';

export function editIssue (id, issue) {
    return dispatch => {
        dispatch({type: EDIT_SUCCESS});

        axios
            .put(`https://bw-supportify.herokuapp.com/issues/${id}`, issue)

            .then(response => {
                dispatch({type: EDIT_SUCCESS, payload: response.data});
            })

            .catch(error => {
                dispatch({ type: EDIT_FAILURE, payload: error});
            });
    }
}

//delete issue
export const DELETE_ISSUE = 'DELETE_ISSUE';

export const deleteIssue = (id, props) => dispatch => {
    dispatch({ type:DELETE_ISSUE});

    axios
    .delete(`https://bw-supportify.herokuapp.com/issues/${id}`)

    .then(response => {
        dispatch({ type: SUCCESS, payload: response.data });
    })

    .catch(error => {
        dispatch({ type: ERROR, payload: error });
        console.log(error);
    });
};

//adding comments
export const COMMENTS_START = 'COMMENTS_START';
export const COMMENTS_SUCCESS = 'COMMENTS_SUCCESS';
export const COMMENTS_FAILURE = 'COMMENTS_FAILURE';

export const userComments = () => dispatch => {

    dispatch({ type: COMMENTS_START });

    axios
    .get('https://bw-supportify.herokuapp.com/comments/')

    .then(response => {
            console.log('comments', response);
            response.data.forEach(data => {
            dispatch({ type: COMMENTS_SUCCESS, payload: data });
            });
    })

    .catch(error => {
        console.log(error);
    });
};

//saving user comments
export const SAVE_COMMENTS_START = 'SAVE_COMMENTS_START';
export const SAVE_COMMENTS_SUCCESS = 'SAVE_COMMENTS_SUCCESS';
export const SAVE_COMMENTS_FAILURE = 'SAVE_COMMENTS_FAILURE';

export const saveComment = (data) => dispatch => {

    dispatch({ type: SAVE_COMMENTS_START });

    axios
    .post('https://bw-supportify.herokuapp.com/comments/', data)

    .then(response => {
            console.log('comments saved', response);
            dispatch({ type: SAVE_COMMENTS_SUCCESS, payload: data });
    })

    .catch(error => {
        console.log(error);
    });
};

//delete user comments
export const DELETE_COMMENTS_START = 'DELETE_COMMENTS_START';
export const DELETE_COMMENTS_SUCCESS = 'DELETE_COMMENTS_SUCCESS';
export const DELETE_COMMENTS_FAILURE = 'DELETE_COMMENTS_FAILURE';

export const deleteComment = (id, props, data) => dispatch => {

    dispatch({ type: DELETE_COMMENTS_START });

    axios
    .delete(`https://bw-supportify.herokuapp.com/comments/${id}`)

    .then(response => {
        dispatch({ type: DELETE_COMMENTS_SUCCESS, payload: data });
        props.updateIssues({ id });
    })

    .catch(error => {
        console.log(error);
    });
};

//updating data
export const updateForm = (id, data, props) => dispatch => {

    axios
    .put(`https://bw-supportify.herokuapp.com/issues/${id}`, data)

    .then(response => {
        console.log('form-update', response);
        props.updateIssues(data);
    })

    .catch(error => {
        console.log(error);
    });
};

    //selecting, adding schools
    export const SCHOOLS_START = 'SCHOOLS_START';

    export const retrieveSchools = (id, data, props) => dispatch => {
        dispatch({ type: SCHOOLS_START });

        axios
        .get(`https://bw-supportify.herokuapp.com/schools`, data)
    
        .then(response => {
            console.log('form-update', response);
            props.updateSchools(data);
        })
    
        .catch(error => {
            console.log(error);
        });
    };

        export const ADD_SCHOOLS_START = 'ADD_SCHOOLS_START';
        export const ADD_SCHOOLS_SUCCESS = 'ADD_SCHOOLS_SUCCESS';
        
        export const addSchools = (data) => dispatch => {
        
            dispatch({ type: ADD_SCHOOLS_START });
        
            axios
            .post('https://bw-supportify.herokuapp.com/schools/', data)
        
            .then(response => {
                    console.log('school saved', response);
                    dispatch({ type: ADD_SCHOOLS_SUCCESS, payload: data });
            })
        
            .catch(error => {
                console.log(error);
            });
        };
