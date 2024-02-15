const Spinner = () => {
  return (
    <div className="col-md-10 col-sm-10 row row-cols-1 m-0 px-0 py-3 justify-content-center align-items-center">
      <div className="spinner-border text-white spinner" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
