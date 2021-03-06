const initialState = { 
    user: {},
    
    username: '',
    id: 0,
    profile_pic: ''
}

const USER_DATA = 'USER_DATA';

const UPDATE_USERNAME = "UPDATE_USERNAME"
const UPDATE_USER_ID = "UPDATE_USER_ID";
const  UPDATE_PROFILE_PIC = "UPDATE_PROFILE_PIC";



export default function reducer(state = initialState, action) {
    switch(action.type) {
        case USER_DATA: 
            return {...state, user: action.payload}

        case UPDATE_USERNAME:
            return {...state, username: action.payload}
        case UPDATE_USER_ID:
            return {...state, id: action.payload}
        case UPDATE_PROFILE_PIC:
            return {...state, profile_pic: action.payload}

        default:
            return state;
    }
}

//action creator
export function updateUser(userData) {
    return {type: USER_DATA,
            payload: userData}
}


export function updateUsername(username) {
    return {type: UPDATE_USERNAME,
            payload: username}
}
export function updateUserId(id) {
    return {type: UPDATE_USER_ID,
            payload: id
    }
}
export function updateProfilePic(profile_pic) {
    return {type: UPDATE_PROFILE_PIC,
            payload: profile_pic}
}

