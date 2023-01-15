import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const navigation = [
  { name: 'Home', path: '/', current: false },
  { name: 'About', path: '/about', current: false },
  { name: 'Projects', path: '/projects', current: false },
  { name: 'Contact', path: '/contact', current: false },
];

const Navbar = () => {
  return (
    <header>
      <div className=" flex justify-between py-4 min-h-12 ">
        <Link to='/'>
          <motion.img
            className=" w-12 "
            src={ motion }
            alt="personal logo"
            whileHover={{ rotate: 90 }}
            initial={{ scale: 0 }}
            animate={{ rotate: 180, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 5,
            }}
          />
        </Link>
      </div>

      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
'px-3 py-2 rounded-md text-sm font-medium'
)}
aria-current={item.current ? 'page' : undefined}
>
{item.name}
</Link>
))}
</div>
</div>
</header>
);
};

export default Navbar;