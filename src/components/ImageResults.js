import React, { useState } from "react";
import LazyLoad from "react-lazyload";

import { useAsyncCombineSeq, useAsyncRun } from "react-hooks-async";
import { useAsyncTaskDelay } from "react-hooks-async/dist/use-async-task-delay";
import { useAsyncTaskFetch } from "react-hooks-async/dist/use-async-task-fetch";

import ImageCard from "./ImageCard";
import Loader from "./Loader";
import Pagination from "./Pagination";
import ImageModal from "./ImageModal";
import "../css/ImageResults.css";

const Err = ({ error }) => (
  <div>
    Error:{error.name} {error.message}
  </div>
);

const ImageResults = ({ query, currentPage, setCurrentPage }) => {
  let [modalObj, setShowModal] = useState({ item: null });

  const handleCardClick = (item, e) => {
    e.preventDefault();
    currentItem = { ...item };

    setShowModal({ ...currentItem, show: true });
    return;
  };

  const closeModal = e => {
    e.preventDefault();
    // alert("close me");
    setShowModal(currentItem);
    return;
  };

  const envAPIKey = process.env.REACT_APP_UNSPLASH_API_KEY;
  const unsplashURL = process.env.REACT_APP_UNSPLASH_API_URL;

  const url =
    `${unsplashURL}` +
    `page=${currentPage}&per_page=102&query=${query}&` +
    `client_id=${envAPIKey}`;

  const delayTask = useAsyncTaskDelay(500, [query]);
  const fetchTask = useAsyncTaskFetch(url);
  const combinedTask = useAsyncCombineSeq(delayTask, fetchTask);
  useAsyncRun(combinedTask);
  if (delayTask.pending) return <div className="flex items-center justify-center h-screen">Waiting...</div>
  if (fetchTask.error) return <Err error={fetchTask.error} />;
  if (fetchTask.pending) return <div className="flex items-center justify-center h-screen"><Loader abort={fetchTask.abort} width="200" /></div>;
  if (!fetchTask.result) return <div>No result</div>;

  let currentItem = fetchTask.result.results[0];

  //ensure the modalObj has property before the component renders
  if (modalObj.id === undefined) {
    setShowModal({ ...currentItem, show: false });
  }

  console.log(fetchTask.result);
  return (
    <main className="relative pt-32 lg:pt-24 xl:pt-24">
      <section className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-between w-full p-6 mb-4">
        <h3 className="text-1xl font-light text-left mb-2 ">
          {fetchTask.result.total} results for{" "}
          <span className="font-semibold">{query}</span>
        </h3>

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={fetchTask.result.total_pages}
        />
      </section>

      <section id="gallery" className="gridStyle px-4">
        {fetchTask.result.results.map(item => (
          <LazyLoad height={200} offset={[-200, 0]} once key={item.id}>
            <ImageCard item={item} handleCardClick={handleCardClick} />
          </LazyLoad>
        ))}
      </section>

      <ImageModal handleClose={closeModal} modalObj={modalObj} />
    </main>
  );
};

export default ImageResults;
