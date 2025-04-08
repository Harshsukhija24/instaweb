import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  elements: [],
  selectedElement: null,
  templates: [
    {
      id: "header",
      name: "Header",
      type: "section",
    },
    {
      id: "body",
      name: "Body",
      type: "section",
    },
    {
      id: "footer",
      name: "Footer",
      type: "section",
    },
  ],
};

export const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.elements.push({
        id: Date.now().toString(),
        ...action.payload,
      });
    },
    updateElement: (state, action) => {
      const index = state.elements.findIndex(
        (el) => el.id === action.payload.id
      );
      if (index !== -1) {
        state.elements[index] = {
          ...state.elements[index],
          ...action.payload,
        };
      }
    },
    removeElement: (state, action) => {
      state.elements = state.elements.filter((el) => el.id !== action.payload);
    },
    selectElement: (state, action) => {
      state.selectedElement = action.payload;
    },
    updateElementPosition: (state, action) => {
      const { id, x, y } = action.payload;
      const element = state.elements.find((el) => el.id === id);
      if (element) {
        element.x = x;
        element.y = y;
      }
    },
  },
});

export const {
  addElement,
  updateElement,
  removeElement,
  selectElement,
  updateElementPosition,
} = builderSlice.actions;

export default builderSlice.reducer;
