export const validateSignUpFields = (
  firstName: string,
  lastName: string,
  dateOfBirth: string,
  email: string,
  password: string
) => {
  if (!firstName || !lastName || !dateOfBirth || !email || !password) {
    return "All fields are required.";
  }
  if (!validateEmail(email)) {
    return "Please enter a valid email address.";
  }
  return "";
};

export const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
