const createUserInfoSlice = (set) => ({
  userInfo: null,
  setUserInfo: (val) => set(() => ({ userInfo: val })),
});

export default createUserInfoSlice;
