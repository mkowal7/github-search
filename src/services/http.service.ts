export const httpService = {
  request: <T>(url: string): Promise<T> =>
    fetch(`https://api.github.com/${url}`).then((response) => {
      if (response.status === 200) {
        return response.json();
      }

      throw new Error(response.statusText);
    }),
};
