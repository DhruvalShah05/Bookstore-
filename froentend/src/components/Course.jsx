import Cards from './Cards'
import { Link } from 'react-router-dom';
import list from '../../public/list.json'
function Course() {
  return (
    <>
      <div className="z-10 backdrop:bg-w max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-10 items-center justify-center text-center"> 
        <h1 className="text-2xl mt-20 md:text-4xl">We're delighted to have you <span className="text-pink-500">Here ! :)</span>  </h1>
        <p className="mt-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia possimus vero rem id ea fuga a minus ad quia ducimus? Corrupti nulla numquam distinctio, nesciunt odio in possimus animi illum.</p>
        <Link to="/">
      <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 mt-6">
        Back
      </button>
    </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        
            {list.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
        
      </div>
      </div>
    </>
  )
}

export default Course
