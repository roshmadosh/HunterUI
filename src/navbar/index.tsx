export default function Navbar() {
  return (
    <nav id="navbar-container">
      <div id="logo-container">

      </div>
      <div id="navbar-rhs-container">
        <ul id="navbar-options">
          <div id="navbar-search-container">
            <label htmlFor="navbar-search-input">
              <img src="/icons/search.svg" />
              <input tabIndex={1} id="navbar-search-input" type="text" placeholder="Enter search here"/>
            </label>
          </div>
          <li tabIndex={1} className="navbar-option">Listings</li>
          <li tabIndex={1} className="navbar-option account">
            <span>Account</span>
            <div id="navbar-account-dd-container">
              <ul>
                <li tabIndex={1} className="navbar-account-dd-option">Edit profile</li>
                <li tabIndex={1} className="navbar-account-dd-option">Sign out</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      
    </nav>
  )
}