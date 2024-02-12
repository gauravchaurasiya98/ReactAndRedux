import { MdFeed } from "react-icons/md";
import { MdPostAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  const VIEW_TAB = "VIEW";
  const CREATE_TAB = "CREATE";

  const handleActiveClassName = (tab) => {
    if (tab === selectedTab) {
      return "nav-link active";
    } else {
      return "nav-link text-white";
    }
  };

  return (
    <div className="col-md-2 col-sm-2 d-flex flex-column flex-shrink-0 p-3">
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link
            to="/"
            className={handleActiveClassName(VIEW_TAB)}
            onClick={() => setSelectedTab(VIEW_TAB)}
          >
            <MdFeed className="pe-none me-2" size={21} />
            View Posts
          </Link>
        </li>
        <li>
          <Link
            to="/create-post"
            className={handleActiveClassName(CREATE_TAB)}
            onClick={() => setSelectedTab(CREATE_TAB)}
          >
            <MdPostAdd className="pe-none me-2" size={21} />
            Create Post
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
