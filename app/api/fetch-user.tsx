import { Users } from "@/model/user";
import axios from "axios";

export const fetchData = async (): Promise<Users | null> => {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=100");
// please check for error, else wont work
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
