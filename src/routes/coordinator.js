export const goToLogin = (history) => {
    history.push("/login");
};
export const goToSignUp = (history) => {
    history.push("/signUp");
};
export const goToCreateAddress = (history) => {
    history.push("/address");
};
export const goToFeed = (history) => {
    history.push("/");
};
export const goToRestaurant = (history, id) => {
    history.push(`/restaurants/${id}`);
};
export const goToCart = (history) => {
    history.push("/cart");
};
export const goToProfile = (history) => {
    history.push("/profile");
};
export const goToEditProfile = (history) => {
    history.push("/profile/edit");
};
export const goToEditAdress= (history) => {
    history.push("/address/edit");
};
export const goBack = (history) => {
    history.goBack()
}
