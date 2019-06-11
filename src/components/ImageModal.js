import React from "react";
import { distanceInWordsToNow } from "date-fns";

import closeIcon from "../images/close-icon.svg";

const ImageModal = ({ handleClose, modalObj }) => {
  //console.log(modalObj.urls)

  let showHideClassName = modalObj.show
    ? "modal block z-50 h-screen w-screen fixed inset-0 flex flex-col lg:flex-row items-center justify-center p-4 lg:p-16"
    : "modal hidden";

  // const mainImg = modalObj.urls.regular !== undefined ? modalObj.urls.regular : (modalObj.urls.regular === 'none');
  // console.log("in modal comp "+ modalObj.user.id)

  return (
    <div
      className={showHideClassName}
      style={{ backgroundColor: `rgba(125,125,125,.7)` }}
    >
      {/* display version for mobile */}
      <div className="max-w-sm h-full rounded overflow-hidden bg-white p-4 shadow-lg relative lg:hidden">
        <button
          className="inline-block text-sm p4 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal-500 hover:bg-white absolute top-0 right-0 m-2"
          onClick={handleClose}
        >
          <img src={closeIcon} alt="close button" />
        </button>

        <img
          className="w-full cover"
          src={modalObj.urls.regular}
          alt={modalObj.alt_description}
        />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {modalObj.alt_description}
          </div>
          <p className="text-gray-700 text-base">{modalObj.description}</p>
        </div>

        <div>
          <a
            href={modalObj.links.download}
            rel="noreferrer noopener"
            target="_blank"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Download
          </a>
        </div>

        <div className="flex items-center px-6 py-4">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={modalObj.user.profile_image.small}
            alt={modalObj.user.name}
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{modalObj.user.name}</p>
            <p className="text-gray-600 leading-none">
              {modalObj.user.location}
            </p>
            <p className="text-gray-600">
              {distanceInWordsToNow(modalObj.created_at, {
                includeSeconds: true
              })}{" "}
              ago
            </p>
          </div>
        </div>
      </div>

      {/* display version for desktop */}

      <section className="modal-main bg-white h-full w-full p4 relative rounded p-4 shadow-lg hidden lg:block">
        <button
          className="inline-block text-sm p4 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal-500 hover:bg-white absolute top-0 right-0 m-2"
          onClick={handleClose}
        >
          <img src={closeIcon} alt="close button" />
        </button>

        <div className="max-w-sm w-full h-full lg:max-w-full lg:flex">
          <div
            className="w-3/4 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{ backgroundImage: `url(${modalObj.urls.regular})` }}
            title={modalObj.alt_description}
          />

          <div className="p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">
                {modalObj.alt_description}
              </div>
              <p className="text-gray-700 text-base">{modalObj.description}</p>
            </div>

            <div>
              <a
                href={modalObj.links.download}
                rel="noreferrer noopener"
                target="_blank"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              >
                Download
              </a>
            </div>

            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={modalObj.user.profile_image.medium}
                alt={modalObj.user.name}
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">
                  {modalObj.user.name}
                </p>
                <p className="text-gray-600 leading-none">
                  {modalObj.user.location}
                </p>
                <p className="text-gray-600">
                  {distanceInWordsToNow(modalObj.created_at, {
                    includeSeconds: true
                  })}{" "}
                  ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageModal;
