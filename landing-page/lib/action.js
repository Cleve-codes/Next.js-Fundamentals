export const serverAction = async (formData) => {
  "use server"
  const {name, email, message} = Object.fromEntries(formData);

  console.log(name, email, message);
}