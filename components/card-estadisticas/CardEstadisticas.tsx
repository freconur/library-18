import React from 'react'
import { BsCashCoin } from "react-icons/bs";
import { currentMonth, currentYear } from '../../dates/date';
import { BsTicketPerforated } from "react-icons/bs";
import { BiMoneyWithdraw } from "react-icons/bi";
interface Props {
  dailySale: number | undefined,
  dailyTicket: number | undefined,
  averageTicket: number | undefined,
  dataTotalSalesPerMonth:number,
  totalSalesYear:number
}
const CardEstadisticas = ({ dailySale,dailyTicket,averageTicket,dataTotalSalesPerMonth, totalSalesYear}: Props) => {
  return (
    <div className=" bg-white rounded-md p-3 grid xl:grid-cols-4 lg:grid-cols-3 xss:p-2 xs:grid-cols-2 cs:grid-cols-3 px-5 font-comfortaa gap-5 w-full">
      {/* venta diaria */}
      <div className="w-full h-[150px] rounded-sm p-3 drop-shadow-xl bg-pastel2">
      {/* <div className="w-full h-[150px] rounded-sm p-3 drop-shadow-xl bg-gradient-to-r from-gr-1 from-0% via-gr-2 via-80% to-gr-3 to-100%"> */}
        <div className="grid w-full grid-cols-gridCardStat">
          <div className="w-full p-3">
            <div className="text-slate-500 font-bold text-xl capitalize ">Venta diaria</div>
            <div className="text-slate-500 flex gap-3 text-2xl font-bold">
              <div className="flex justify-center items-center">
                <p>$ {dailySale && dailySale.toFixed(2)}</p>
              </div>
            </div>

          </div>
          <div className="m-auto h-[50px] w-[50px] text-pastel2 rounded-full bg-white p-3">
            <BsCashCoin className="w-full h-full" />
          </div>
        </div>
        <div className="text-slate-400 p-3">
          <span className="bg-cardTransparent rounded-sm p-1">25 %</span> menos que ayer
        </div>
      </div>

      {/* ticket diarios */}
      <div className="w-full h-[150px] rounded-sm p-3 drop-shadow-xl bg-pastel7">
        <div className="grid w-full grid-cols-gridCardStat">
          <div className="w-full p-3">
            <div className="text-slate-500 font-bold text-xl capitalize ">Tickets</div>
            <div className="text-slate-500 flex gap-3 text-2xl font-bold">
              <div className="flex justify-center items-center">
                <p>{dailyTicket && dailyTicket.toFixed(2)}</p>
              </div>
            </div>

          </div>
          <div className="m-auto h-[50px] w-[50px] text-gy-1 rounded-full bg-white p-3">
            <BsTicketPerforated className="w-full h-full" />
          </div>
        </div>
        <div className="text-slate-400 p-3">
          <span className="bg-cardTransparent rounded-sm p-1">25 %</span> menos que ayer
        </div>
      </div>

      {/* ticket promedio */}

      <div className="w-full h-[150px] rounded-sm p-3 drop-shadow-xl bg-pastel6">
        <div className="grid w-full grid-cols-gridCardStat">
          <div className="w-full p-3">
            <div className="text-slate-500 font-bold text-xl capitalize ">T. promedio</div>
            <div className="text-slate-500 flex gap-3 text-2xl font-bold">
              <div className="flex justify-center items-center">
                <p>$ {averageTicket && averageTicket.toFixed(2)}</p>
              </div>
            </div>

          </div>
          <div className="m-auto h-[50px] w-[50px] text-gb-1 rounded-full bg-white p-3">
            <BiMoneyWithdraw className="w-full h-full" />
          </div>
        </div>
        <div className="text-slate-400 p-3">
          <span className="bg-cardTransparent rounded-sm p-1">25 %</span> menos que ayer
        </div>
      </div>

      {/* ingresos acumlativos del mes */}

      <div className="w-full h-[150px] rounded-sm p-3 drop-shadow-xl bg-pastel8">
        <div className="grid w-full grid-cols-gridCardStat">
          <div className="w-full p-3">
            <div className="text-slate-500 font-bold text-xl capitalize ">{currentMonth()}</div>
            <div className="text-slate-500 flex gap-3 text-2xl font-bold">
              <div className="flex justify-center items-center">
                <p>$ {dataTotalSalesPerMonth && dataTotalSalesPerMonth.toFixed(2)}</p>
              </div>
            </div>

          </div>
          <div className="m-auto h-[50px] w-[50px] text-go-1 rounded-full bg-white p-3">
            <BsCashCoin className="w-full h-full" />
          </div>
        </div>
        <div className="text-slate-400 p-3">
          <span className="bg-cardTransparent rounded-sm p-1">25 %</span> menos que ayer
        </div>
      </div>

      {/* ingresos anual */}
      <div className="w-full h-[150px] rounded-sm p-3 drop-shadow-xl bg-pastel9">
        <div className="grid w-full grid-cols-gridCardStat">
          <div className="w-full p-3">
            <div className="text-slate-500 font-bold text-xl capitalize ">{currentYear()}</div>
            <div className="text-slate-500 flex gap-3 text-2xl font-bold">
              <div className="flex justify-center items-center">
                <p>$ {totalSalesYear && totalSalesYear.toFixed(2)}</p>
              </div>
            </div>

          </div>
          <div className="m-auto h-[50px] w-[50px] text-ggw-1 rounded-full bg-white p-3">
            <BsCashCoin className="w-full h-full" />
          </div>
        </div>
        <div className="text-slate-400 p-3">
          <span className="bg-cardTransparent rounded-sm p-1">25 %</span> menos que ayer
        </div>
      </div>

    </div>
  )
}

export default CardEstadisticas