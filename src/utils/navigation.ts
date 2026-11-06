export const redirigirA = (url: string): void => {
  if (typeof window !== "undefined") {
    window.location.href = url;
  }
};
