import http from "@/netClient/config";

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
    const response = await http.patch("/todo/" + id, {
      isDone,
    });
    return response.data?.todos ?? [];
  } catch (error) {
    console.error({ error });
  }
}

export async function createToDo({ title }) {
  try {
    const response = await http.post("/todo", {
      title,
    });
    return response?.data ?? [];
  } catch (error) {
    console.error({ error });
  }
}

export async function deleteToDo({id}) {
    try {
        const response = await http.delete("/todo/" + id);
        return response?.data ?? [];
    } catch (error) {
        console.error(error);
    }
}