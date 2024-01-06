import axios from "axios";

const performLogin = async (username: string, password: any) => {
  const credentials = `${username}:${password}`;
  const base64Credentials = btoa(credentials);

  try {
    const response = await axios.post(
      "https://api.harveydb.com/login",
      // Set your request data or body as needed
      {},
      {
        headers: {
          Authorization: `Basic ${base64Credentials}`,
          "Content-Type": "application/json", // Set your content type as needed
        },
      }
    );

    if (response.status === 200) {
      // Handle successful login
      console.log("Login successful");
      return response.data;
    } else {
      // Handle authentication failure
      console.error("Login failed");
      return false;
    }
  } catch (error) {
    console.error("Error during login:", error);
    return false;
  }
};

export default performLogin;



