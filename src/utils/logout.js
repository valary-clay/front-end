
export const logout = history  => { 
  localStorage.removeItem('token');
  localStorage.removeItem('profile');
  history.push('/login');
};
