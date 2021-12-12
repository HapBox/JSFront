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
    const { accessToken } = response.data;
    localStorage.accessToken = accessToken;
    return accessToken;
  } catch (error) {
    console.error({ error });
    throw error;
  }
}

export async function doLogout() {
  try {
    const response = await http.post("/user/logout");
    localStorage.removeItem("accessToken");
    return response.data;
  } catch (error) {
    console.error({ error });
    throw error;
  }
}

export async function fetchToDoList() {
  try {
    const response = await http.get("/todo");
    return response.data?.todos ?? [];
  } catch (error) {
    console.error({ error });
    throw error;
  }
}

export async function patchToDo({ id, isDone }) {
  try {
    const response = await http.patch(
      "/todo/" + id,
      {
        isDone,
      },
    );
    return response.data?.todos ?? [];
  } catch (error) {
    console.error({ error });
  }
}

export async function createToDo({ title }) {
    try {
      const response = await http.post(
        "/todo",
        {
          title,
        },
      );
      return response?.data ?? [];
    } catch (error) {
      console.error({ error });
    }
  }