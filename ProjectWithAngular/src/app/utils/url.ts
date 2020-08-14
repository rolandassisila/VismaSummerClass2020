export const DATABASE_URL: string = "http://localhost:4200/posts";
export const SELECTED_POST_ID: string = new URL(window.location.href).search.split("?id=")[1];
export const CURRENT_URL:URL = new URL(window.location.href);