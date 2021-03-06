import axios from "axios";
import authHeader from "./auth-header";
import API_URL from "../utils/constants";

const createTodo = (todo) => {
  return axios.post(API_URL + "/todos", { todo }, { headers: authHeader() });
};

const getTodoState = (todoId) => {
  return axios.get(API_URL + "/todos/" + todoId + "/state", {
    headers: authHeader(),
  });
};

const deleteTodo = (todoId) => {
  return axios.delete(API_URL + "/todos/" + todoId, {
    headers: authHeader(),
  });
};

const toggleTodoState = (todoId) => {
  return axios.put(
    API_URL + "/todos/" + todoId + "/toggle",
    {},
    {
      headers: authHeader(),
    }
  );
};

const fetchTodoList = () => {
  return axios.get(API_URL + "/todos", {
    headers: authHeader(),
  });
};
const TodoService = {
  createTodo,
  getTodoState,
  deleteTodo,
  fetchTodoList,
  toggleTodoState,
};

export default TodoService;
