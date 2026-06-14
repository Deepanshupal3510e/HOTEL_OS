import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    email: "",
    phone: "",
    profilePic: "",
    dob: "",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const data = action?.payload
            if (!data) return
            state.username = data?.username || state.username
            state.email = data?.email || state.email
            state.phone = data?.phone || state.phone
            state.profilePic = data?.profilePic || state.profilePic
            state.dob = data?.dob || state.dob
        }
    }
})

export const { addUser } = userSlice.actions
export default userSlice.reducer


