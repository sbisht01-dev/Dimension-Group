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

  window.onload = () => {
    window.addEventListener("scroll", function () {
      console.log(scrollY);
      if (scrollY >= 150) {
        let navbar = document.getElementsByClassName("navbar");
        navbar.style.backGroundColor = "grey";
      }
    });
  };

  return (
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
            <div>Service</div>
          </a>
        </li>
        <li>
          <a href="/">
            <div>Invest</div>
          </a>
        </li>
        <li>
          <a href="/">
            <div>Investor corner</div>
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
          <a href="/">Service</a>
        </li>
        <li className="hide-on-mobile">
          <a href="/">Invest</a>
        </li>
        <li className="hide-on-mobile">
          <a href="/">Investor corner</a>
        </li>
        <li className="hide-on-mobile">
          <a href="/">
            <div className="navBtn">Check KYC</div>
          </a>
        </li>
        <li className="hide-on-mobile">
          <a href="/">
            <div className="navBtn">Invest Online</div>
          </a>
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
    </div>
  );
}

export default Navbar;
