import { createSlice } from "@reduxjs/toolkit";
import products from "../../data/products.json";
import categories from "../../data/categories.json";

export const shopSlice = createSlice({
    name: "shop",
    initialState: {
        products,
        categories,
        categorySelected: "",
        productIdSelected: "",
        productsFilteredByCategory: [],
    },
    reducers: {
        setCategorySelected: (state, action) => {
            state.categorySelected = action.payload;
            state.productsFilteredByCategory = state.products.filter(
                (product) => product.category === action.payload
            );
        },
        setProductSelected: (state, action) => {
            state.productIdSelected = action.payload;
        },
    },
});

export const { setCategorySelected, setProductSelected } = shopSlice.actions;
export default shopSlice.reducer;
