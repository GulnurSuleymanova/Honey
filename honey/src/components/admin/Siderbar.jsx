import { SiHoneygain } from "react-icons/si";
import { Link, useNavigate, useLocation } from "react-router";
import {FiGrid,FiPackage,FiLogOut,FiUser,FiHome} from "react-icons/fi";

const SiderBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const isActivePath = (path) => location.pathname === path;

  return (
    <div className="flex flex-col h-screen w-72 bg-gradient-to-br from-slate-50 to-slate-100 shadow-xl border-r border-slate-200">
      <div className="p-6 border-b border-slate-200 bg-white/50 backdrop-blur-sm">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
            <FiUser className="text-white text-lg" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800 leading-tight">Admin Panel</h1>
            <p className="text-sm text-slate-500 font-medium">Gulnur</p>
          </div>
        </div>
        <div className="w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <Link
          to="/admin/category"
          className={`
            group flex items-center p-3 rounded-xl transition-all duration-200 
            ${isActivePath("/admin/category")
              ? 'bg-white shadow-md border border-slate-200 text-slate-800'
              : 'text-slate-600 hover:bg-white/60 hover:shadow-sm'
            }
          `}
        >
          <div className={`
            w-9 h-9 rounded-lg flex items-center justify-center mr-3 transition-colors
            ${isActivePath("/admin/category")
              ? 'bg-gradient-to-br from-purple-400 to-purple-600 text-white shadow-sm'
              : 'text-purple-600 group-hover:bg-slate-100'
            }
          `}>
            <FiGrid className="text-lg" />
          </div>
          <span className="font-medium text-sm tracking-wide">
            Categories
          </span>
          {isActivePath("/admin/category") && (
            <div className="ml-auto w-2 h-2 bg-yellow-500 rounded-full"></div>
          )}
        </Link>
        <Link
          to="/admin/news"
          className={`
            group flex items-center p-3 rounded-xl transition-all duration-200 
            ${isActivePath("/admin/news")
              ? 'bg-white shadow-md border border-slate-200 text-slate-800'
              : 'text-slate-600 hover:bg-white/60 hover:shadow-sm'
            }
          `}
        >
          <div className={`
            w-9 h-9 rounded-lg flex items-center justify-center mr-3 transition-colors
            ${isActivePath("/admin/news")
              ? 'bg-gradient-to-br from-green-400 to-green-600 text-white shadow-sm'
              : 'text-green-600 group-hover:bg-slate-100'
            }
          `}>
            <FiPackage className="text-lg" />
          </div>
          <span className="font-medium text-sm tracking-wide">
            news
          </span>
          {isActivePath("/admin/news") && (
            <div className="ml-auto w-2 h-2 bg-yellow-500 rounded-full"></div>
          )}
        </Link>
      </nav>
      <div className="p-4 border-t border-slate-200 bg-white/30 backdrop-blur-sm">
        <button
          onClick={handleLogout}
          className="
            group flex items-center w-full p-3 rounded-xl 
            text-red-600 hover:bg-red-50 hover:text-red-700 
            transition-all duration-200 border border-transparent 
            hover:border-red-200 hover:shadow-sm
          "
        >
          <div className="w-9 h-9 rounded-lg flex items-center justify-center mr-3 text-red-500 group-hover:bg-red-100 transition-colors">
            <FiLogOut className="text-lg" />
          </div>
          <span className="font-medium text-sm tracking-wide">
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default SiderBar;