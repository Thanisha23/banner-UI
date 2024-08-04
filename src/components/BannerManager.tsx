"use client";

import { useState } from "react";
import EditBannerSheet from "@/components/EditBannerSheet";
import AdBanner from "@/components/AdBanner";
import { AdBannerType } from "@/types";

interface BannerManagerProps {
  initialBanners: AdBannerType[];
}

export default function BannerManager({ initialBanners }: BannerManagerProps) {
  const [adBanners, setAdBanners] = useState<AdBannerType[]>(initialBanners);
  const [editingBanner, setEditingBanner] = useState<AdBannerType | null>(null);
  
  const handleEdit = (id: number) => {
    const bannerToEdit = adBanners.find((banner) => banner.id === id);
    if (bannerToEdit) {
      setEditingBanner(bannerToEdit);
    }
  };

  const handleSave = (updatedBanner: AdBannerType) => {
    setAdBanners((prevBanners) => 
      prevBanners.map((banner) => 
        banner.id === updatedBanner.id ? updatedBanner : banner
      )
    );
    setEditingBanner(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        {adBanners.map((banner) => (
          <AdBanner
            key={banner.id}
            {...banner}
            onEdit={() => handleEdit(banner.id)}
          />
        ))}
      </div>
      
      {editingBanner && (
        <EditBannerSheet
          open={!!editingBanner}
          onClose={() => setEditingBanner(null)}
          banner={editingBanner}
          onSave={handleSave}
        />
      )}
    </>
  );
}