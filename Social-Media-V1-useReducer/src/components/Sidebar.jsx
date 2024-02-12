import { MdFeed } from "react-icons/md";
import { MdPostAdd } from "react-icons/md";

const Sidebar = ({ selectedTab, handleSelectedTab }) => {
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
          <a
            href="#"
            className={handleActiveClassName(VIEW_TAB)}
            onClick={() => handleSelectedTab(VIEW_TAB)}
          >
            <MdFeed className="pe-none me-2" size={21} />
            View Posts
          </a>
        </li>
        <li>
          <a
            href="#"
            className={handleActiveClassName(CREATE_TAB)}
            onClick={() => handleSelectedTab(CREATE_TAB)}
          >
            <MdPostAdd className="pe-none me-2" size={21} />
            Create Post
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
