function Footer() {
  return (
    <footer className="bg-gray-100 shadow-md dark:bg-gray-800">
      <div className="container mx-auto flex flex-col items-center justify-between p-4 md:flex-row">
        
        {/* Copyright Text */}
        <span className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} <a href="https://flowbite.com/" className="hover:underline font-semibold">Flowbite™</a>. All Rights Reserved.
        </span>

        {/* Navigation Links */}
        <ul className="flex flex-wrap items-center mt-3 md:mt-0 space-x-6 text-sm font-medium text-gray-600 dark:text-gray-400">
          <li>
            <a href="#" className="hover:text-blue-500 transition-colors">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 transition-colors">Licensing</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 transition-colors">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
