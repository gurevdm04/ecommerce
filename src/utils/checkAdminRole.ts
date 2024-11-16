import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const checkAdminRole = async (userId: string): Promise<boolean> => {
  const roleDoc = await getDoc(doc(db, "roles", userId));
  return roleDoc.exists() && roleDoc.data()?.role === "admin";
};
