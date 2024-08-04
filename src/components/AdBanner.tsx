import React from 'react'
import { AdBannerType } from '@/types';
import { IoPencil } from "react-icons/io5";

interface AdBannerProps extends AdBannerType {
    onEdit: (id:number) => void;
}

const AdBanner:React.FC<AdBannerProps> = ({
    id,
    title,
    description,
    cta,
    image,
    onEdit,
}) => {
    return (
        <div 
          className="mx-auto relative overflow-hidden w-[80%] md:w-full sm:h-[30rem] h-[25rem] rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          style={{ 
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center p-4 sm:p-6">
            <div className="flex-1 text-white">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">{title}</h2>
              <p className="mb-4 text-sm sm:text-base">{description}</p>
              <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base">
                {cta}
              </button>
            </div>
          </div>
          <button 
            onClick={() => onEdit(id)}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
          >
            <IoPencil className="h-5 w-5 text-gray-600" />
          </button>
        </div>
    );
}

export default AdBanner