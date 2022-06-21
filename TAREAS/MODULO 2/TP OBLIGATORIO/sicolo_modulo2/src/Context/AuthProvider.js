import React, {useState} from "react";
import AuthContext from "./AuthContext";
import {useNavigate} from 'react-router-dom';

function AuthProvider (props) {
    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState(localStorage.getItem("login") || false)
    const [userInfo, setUserInfo] = useState ({})
    
    const loginUser = (userInfo) => {
        setUserLogin(true)
        setUserInfo(userInfo)
        localStorage.setItem("login", true)
        navigate('/')
    }

    const logoutUser = () => {
        setUserLogin(false)
        localStorage.removeItem("login")
        navigate('/')
    }

    return (
        <AuthContext.Provider 
            value = {{
                userLogin,
                userInfo,
                loginUser,
                logoutUser
            }}
        >

            {props.children}

        </AuthContext.Provider>
    )
}

export default AuthProvider