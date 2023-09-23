import { OrderByDirection, QuerySnapshot, Timestamp, addDoc, collection, deleteDoc, doc, endAt, endBefore, getDoc, getDocs, getFirestore, limit, onSnapshot, orderBy, query, setDoc, startAfter, updateDoc, where } from "firebase/firestore";
import { app } from "../firebase/firebase.config";
import { currentDate, currentMonth, currentYear, functionDateConvert } from "../dates/date";

const db = getFirestore(app)
const YEAR_MONTH = `${currentMonth()}-${currentYear()}/${currentMonth()}-${currentYear()}`
const yearMonth = `${currentMonth()}-${currentYear()}`

export const getTickets = async (dispatch: (action: any) => void,dateData:DateData) => {
  const pathTicket = `${dateData.month}-${dateData.year}/${dateData.month}-${dateData.year}/${dateData.date}`
  const ticketPath = `/db-ventas/xB98zEEqUPU3LXiIf7rQ/${pathTicket}/`
  const ticketsRef = collection(db, ticketPath)
  const querySanpshot = await getDocs(ticketsRef)
  const tickets: any = []
  if (querySanpshot.size === 0) {
    console.log('no hay tickets')
  } else {
    querySanpshot.docs.forEach((item) => {
      tickets.push({ ...item.data(), id: item.id, date: functionDateConvert(item.data().timestamp.toDate()) })
    })
    console.log('tickets', tickets)
    dispatch({ type: "getTickets", payload: tickets })

  }
}

export const cancelTicket = () => {

}
