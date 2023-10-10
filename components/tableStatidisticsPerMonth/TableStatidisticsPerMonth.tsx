import React from 'react'

interface Props {
  dataStatistics: GeneralStatisticsPerDay[]
}
const TableStatidisticsPerMonth = ({ dataStatistics }: Props) => {
  return (
    <div className='w-full overflow-y-scroll h-[300px]  lg:h-[300px] xl:h-[300px]'>
    <table className='w-full'>
      <thead className='bg-slate-200 border-b-[1px] border-gray-200 text-slate-500 sticky top-0 left-0 right-0 z-10'>
        <tr className=''>
          <th className='text-center uppercase'>#</th>
          <th className='text-center uppercase'>i</th>
          <th className='text-center uppercase'>i %</th>
          <th className='text-center uppercase'>t</th>
          <th className='text-center uppercase'>t %</th>
          <th className='text-center uppercase'>t. p.</th>
          <th className='text-center uppercase'>t. p. %</th>
        </tr>
      </thead>
      <tbody className='text-slate-400'>
        {
          dataStatistics &&
          dataStatistics?.map(data => {
            return (
              <tr key={data.date} className='hover:bg-slate-100 cursor-pointer border-b-[1px] border-slate-100 h-[40px]'>
                <td className='text-center'>{data.date}</td>
                <td className='text-center'>{data.dailySales?.toFixed(2)}</td>
                {
                data.growthSales ?
                <td className='text-center'>{`${data.growthSales}`}</td>
                :
                <td className='text-center'>0</td>
                }
                <td className='text-center'>{data.tickets}</td>

                {
                data.growthTicket ?
                <td className='text-center'>{`${data.growthTicket}`}</td>
                :
                <td className='text-center'>0</td>
                }
                <td className='text-center'>{data.averageTicket}</td>

                {
                data.growthAverageTicket ?
                <td className='text-center'>{`${data.growthAverageTicket}`}</td>
                :
                <td className='text-center'>0</td>
                }
                {/* <td className='text-center'>{data.averageTicket}</td> */}
              </tr>

            )
          })
        }
      </tbody>
    </table>

    </div>
  )
}

export default TableStatidisticsPerMonth