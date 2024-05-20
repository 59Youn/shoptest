import { createSlice } from "@reduxjs/toolkit";

export let stock = createSlice({
  name: "stock", // name은 보통 변수랑 똑같이 만듬
  initialState: {
    pdstock: [10, 50, 30, 5, 4],
  },
});

export default stock;
