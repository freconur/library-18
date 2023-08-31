
import { OrderByDirection, Timestamp, addDoc, collection, deleteDoc, doc, endAt, endBefore, getDoc, getDocs, getFirestore, limit, onSnapshot, orderBy, query, setDoc, startAfter, updateDoc, where } from "firebase/firestore";
import { app } from "../firebase/firebase.config";
import { currentDate, currentMonth, currentYear } from "../dates/date";

const db = getFirestore(app)
const YEAR_MONTH = `${currentMonth()}-${currentYear()}/${currentMonth()}-${currentYear()}`
const yearMonth = `${currentMonth()}-${currentYear()}`

export const getProductByCodeToUpdateContext = async (dispatch:(action:any) => void, code:string) => {
  const docRef = doc(db, "products", `${code}`);
  const docSnap = await getDoc(docRef)
  
  if (docSnap.exists()) {
    dispatch({ type: "productToUpdate", payload: docSnap.data() })
    dispatch({ type: "loaderChargerStock", payload: false })

  } else {
    dispatch({ type: "productToUpdate", payload: "no se encontro producto" })
    dispatch({ type: "loaderChargerStock", payload: false })
  }
}