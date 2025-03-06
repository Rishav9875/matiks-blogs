export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://forcibly-mutual-hog.ngrok-free.app";

export const getAssetUrl = (asset: string) => {
  return `${API_URL}${asset}`;
};
