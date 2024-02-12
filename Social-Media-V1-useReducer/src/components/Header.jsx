const Header = () => {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a href="#" className="nav-link px-2 link-secondary">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2">
            Story
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2">
            Shorts
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2">
            Friends
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2">
            Profile
          </a>
        </li>
      </ul>

      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2">
          Login
        </button>
        <button type="button" className="btn btn-primary">
          Sign-up
        </button>
      </div>
    </header>
  );
};

export default Header;
