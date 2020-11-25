export const httpService = {
  get: <T>(url: string): Promise<T> =>
    fetch(`https://api.github.com/${url}`).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    }),
};
