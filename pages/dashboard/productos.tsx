import { InstantSearch, SearchBox, Hits, Pagination, Configure } from 'react-instantsearch';
import algoliasearch from 'algoliasearch/lite';
import Hit from "../../components/Hits/Hit";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from "react";
const APPLICATION_ID = 'A03AC5JW4J'
const SEARCH_API_KEY = '3c93f2a51d243945a1e56ae63edf4794'
const ALGOLIA_INDEX = 'products'
const searchClient = algoliasearch(APPLICATION_ID, SEARCH_API_KEY);


const Productos = () => {
  const [successfullCopy, setSuccessfullCopy] = useState(false)


  const successToastify = () => {
    console.log('estamos entrando')
    setSuccessfullCopy(true)
    toast.success('codigo copiado!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    })
  }

  const alertNotificacion = (alert: boolean) => {
    setSuccessfullCopy(alert)
  }
  return (
    <>
      {
        successfullCopy === true &&
        <ToastContainer />
      }
      <div className="w-full h-full relative">
        <h3 className="text-xl text-slate-700 font-dmMono">{`Dashboard > Mis Productos`}</h3>
        <InstantSearch searchClient={searchClient} indexName={ALGOLIA_INDEX}>
          <Configure
            hitsPerPage={5}
            clickAnalytics={true}
          />
          <SearchBox
            autoFocus={true}
            placeholder="producto"
            classNames={{
              root: 'p-3',
              form: 'relative',
              input: 'block w-full pl-9 pr-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md focus:ring-1',
              submitIcon: 'absolute top-4 left-0 bottom-0 w-6 ',
              resetIcon: 'hidden'
            }}
          />
          <Hits hitComponent={Hit} />
          <div className="w-full bg-white m-auto">
            <Pagination classNames={{
              firstPageItem: 'mr-1 p-1 h-[25px] w-[20px] rounded-sm grid place-content-center',
              root: 'flex text-white justify-center items-center h-[50px]',
              list: 'flex gap-1 justify-center items-center',
              item: 'bg-blue-500',
              pageItem: 'flex items-center justify-center bg-blue-500 rounded-full h-[20px] w-[20px]',
              selectedItem: 'bg-blue-200',
              lastPageItem: 'ml-1 p-1 h-[25px] w-[20px] rounded-sm grid place-content-center',
              nextPageItem: 'ml-1 p-1 h-[25px] w-[20px] rounded-sm grid place-content-center',
              previousPageItem: 'mr-1 p-1 h-[25px] w-[20px] rounded-sm grid place-content-center'
            }} />

          </div>

        </InstantSearch>
      </div>
    </>
  )
}

export default Productos
