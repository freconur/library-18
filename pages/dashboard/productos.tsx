import LayoutDashboard from "../../layout/LayoutDashboard"
import { InstantSearch, SearchBox, Hits, Index, Configure } from 'react-instantsearch';
import algoliasearch from 'algoliasearch/lite';
import Hit from "../../components/Hits/Hit";
import styles from '../../styles/Hits.module.css'
const APPLICATION_ID = 'A03AC5JW4J'
const SEARCH_API_KEY = '3c93f2a51d243945a1e56ae63edf4794'
const ALGOLIA_INDEX = 'products'
const searchClient = algoliasearch(APPLICATION_ID, SEARCH_API_KEY);

const Productos = () => {

  return (
      <div className="w-full h-full">
        <InstantSearch searchClient={searchClient} indexName={ALGOLIA_INDEX}>

          <SearchBox
            autoFocus={true}
            classNames={{
              root: 'p-3 shadow-sm',
              form: 'relative',
              input: 'block w-full pl-9 pr-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md focus:ring-1',
              submitIcon: 'absolute top-4 left-0 bottom-0 w-6 ',
              resetIcon: 'hidden'
            }}
          />
              <Hits className="w-full" hitComponent={Hit}/>
        </InstantSearch>
      </div>
  )
}

export default Productos
