export const validateLoginFields = (email: string, password: string) => {
  if (!email || !password) {
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
