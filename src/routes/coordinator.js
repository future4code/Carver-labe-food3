export const goToLogin = (history) => {
    history.push("/login");
};
export const goToSignUp = (history) => {
    history.push("/signUp");
};
export const goToSignUpAddress = (history) => {
    history.push("/address");
};
export const goToFeed = (history) => {
    history.push("/restaurants");
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
    history.push("/adress/edit");
};
export const goBack = (history) => {
    history.goBack()
}
