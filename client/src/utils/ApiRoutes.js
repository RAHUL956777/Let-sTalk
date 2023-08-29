export const HOST = "http://localhost:8080";

const AUTH_ROUTE = `${HOST}/api/auth`;
const MESSAGES_ROUTES = `${HOST}/api/messages`;

export const CHECK_USER_ROUTE = `${AUTH_ROUTE}/check_user`;
export const ONBOARD_USER_ROUTE = `${AUTH_ROUTE}/onboard-user`;
export const GET_ALL_CONTACTS = `${AUTH_ROUTE}/get-contacts`;

export const ADD_MESSAGE_ROUTE = `${MESSAGES_ROUTES}/add-message`;
// export const GET_MESSAGES_ROUTE = `${MESSAGES_ROUTES}/get-messages`;