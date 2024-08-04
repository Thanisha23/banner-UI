import React, { useState } from 'react';
import { AdBannerType } from '@/types';
import {motion} from "framer-motion"
import { RxCross1 } from "react-icons/rx";
interface EditBannerSheetProps {
  open: boolean;
  onClose: () => void;
  banner: AdBannerType;
  onSave: (updatedBanner: AdBannerType) => void;
}

const EditBannerSheet: React.FC<EditBannerSheetProps> = ({
  open,
  onClose,
  banner,
  onSave,
}) => {
  const [editedBanner, setEditedBanner] = useState<AdBannerType>(banner);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedBanner((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedBanner);
    onClose();
  };

  if (!open) return null;

  const bottomSheet = {
    hidden: {
      y: "100%",
    },
    visible: {
      y: "10%",
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 300,
        duration:5,
      }
    }
  };
  return (
    <div  className="fixed inset-0 overflow-hidden z-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>
        <div className="fixed inset-0 p-10  flex justify-center items-center">
          <div className="relative w-screen max-w-md">
            <motion.div  initial="hidden" animate="visible" variants={bottomSheet} className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
              <div className="px-4 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Edit Banner</h2>
                  <button
                    type="button"
                    className="bg-white rounded-md text-gray-400 hover:text-gray-500 "
                    onClick={onClose}
                  >
                    
                    <RxCross1 size={25} color='gray' />
                  </button>
                </div>
              </div>
              <div className="mt-6 relative flex-1 px-4 sm:px-6">
                <div className="space-y-6">
                  {Object.entries(editedBanner).map(([key, value]) => (
                    key !== 'id' && (
                      <div key={key}>
                        <label htmlFor={key} className="block text-sm font-medium text-gray-700 capitalize">
                          {key}
                        </label>
                        {key === 'description' ? (
                          <textarea
                            name={key}
                            id={key}
                            rows={3}
                            value={value}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        ) : (
                          <input
                            type="text"
                            name={key}
                            id={key}
                            value={value}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        )}
                      </div>
                    )
                  ))}
                </div>
              </div>
              <div className="mt-5 sm:mt-6 px-4 sm:px-6">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md  shadow-sm px-4 py-2 bg-gradient-to-r from-violet-300 to-pink-300 hover:bg-gradient-to-l hover:from-pink-400 hover:to-violet-400 text-base font-bold text-white sm:text-lg"
                  onClick={handleSave}
                >
                  Save Changes
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBannerSheet;