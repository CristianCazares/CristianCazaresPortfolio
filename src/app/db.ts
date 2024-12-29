import { db } from "./connection";
import { doc, getDoc } from "firebase/firestore";

export const fetchVariable = async (
  collection: string,
  document: string,
  variable: string
): Promise<string | boolean | number | null> => {
  try {
    const docRef = doc(db, collection, document);

    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      return data[variable] ?? null;
    } else {
      console.error("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching variable:", error);
    return null;
  }
};
