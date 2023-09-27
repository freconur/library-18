import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../context/GlobalContext'
import Tickets from '../../modals/ticketsModal/Tickets'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';
import { numberToNameMonth } from '../../dates/date';
import { AuthAction, withUser } from 'next-firebase-auth';
import { BsLayoutSidebar } from 'react-icons/bs';
import LayoutDashboard from '../../layout/LayoutDashboard';
const AnulacionVenter = () => {


  const { getTicketsContext, LibraryData, setModalCancellationOfSale } = useGlobalContext()
  const { getTickets, showCancellationOfsaleModal } = LibraryData
  const [startDate, setStartDate] = useState(dayjs());
  const [minDate, setMinDate] = useState(dayjs(new Date().setMonth(7)));
  const [findTicket, setFindTicket] = useState<Ticket>()
  const dateData: DateData = {
    date: startDate.date(),
    month: numberToNameMonth(startDate.month()),
    year: startDate.year(),
  }
  useEffect(() => {
    //debere colocar la funcion para poder traerme todods los tickets disponibles
    getTicketsContext(dateData)
  }, [startDate])

  const handleClickModal = (ticket:number) => {
    setModalCancellationOfSale(showCancellationOfsaleModal)
    const findTicket:Ticket | undefined = getTickets.find(t => Number(t.id) === ticket)
    setFindTicket(findTicket)
  }
  return (
    <LayoutDashboard>
    <div className="w-full">
      {
        showCancellationOfsaleModal && findTicket &&
        <Tickets findTicket={findTicket}/>
      }
      <h1 className='text-slate-700 text-2xl font-dmMono capitalize my-5'>anulacion de venta</h1>
      <div className='flex justify-end items-center'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker minDate={minDate} value={startDate} onChange={(newValue: any) => setStartDate(newValue)} />
        </LocalizationProvider>
      </div>
      <h3 className='text-slate-600 font-dmMono my-3'>
        tickets de venta
      </h3>
      <ul className='w-full grid gap-3 bg-white p-1'>
        {
          getTickets &&
          getTickets.map(ticket => {
            return (
              <li onClick={() =>handleClickModal(Number(ticket.id))} key={ticket.id} className='border-[1px] border-pastel2 p-1 rounded-sm w-full flex hover:bg-pastel9 duration-300 cursor-pointer justify-between items-center drop-shadow-sm'>
                <div className='capitalize text-slate-600'>fecha: {`${ticket.date}`}</div>
                <div className='capitalize text-slate-600'>ticket: {ticket.id}</div>
              </li>
            )
          })
        }
      </ul>
    </div>
    </LayoutDashboard>
  )
}
export default withUser({
  // whenAuthed: AuthAction.RENDER
  // whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(AnulacionVenter)