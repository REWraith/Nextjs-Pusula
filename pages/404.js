import React from 'react'
import { useRouter } from 'next/router'

export default function Notfound () {
  const router = useRouter()

  const goToHome = () => {
    router.push('/') 
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='text-center p-6 bg-white rounded-lg shadow-lg max-w-sm w-full'>
        <h1 className='text-6xl font-extrabold text-red-500 mb-4'>404</h1>
        <h2 className='text-2xl font-semibold text-gray-700 mb-4'>
          Ups! Sayfa Bulunamadı
        </h2>
        <p className='text-gray-600 mb-6'>
          Aradığınız sayfa kaldırılmış olabilir ya da yanlış bir URL girdiniz.
        </p>
        <button
          onClick={goToHome} // Butona tıklanma işlemi
          className='bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300'
        >
          Ana Sayfaya Git
        </button>
      </div>
    </div>
  )
}
