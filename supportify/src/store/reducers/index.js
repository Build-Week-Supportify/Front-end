import {
    SUCCESS,
    ERROR,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SAVE_ISSUE,
    EDIT_ISSUE,
    EDIT_SUCCESS,
    EDIT_FAILURE,
    DELETE_ISSUE,
    COMMENTS_START,
    COMMENTS_SUCCESS, 
    SAVE_COMMENTS_START,
    SAVE_COMMENTS_SUCCESS,
    SCHOOLS_START,
    ADD_SCHOOLS_START,
    ADD_SCHOOLS_SUCCESS,
} from '../../store/actions';

    export const initialState = {
    users: [],
    userId:null,
    fetching: false,
    registering: false,
    registerLoading: false,
    errorRegister: false,
    loggingIn: false,
    loggedIn: false,
    errorLogin: false,
    fetchingIssues: false,
    issues: [],
    addingIssue: false,
    updatingIssue: false,
    deletingIssue: false,
    editIssue: false,
    edited: false,
    editForm: false,
    token: localStorage.getItem('token'),
    error: null,
    editId: null,
    comments: []
    };

    const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_START:
        return {
            ...state,
            registerLoading:true,
            errorRegister: false
        };

    case REGISTER_SUCCESS:
        return {
        ...state,
        user: action.payload,
        userId: action.payload.id,
        registerLoading:false,
        };

    case REGISTER_FAILURE:
        return {
        ...state,
        errorRegister: true
        };

    case LOGIN_START:
        return {
        ...state,
        errorLogin: false,
        loggedIn: false,
        loggingIn:true,
        };

    case LOGIN_SUCCESS:
        console.log('user info',action.payload);
        return {
        ...state,
        loggedIn: true,
        userInfo: {
            admin_id: action.payload.admin_id,
            board_id: action.payload.board_id,
            email: action.payload.email,
            first_name: action.payload.first_name,

            isBoardMember: action.payload.isBoardMember,
            last_name: action.payload.last_name,
        },
        loggingIn:false,
        };

    case LOGIN_FAILURE:
        return {
        ...state,
        errorLogin: true
        };

    case SUCCESS:
        return {
            ...state,
            issues: action.payload,
            error: null
        };
    
    case ERROR:
        return {
            ...state,
            error: action.payload
        };

    case SAVE_ISSUE:
        return {
        ...state,
        issues: [...state.issues, action.payload]
        };
    
    case DELETE_ISSUE:
        return {
            ...state,
            deletingIssue: true,
            error: null
        };

    case EDIT_SUCCESS:
        return {
            ...state,
            editing: true,
            error: null
        };

    case EDIT_ISSUE:
        return {
            ...state,
            issues: action.payload,
            edited: false,
            error: null
        };

    case EDIT_FAILURE:
        return {
            ...state,
            error: null
        };
    
        
    case COMMENTS_START:
        return {
        ...state,
        fetchingIssues: true
        };

    case COMMENTS_SUCCESS:
        return {
        ...state,
        comments: [...state.comments, action.payload],
        fetchingIssues: false
        };

    case SAVE_COMMENTS_START:
        return {
        ...state,
        
        };

    case SAVE_COMMENTS_SUCCESS:
        console.log(action.payload)
        return {
        ...state,
        comments: [...state.comments, action.payload],
        
        };

    case ADD_SCHOOLS_START:
        return {
        ...state,
        fetchingIssues: true
        };

    case ADD_SCHOOLS_SUCCESS:
        return {
        ...state,
        comments: [...state.schools, action.payload],
        fetchingIssues: false
        };

        default:
        return state;
    }

}

export default reducer;