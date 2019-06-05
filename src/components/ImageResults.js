import React from 'react'
import LazyLoad from "react-lazyload";

import { useAsyncCombineSeq, useAsyncRun } from "react-hooks-async";
import { useAsyncTaskDelay } from "react-hooks-async/dist/use-async-task-delay";
import { useAsyncTaskFetch } from "react-hooks-async/dist/use-async-task-fetch";

import ImageCard from './ImageCard'
import Loader from "./Loader";
import Pagination from "./Pagination"

const Err = ({ error }) => (
    <div>
      Error:{error.name} {error.message}
    </div>
  );

const ImageResults = ({ query, currentPage, setCurrentPage }) => {

    const gridStyle = {
        display: `grid`,
        gridTemplateColumns: `1fr 1fr 1fr 1fr`,
        gridGap: `1.5rem`,
        
    }

    //const envAPIKey = '791b9d27d8b1f104818223ef2aba48b1621a5c9a36c6fae1f00baa7fe476a0f2'
    const envAPIKey = process.env.REACT_APP_UNSPLASH_API_KEY;
    const unsplashURL = process.env.REACT_APP_UNSPLASH_API_URL
   // const query ="jazz"

    const url =
    
        `${unsplashURL}` +
        `page=${currentPage}&per_page=28&query=${query}&` +
        `client_id=${envAPIKey}`

    const delayTask = useAsyncTaskDelay(500, [query]);
    const fetchTask = useAsyncTaskFetch(url);
    const combinedTask = useAsyncCombineSeq(delayTask, fetchTask);
    useAsyncRun(combinedTask);
    if (delayTask.pending) return <div>Waiting...</div>;
    if (fetchTask.error) return <Err error={fetchTask.error} />;
    if (fetchTask.pending) return <Loader abort={fetchTask.abort} width="200" />;
    if (!fetchTask.result) return <div>No result</div>;
    console.log(fetchTask.result)
    return(
        <main>

            <section className="flex items-center justify-between w-full bg-gray-400 p-6 mb-4">
                <h3 className="text-1xl font-light text-left">
                    {fetchTask.result.total} results for <span className="font-semibold">{query}</span>
                </h3>

                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={fetchTask.result.total_pages} />



            </section>
                
                
            <section id="gallery" className="px-4" style={gridStyle} >
               
                {fetchTask.result.results.map((item) => (
                    
                    <LazyLoad height={200} offset={[-200, 0]} once key={item.id} >
                        <ImageCard item={item} />
                    </LazyLoad>
                ))}
                
                
                
            </section>
        </main>
    )

}

export default ImageResults