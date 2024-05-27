import { createSlice } from "@reduxjs/toolkit";

const totalIds = Object.values(localStorage)
  .map(item => {
    const parsedItem = JSON.parse(item);
    return parsedItem?.quantity || 0;
  })
  .reduce((accumulator, currentId) => accumulator + currentId, 0);

const initialState = {
  count: totalIds,
  showToast: false
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      state.count += 1;
      action.payload.quantity = 1;
      if (localStorage.getItem(action.payload.id)) {
        let tempData = JSON.parse(localStorage.getItem(action.payload.id));
        tempData.quantity = (tempData.quantity + 1);
        localStorage.setItem(action.payload.id, JSON.stringify(tempData));

      } else {
        localStorage.setItem(`${action.payload.id}`, JSON.stringify(action.payload));
      }
      state.showToast = true
    },
    removeBasket: (state, action) => {
      state.count -= 1;
      if (action.payload.quantity > 1) {
        let tempData = JSON.parse(localStorage.getItem(action.payload.id));
        tempData.quantity -= 1;
        localStorage.setItem(action.payload.id, JSON.stringify(tempData));
        document.querySelector(`.c-${action.payload.id}`).textContent = JSON.parse(localStorage.getItem(action.payload.id)).quantity;
      }
      else {
        localStorage.removeItem(action.payload.id);
      }
    },
    addSingle: (state, action) => {
      state.count += 1;
      if (localStorage.getItem(action.payload.id)) {
        let tempData = JSON.parse(localStorage.getItem(action.payload.id));
        tempData.quantity = (tempData.quantity + 1);
        localStorage.setItem(action.payload.id, JSON.stringify(tempData));
        document.querySelector(`.c-${action.payload.id}`).textContent = JSON.parse(localStorage.getItem(action.payload.id)).quantity;
      }
      state.showToast = true
    },
    destoryBasket: (state) => {
      state.count = 0;
      localStorage.clear();
    },
    destroySingle: (state, action) => {
      let tempData = JSON.parse(localStorage.getItem(action.payload.id));
      state.count -= tempData.quantity;
      localStorage.removeItem(action.payload.id);
      document.querySelector(`#c-${action.payload.id}`).classList.add('hidden');
    },
    setShowToast: (state, action) => {
      state.showToast = action.payload
    }
  },
});

export const { addBasket, removeBasket, setShowToast, addSingle, destroySingle, destoryBasket } = basketSlice.actions

export default basketSlice.reducer;
