import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ongoing_data as projects } from '../data/ongoing-data'
import { useRouter } from 'next/router'
import MainLayout from '../components/MainLayout'

export default function RefactoredOngoing () {
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [selectedFilter, setSelectedFilter] = useState('')
  const [showPlaceholders, setShowPlaceholders] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (!selectedFilter) {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(
        projects.filter(project =>
          project.category.toLowerCase().includes(selectedFilter.toLowerCase())
        )
      )
    }
  }, [selectedFilter])

  useEffect(() => {
    const timer = setTimeout(() => setShowPlaceholders(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleNavigate = (id, project) => {
    localStorage.setItem('projectDetails', JSON.stringify(project))
    router.push(`/details/${id}`)
  }

  return (
    <MainLayout>
      <div className='bg-gray-100 min-h-screen'>
        {/* Hero Section */}
        <div
          className='relative h-[300px] sm:h-[400px] bg-cover bg-center'
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1625722662233-297060231b85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
          }}
        >
          <div className='absolute inset-0 bg-black bg-opacity-40'></div>
          <div className='relative max-w-7xl mx-auto h-full flex flex-col justify-center items-start px-6'>
            <motion.h1
              className='text-3xl sm:text-5xl font-bold text-white mb-2'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Projelerimiz
            </motion.h1>
            <motion.p
              className='text-lg text-gray-300'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Modern ve sürdürülebilir çözümlerle hayata geçirilen projelerimizi
              keşfedin.
            </motion.p>
          </div>
        </div>

        {/* Filter and Cards Section */}
        <div className='max-w-7xl mx-auto px-6 py-10'>
          {/* Filter */}
          <div className='flex justify-start mb-8'>
            <select
              className='p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
              onChange={e => setSelectedFilter(e.target.value)}
              defaultValue=''
            >
              <option value=''>Tüm Kategoriler</option>
              <option value='Konut'>Konut</option>
              <option value='Eğitim'>Eğitim</option>
              <option value='Ofis'>Ofis</option>
              <option value='Ticari'>Ticari</option>
              <option value='Etkinlik'>Etkinlik</option>
            </select>
          </div>

          {/* Project Cards */}
          <div className='flex flex-wrap justify-center gap-6'>
            {showPlaceholders
              ? Array.from({ length: projects.length }).map((_, index) => (
                  <motion.div
                    key={index}
                    className='w-[90%] sm:w-[45%] lg:w-[30%] h-48 bg-gray-300 rounded-xl shadow-md animate-pulse'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  ></motion.div>
                ))
              : filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    onClick={() => handleNavigate(project.id, project)}
                    className='relative bg-white w-[90%] sm:w-[45%] lg:w-[30%] rounded-xl overflow-hidden shadow-md group transform transition-transform hover:scale-105 cursor-pointer'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className='h-48 overflow-hidden'>
                      <img
                        src={project.img}
                        alt={project.name}
                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                      />
                    </div>
                    <div className='p-4'>
                      <h2 className='text-xl font-semibold text-gray-800'>
                        {project.name}
                      </h2>
                      <p className='text-sm text-gray-500'>{project.date}</p>
                      <p className='text-sm font-light text-gray-600 mt-2'>
                        {project.category}
                      </p>
                    </div>
                  </motion.div>
                ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
