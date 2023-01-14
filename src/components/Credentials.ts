export const access = (username: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "myUsername" && password === "password") {
        resolve(true);
      } else {
        reject();
      }
    }, 1000);
  });
};
