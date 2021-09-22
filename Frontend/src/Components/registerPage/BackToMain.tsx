import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { Routes } from '../../Utilities/routes'

const BackToMain = () => {
  return (
    <Link to={Routes.index}>
=======

const BackToMain = () => {
  return (
    <Link to="/">
>>>>>>> e4fdf3c... minor fixes, added DaisyUI tailwind plugin
      <div className="flex gap-5 items-center text-base font-bold cursor-pointer w-max mb-4">
        <FontAwesomeIcon icon={faChevronLeft} />
        Back to main page
      </div>
    </Link>
  )
}

export default BackToMain
