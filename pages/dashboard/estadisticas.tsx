import { useEffect } from "react"
import { useGlobalContext } from "../../context/GlobalContext"
import { Line } from "react-chartjs-2"
// import { Line } from 'react-chartjs-2'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';
import { currentMonth } from "../../dates/date";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Estadisticas = () => {
  const { dailySaleContext, LibraryData, dailyTicketContext, incomePerDay } = useGlobalContext()
  const { dailySale, dailyTicket, averageTicket, dataSales, dataSalesLabel, dataTotalSalesPerMonth } = LibraryData

  useEffect(() => {
    dailySaleContext()
    dailyTicketContext()
    incomePerDay()
  }, [dailySale, dailyTicket])
  console.log('dataSales', dataSales)
  console.log('dataSalesLabel', dataSalesLabel)
  console.log('dataTotalSalesPerMonth', dataTotalSalesPerMonth)

  const sales = {
    labels: dataSalesLabel,
    datasets: [{
      label: 'venta',
      data: dataSales,
      backgroundColor: [
        'rgb(0, 102, 255)'
      ],
      borderColor: [
        'rgb(0, 102, 255)'
      ],
      borderWidth: 3,
      tension: 0.5,
      pointRadius: 6
    }]
  }
  return (
    <div className="w-full">
      {/* <div className="h-altura rounded-t-lg"> */}
      <h1 className="text-2xl font-semibold my-5">Estadisticas</h1>
      {/* <div>venta del dia : {dailySale ? dailySale : 0}</div> */}
      <div className="grid grid-cols-2 gap-5 w-full">
        <div className="w-full bg-gradient-to-l from-amber-200 to-amber-300 rounded-lg p-2 shadow-md">
          <h2 className="text-white text-xl font-semibold capitalize">Daily sales</h2>
          <div className="font-semibold">
            <div className="text-slate-700">Venta : <span className="text-slate-700 font-semibold">S/ {dailySale && dailySale.toFixed(2)}</span></div>
            <div className="text-slate-700">Tickets : <span className="font-semibold">{dailyTicket && dailyTicket}</span></div>
            <div className="text-slate-700">T. promedio : S/ {averageTicket ? averageTicket.toFixed(2) : 0}</div>
          </div>
        </div>
        <div className="w-full bg-gradient-to-l from-blue-400 to-blue-500 rounded-lg p-2 shadow-md">
          <h2 className="text-white text-xl font-semibold capitalize ">Ingresos</h2>
          <div className="font-semibold">
            <div className="text-slate-700 capitalize">{currentMonth()} : S/ {dataTotalSalesPerMonth}</div>
            <div className="text-slate-700">2023 : S/ 580</div>
          </div>
        </div>
        {/* <div className="w-full">
          <h2 className="text-gray-400 font-semibold">Ingresos por ventas</h2>
          <div>ingresos del mes: s/ {dataTotalSalesPerMonth}</div>
          <div>ingresos 2023: s/ 380</div>
        </div>
        <div className="w-full">
          <h2 className="text-gray-400 font-semibold">Ingresos por ventas</h2>
          <div>ingresos del mes: s/ {dataTotalSalesPerMonth}</div>
          <div>ingresos 2023: s/ 380</div>
        </div> */}
      </div>
      <div className="mt-5">
        <h2 className="text-gray-400 text-xl font-semibold capitalize mb-5">grafico lineal de ventas diario</h2>
        <div className="w-[99%]">
          <Line data={sales} />
        </div>
      </div>
    </div>

  )
}

export default Estadisticas