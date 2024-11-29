import { useRouter } from 'next/router'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import MainLayout from '../components/MainLayout'


const ImageDetails = () => {
  const router = useRouter()
  const { project } = router.query // Assumes project data is passed via query or fetch
  const images = project?.imgUrls || []
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (project?.name) {
      document.title = `${project.name} - Proje Detayı`
    } else {
      document.title = 'Proje Detayı'
    }
  }, [project])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  return (
    <MainLayout>
    <div className="relative min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <title>{project?.name || 'Proje Detayı'} - Proje Detayı</title>
      </Head>

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <img
          src={images[currentIndex]}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">
            {project?.name || 'Proje Adı'}
          </h1>
        </div>
      </div>

      {/* Project Details */}
      <div className="relative z-20 max-w-7xl mx-auto p-6">
        <div className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Proje Galerisi</h2>
          <div className="flex items-center justify-center relative space-x-4">
            <button
              className="absolute left-4 bg-gray-800 text-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-700 transition"
              onClick={handlePrev}
            >
              <FaChevronLeft size={20} />
            </button>

            <div className="flex justify-center items-center w-full overflow-hidden h-64">
              {images.map((url, index) => (
                <motion.div
                  key={index}
                  className={`relative w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 transform transition-all duration-500 ${
                    index === currentIndex
                      ? 'scale-100 z-10'
                      : 'scale-75 opacity-50'
                  }`}
                >
                  <img
                    src={url}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
              ))}
            </div>

            <button
              className="absolute right-4 bg-gray-800 text-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-700 transition"
              onClick={handleNext}
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Project Info */}
        <div className="mt-6 bg-gray-200 rounded-lg p-6 text-gray-800">
          <h3 className="text-2xl font-bold mb-4">Proje Bilgileri</h3>
          <p>
            <strong>Proje Adı:</strong> {project?.name || 'Bilinmiyor'}
          </p>
          <p>
            <strong>Kategori:</strong> {project?.category || 'Bilinmiyor'}
          </p>
          <p>
            <strong>Tarih:</strong> {project?.date || 'Tarih Bilinmiyor'}
          </p>
        </div>
      </div>
    </div>
    </MainLayout>
  )
}

export default ImageDetails
