import { createSlice } from "@reduxjs/toolkit";

export interface AppsState {
  // true:展开，false关闭
  collapsed: boolean;
}

const initialState: AppsState = {
  collapsed: false,
};

export const appsSlice = createSlice({
  name: "apps",
  initialState,
  reducers: {
    toggleSideBar(state) {
      state.collapsed = !state.collapsed;
    },
  },
});

export const { toggleSideBar } = appsSlice.actions;
export default appsSlice.reducer;
