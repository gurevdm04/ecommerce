import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export async function isAdmin(userId: string): Promise<boolean> {
  const userRef = doc(db, "users", userId);
  const userDoc = await getDoc(userRef);

  if (userDoc.exists()) {
    const userData = userDoc.data();

    return userData?.role === "admin";
  }
  return false;
}
