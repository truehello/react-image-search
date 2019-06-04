import React from "react";
import { distanceInWordsToNow } from 'date-fns';
import Loader from './Loader'
import Img from 'react-image';

const ImageCard = ({ item }) => {
  return (
    <div className="w-full h-64 rounded overflow-hidden bg-white shadow-lg relative " key={item.id}>
      
      <Img src={item.urls.regular} loader={<Loader />} alt={item.alt_description} />
     
      {/* <img
        className="w-full object-cover"
        alt={item.alt_description}
        data-src={item.urls.regular}
        src={item.urls.regular}
      /> */}

      <div className="item__overlay absolute top-0 opacity-75 bg-white p-4 w-full h-full hidden">
        {/* <a
          className="action download"
          href={item.links.html}
          target="_blank"
          rel="noopener noreferrer nofollow"
        /> */}

        <div className="item__meta">
          
          <h4 className="text-gray-900 text-left font-bold text-xl mb-2">{item.alt_description}</h4>

          <div className="flex items-center">
              <img className="w-10 h-10 rounded-full mr-4" src={item.user.profile_image.small} alt={item.user.name} />
      
              <div className="text-sm text-left">
              <a
                    href={item.user.links.portfolio}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                <p className="text-gray-900 leading-none"> {item.user.name}</p>
                </a>
                <p className="text-gray-600">{distanceInWordsToNow(item.created_at,{includeSeconds: true})} ago</p>
              </div>


          </div>
        </div>
      </div>
      </div>
  );
};

export default ImageCard;
