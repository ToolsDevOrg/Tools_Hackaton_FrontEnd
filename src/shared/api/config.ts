// users
export const regUser = `/users/register`;

export const loginUser = `/users/register`;

export const currentUser = `/users/current`;

export const resfreshUser = `/users/refresh`;

export const logoutUser = `/users/logout`;

// passes
export const createPasses = `/passes/create`;
export const detailPasses = (passId: string) => `/passes/detailt/${passId}`;
export const filerPasses = (filterType: string) => `/passes/detailt/${filterType}`;