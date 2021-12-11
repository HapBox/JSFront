import http from "@/netClient/config";

export async function doRegister(login, email, password) {
  try {
    const response = await http.post("/auth/registration", {
      login,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error({ error });
    throw error;
  }
}

export async function doLogin(login, password) {
  try {
    const response = await http.post("/auth/login", {
      login,
      password,
    });
    return response.data;
  } catch (error) {
    console.error({ error });
    throw error
  }
}
