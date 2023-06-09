// import { useNavigate } from "react-router-dom";
// import React from "react";
export function isTokenExist(){
    if (localStorage.getItem("jwtToken") === null) {
        return false;
    }
    return true;
}
export function logoutAdmin(){
    if(localStorage.getItem("jwtToken"))
        localStorage.removeItem('jwtToken');
    if(localStorage.getItem('isAdminAuthenticated'))
    localStorage.removeItem('isAdminAuthenticated')
}

export function logoutGamer(){
    if(localStorage.getItem("jwtToken"))
        localStorage.removeItem('jwtToken');
    if(localStorage.getItem('isGamerAuthenticated'))
    localStorage.removeItem('isGamerAuthenticated')
}

export const initUrl="http://localhost:8081";

export function checkForTokenExist(){
    return localStorage.getItem('jwtToken');
}
export function checkForAdminTokenExist(){
    return localStorage.getItem('isAdminAuthenticated');
}

export function checkForGamerTokenExist(){
    return localStorage.getItem('isGamerAuthenticated');
}

export function getConfig(){
    if(checkForTokenExist()===null)
        return null;
    const token = 'Bearer '+localStorage.getItem('jwtToken');
    console.log(token);
    let config = {
        headers: {
          'Authorization':token,
        },
    }
    return config;
}

