import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">Ops! Você tentou acessar o portal do Nether… mas ele quebrou no caminho!</p>
        <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white underline">
          Volte pro seu mundo!
        </a>
      </div>
    </div>
  );
};

export default NotFound;