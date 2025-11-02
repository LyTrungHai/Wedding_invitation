import { useState, useEffect } from "react";
import { Image as ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import IMG1 from "@/assets/IMGL1350a.jpg";
import IMG2 from "@/assets/IMGL1283a.jpg";
import IMG3 from "@/assets/IMGL1306a.jpg";
import IMG4 from "@/assets/IMGL1328a.jpg";
import IMG5 from "@/assets/IMGL1354a.jpg";
import IMG6 from "@/assets/IMGL1551a.jpg";
import IMG7 from "@/assets/JNP00129.jpg";
import IMG8 from "@/assets/JNP00114.JPG";
import IMG9 from "@/assets/JNP00102.JPG";
import IMG10 from "@/assets/IMGL1238a.jpg";
import IMG11 from "@/assets/IMGL1510a.jpg";
import IMG12 from "@/assets/IMGL1428a.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [direction, setDirection] = useState(0);
  const photos = [
    IMG9,
    IMG7,
    IMG8,
    IMG1,
    IMG2,
    IMG10,
    IMG3,
    IMG4,
    IMG11,
    IMG5,
    IMG6,
    IMG12,
  ];

  useEffect(() => {
    document.body.style.overflow = selectedImage !== null ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [selectedImage]);

  const handlePrevious = () => {
    setDirection(-1);
    setSelectedImage((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setSelectedImage((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  // Hiệu ứng khi ảnh vào/ra
  const variants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction === 0 ? 0 : direction > 0 ? 80 : -80, // trượt trái-phải
      y: direction === 0 ? -60 : 0, // khi mở modal: trượt từ trên xuống
      scale: 0.98,
    }),
    center: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction === 0 ? 0 : direction < 0 ? 80 : -80,
      y: direction === 0 ? 60 : 0,
      scale: 0.98,
      transition: { duration: 0.25, ease: "easeInOut" },
    }),
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block text-rose-500 font-medium">
            Album Ảnh
          </span>
          <p className="text-muted-foreground">
            Những khoảnh khắc đẹp của chúng mình
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="h-[1px] w-12 bg-rose-200" />
            <ImageIcon className="w-5 h-5 text-rose-400" />
            <div className="h-[1px] w-12 bg-rose-200" />
          </div>
        </div>

        {/* Grid ảnh */}
        {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              key={index}
              onClick={() => {
                setDirection(0);
                setSelectedImage(index);
              }}
              className="aspect-square rounded-2xl overflow-hidden cursor-pointer border border-rose-50 shadow-soft hover:shadow-elegant"
              style={{
                backgroundImage: `url(${photo})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                willChange: "opacity, transform",
              }}
            />
          ))}
        </div> */}

        {/* Grid ảnh */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {photos.map((photo, index) => (
            <div
              key={index}
              onClick={() => {
                setDirection(0);
                setSelectedImage(index);
              }}
              className="aspect-square rounded-2xl overflow-hidden cursor-pointer border border-rose-50 shadow-soft hover:shadow-elegant"
              style={{
                backgroundImage: `url(${photo})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                willChange: "opacity, transform",
              }}
            />
          ))}
        </motion.div>

        {/* Modal xem ảnh */}
        <AnimatePresence custom={direction}>
          {selectedImage !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedImage(null)}
            >
              {/* Nút đóng */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute right-4 top-4 rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"
              >
                <X className="h-6 w-6 text-white" />
              </button>

              {/* Nút chuyển trái/phải */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                className="absolute left-4 rounded-full bg-white/10 hover:bg-white/20 p-2 transition-colors"
              >
                <ChevronLeft className="h-8 w-8 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 rounded-full bg-white/10 hover:bg-white/20 p-2 transition-colors"
              >
                <ChevronRight className="h-8 w-8 text-white" />
              </button>

              {/* Ảnh chính */}
              <motion.img
                key={photos[selectedImage]}
                src={photos[selectedImage]}
                alt={`Photo ${selectedImage + 1}`}
                className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl select-none"
                variants={variants}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              />

              {/* Số thứ tự */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm opacity-80">
                {selectedImage + 1} / {photos.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;
