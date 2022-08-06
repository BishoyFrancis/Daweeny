// import {SET_CURRENT_USER} from '../actions/Auth.actions'
// import isEmpty from '../../components/isEmpty';

// export default function authRducer (state, action){
//     switch(action.type){
//         case SET_CURRENT_USER:
//             return{
//                 ...state,
//                 isAuthenticated:!isEmpty(action.payload),
//                 user: action.payload,
//                 userProfile: action.userProfile
//             };
//             default:
//                 return state;
//     }
// }