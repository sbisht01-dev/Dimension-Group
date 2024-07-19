import "../style/navbar.css";
function Navbar() {
  const showSidebar = () => {
    console.log("cllick");
    const sidebar = document.querySelector(".sidebar");
    console.log(sidebar);
    sidebar.style.display = "flex";
  };
  const hideSidebar = () => {
    console.log("cllick");
    const sidebar = document.querySelector(".sidebar");
    console.log(sidebar);
    sidebar.style.display = "none";
  };
  return (
    <>
      <div className="navbar">
        <ul className="sidebar">
          <li onClick={hideSidebar}>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="/">
              <div>Home</div>
            </a>
          </li>
          <li>
            <a href="/">
              <div>Home</div>
            </a>
          </li>
          <li>
            <a href="/">
              <div>Home</div>
            </a>
          </li>
        </ul>
        <ul className="horizontalbar">
          <li>
            <a href="/">
              <img
                id="logo-img"
                src="src\assets\images\dimesnion-logo-s.png"
                alt=""
              />
            </a>
          </li>
          <li className="hide-on-mobile">
            <a href="/">Home</a>
          </li>
          <li className="hide-on-mobile">
            <a href="/">Home</a>
          </li>
          <li className="hide-on-mobile">
            <a href="/">Home</a>
          </li>
          <li className="hide-on-mobile">
            <a href="/">Home</a>
          </li>
          <li className="hide-on-desktop" onClick={showSidebar}>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </a>
          </li>
        </ul>

        {/* <div id="cta">
          <a href="">
            <button>Check KYC</button>
          </a>
          <a href="">
            <button>Invest Online</button>
          </a>
        </div> */}
      </div>
    </>
  );
}

export default Navbar;
