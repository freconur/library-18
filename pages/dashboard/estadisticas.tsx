import { useEffect } from "react"
import { useGlobalContext } from "../../context/GlobalContext"
import { Line } from "react-chartjs-2"
import { BsCashCoin } from "react-icons/bs";
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
import CardEstadisticas from "../../components/card-estadisticas/CardEstadisticas";

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
  const { dailySaleContext, LibraryData, dailyTicketContext, incomePerDay, totalSalesPerYearContext } = useGlobalContext()
  const { dailySale, dailyTicket, averageTicket, dataSales, dataSalesLabel, dataTotalSalesPerMonth, totalSalesYear } = LibraryData

  useEffect(() => {
    dailySaleContext()
    dailyTicketContext()
    totalSalesPerYearContext()
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
      pointRadius: 6,

    }]
  }
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'center' as const,
      },
      title: {
        display: true,
        text: 'ventas diarias',
      },
    },
  };
  return (
    <div className="w-full">
      <h1 className="text-2xl text-slate-700 font-dmMono  my-5">{`Dashboard > Estadisticas`}</h1>
      <CardEstadisticas dailySale={dailySale} dailyTicket={dailyTicket} averageTicket={averageTicket} dataTotalSalesPerMonth={dataTotalSalesPerMonth} totalSalesYear={totalSalesYear} />

      <div className="mt-5">
        <h2 className="text-slate-600 font-dmMono text-xl font-medium capitalize mb-5">graficos</h2>
        {/* <div className="w-[99%]"> */}
        <div className="grid p-2 grid-cols-1 lg:grid-cols-2 w-full rounded-sm">
          <div className="w-full bg-white p-2">
            <Line options={options} data={sales} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Estadisticas