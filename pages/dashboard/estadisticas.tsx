import { useEffect, useState } from "react"
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
import CardEstadisticas from "../../components/card-estadisticas/CardEstadisticas";
import { getDailySales } from "../../reducer/Product";
import TableStatidisticsPerMonth from "../../components/tableStatidisticsPerMonth/TableStatidisticsPerMonth";
import { AuthAction, useUser, withUser } from "next-firebase-auth";
import LayoutDashboard from "../../layout/LayoutDashboard";
import Loader from "../../components/Loader/Loader";
import TestNavbar from "../../components/Navbar/TestNavbar";

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
  // const dataUser = useUser()
  const { getDataUser, dailySaleContext, LibraryData, dailyTicketContext, incomePerDay, totalSalesPerYearContext, getDataToStatistics, loaderState } = useGlobalContext()
  const { dailySale, dailyTicket, averageTicket, dataSales, dataSalesLabel, dataTotalSalesPerMonth, totalSalesYear, dataStatistics, loader } = LibraryData
  // useEffect(() => {
  //   if (dataUser.id) {
  //     setTimeout(() => {
  //       dataUser.id && getDataUser(dataUser.id)
  //     }, 2000)
  //   }
  // }, [dataUser.id, dataUser])
  useEffect(() => {
    dailySaleContext()
    dailyTicketContext()
    totalSalesPerYearContext()
    incomePerDay()
    getDataToStatistics()

    getDailySales()
  }, [dailySale, dailyTicket])

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
  console.log('dataStatistics', dataStatistics)
  // console.log('dataStatistics',dataStatistics[dataStatistics.length - 1].dailySales)
  return (
    <LayoutDashboard>
      {/* <>
      <TestNavbar dataUser={dataUser}/>
      </> */}
      {
        loader
          ?
          <div className="grid h-loader w-full place-content-center">

            <Loader />
          </div>
          :
          <div className="w-full relative">
            <h1 className="text-2xl text-slate-700 font-dmMono  my-5">{`Dashboard > Estadisticas`}</h1>
            <CardEstadisticas dataStatistics={dataStatistics} dataSales={dataSales} dailySale={dailySale} dailyTicket={dailyTicket} averageTicket={averageTicket} dataTotalSalesPerMonth={dataTotalSalesPerMonth} totalSalesYear={totalSalesYear} />
            <div className="my-[50px] w-full cs:h-[300px] lg:h-[350px] xl:h-[400px]">
              <h2 className="text-slate-600 font-dmMono text-xl font-medium capitalize mb-5">graficos y ratios</h2>
              {/* <div className="w-[99%]"> */}
              <div className="grid p-2 grid-cols-1 gap-4 cs:grid-cols-2 w-full rounded-sm mb-[50px]">
                <div className="w-full bg-white p-2">
                  <Line className="w-full" options={options} data={sales} />

                </div>
                {/* <Line className="w-full" options={options} data={sales} /> */}
                <div className="w-full bg-white">
                  <TableStatidisticsPerMonth dataStatistics={dataStatistics} />
                </div>
              </div>
            </div>
          </div>
      }
    </LayoutDashboard>
  )
}
export default withUser({
  // whenAuthed: AuthAction.RENDER
  // whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(Estadisticas)