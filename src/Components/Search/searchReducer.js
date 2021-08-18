
export const searchReducer = (state="", action) => {

    switch (action.type) {

        case "enter":
            return "";

        case "change":
            return action.payload;

        default:
            return state;
    }

}