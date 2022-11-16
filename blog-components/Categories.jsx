import {useState, useEffect} from 'react'
import Link from 'next/link'

import {getCategories} from '../services'


const Categories = () => {

  const [Categories, setcategories] = useState([])

  useEffect(() => {
    getCategories()
    .then((newCategories) => setcategories(newCategories))
  }, [])

  return (
    <div className='bg-slate-400/80 shadow-lg rounded-lg p-8 mb-8 pb-12'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Categories
      </h3>
      {Categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`} >
          <span className='cursor-pointer block pb-3 mb-3'>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories
