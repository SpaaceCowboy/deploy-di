import React from 'react'
import { PostWidget, Categories, PostCard, Header } from "../blog-components"
import { getPosts } from "../services"
import { getFeaturedPosts } from '../services'
import FeaturedPosts from "./post/FeaturedPost"
import { Navbar } from '../components'

const Blog = ({posts}) => {
  return (
<>
    <div className=' w-full overflow-hidden'>
      <div className='sm:px-16 px-6 flex justify-center items-center '>
        <div className='xl:max-w-[1280px] w-full'>
          <Navbar />
        </div>
      </div>
    </div>
    <div className=" mx-auto mt-10 px-10 mb-8 ">
      <FeaturedPosts />
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* posts section */}
      <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title } />
      ))}
      </div>
     {/* recent posts && categories section   */}
    <div className="lg:col-span-4 col-span-1 ">
        <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
        </div>
    </div>
    </div>

    </div>
</>
  )
}

export default Blog

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts }
  }
}