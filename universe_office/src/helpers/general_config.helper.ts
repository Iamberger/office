const process = import.meta.env;

export const BASE_URL = process.VITE_BASE_URL
  ? process.VITE_BASE_URL
  : "https://server.shdevs.space/api";
export const MEDIA_BASE_URL = process.VITE_MEDIA_BASE_URL
  ? process.VITE_MEDIA_BASE_URL
  : "https://server.shdevs.space";
