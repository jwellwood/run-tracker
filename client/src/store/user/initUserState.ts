export const initUserState = {
  token: localStorage.getItem('token') || null,
  isAuthenticated: false,
  loading: true,
  user: {
    _id: '',
    username: '',
    email: '',
  },
};
