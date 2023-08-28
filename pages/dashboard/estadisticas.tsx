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
      <div>pagina de estadisticas</div>
      {/* <div>venta del dia : {dailySale ? dailySale : 0}</div> */}
      <div className="grid grid-cols-2 gap-5 w-full">
        <div className="w-full bg-gradient-to-l from-amber-200 to-amber-300 rounded-lg p-2 shadow-md">
          <h2 className="text-white text-xl font-semibold capitalize">Daily</h2>
          <div className="font-semibold">
            <div className="text-blue-600">Venta del dia : <span className="text-blue-600 font-semibold">s/ {dailySale && dailySale.toFixed(2)}</span></div>
            <div className="text-white">Tickets del dia : <span className="font-semibold">{dailyTicket && dailyTicket}</span></div>
            <div className="text-slate-700">Ticket promedio : s/ {averageTicket ? averageTicket.toFixed(2) : 0}</div>
          </div>
        </div>
        <div className="w-full bg-gradient-to-l from-blue-400 to-blue-500 rounded-lg p-2 shadow-md">
          <h2 className="text-white text-xl font-semibold capitalize ">Ingresos por ventas</h2>
          <div className="font-semibold">
            <div className="text-slate-700">ingresos del mes: s/ {dataTotalSalesPerMonth}</div>
            <div className="text-white">ingresos 2023: s/ 380</div>
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
        <h2 className="text-gray-400 text-xl font-semibold capitalize mb-5">grafico lineal de ventas</h2>
        <div className="w-[99%]">
          <Line data={sales} />
        </div>
      </div>
    </div>

  )
}

export default Estadisticas