export const Path = {
    PATH: "http://localhost/api/admin/v1",
};

export const setUserSession = (token, user) => {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
}

export const setauthenticated = (user) => { 
    return user || false;
}

export const getUser = () => { 
    const userStr = localStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
}
export const removeUserSession = () => { 
    localStorage.removeItem('token');
    localStorage.removeItem('user');
}

export const getToken = () => { 
    return localStorage.getItem('token');
}

