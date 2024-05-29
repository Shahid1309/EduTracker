import React, { createContext, useContext, useReducer } from 'react';

export const initialState = {
  userType: null,
  email: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,userType:action.userType,email:action.email
      };

      case 'LOGOUT':
        return{
          email:null,
          userType:null
        }

    case 'INITIAL':
      return {
        ...state,
        userType: action.state.userType,
        email: action.state.email
      };
    // case 'ADD_TASK':
    //   return {
    //     ...state,
    //     tasks: [
    //       ...state.tasks,
    //       {
    //         id: action.id,
    //         content: action.content,
    //         pending: true,
    //       },
    //     ],
    //   };

    // case 'DELETE_TASK':
    //   return {
    //     ...state,
    //     tasks: state.tasks.filter((task) => task.id !== action.id),
    //   };

    // case 'TOGGLE_TASK':
    //   return {
    //     ...state,
    //     tasks: state.tasks.map((task) =>
    //       task.id === action.id ? { ...task, pending: !task.pending } : task
    //     ),
    //   };

    case 'SET_EMAIL':
      return {
        ...state,
        email: action.email
      };  

    default:
      return state;
  }
};

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
export const useStateValue = () => useContext(StateContext);