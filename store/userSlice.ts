import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: Object;
  email: string | null;
  token: string | null;
}

const initialState: UserState = {
    email: null,
    token: null,
    user: {}
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ email: string, token: string, user: Object }>) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    clearUser: (state) => {
      state.email = null;
      state.token = null;
      state.user = {};
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
