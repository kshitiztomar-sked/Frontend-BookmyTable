import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Home, BookOpen, Utensils, User, LogOut } from "lucide-react";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 1024); // open on large screens
  const location = useLocation();

  // close / open on resize for responsiveness
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 768) setIsOpen(false);
      else setIsOpen(true);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const menu = [
    { key: "dashboard", to: "/dashboard", label: "Dashboard", icon: <Home size={18} /> },
    { key: "bookings", to: "/bookings", label: "Bookings", icon: <BookOpen size={18} /> },
    { key: "food-items", to: "/food-items", label: "Food Items", icon: <Utensils size={18} /> },
    { key: "profile", to: "/profile", label: "Profile", icon: <User size={18} /> },
  ];

  return (
    <div className={`sidebar-container`}>
      <aside className={`sidebar ${isOpen ? "open" : "closed"}`} aria-label="Sidebar">
        <button
          className="sidebar-toggle"
          onClick={() => setIsOpen((s) => !s)}
          aria-label="Toggle sidebar"
        >
          <Menu size={18} />
        </button>

        <div className="sidebar-logo" title="BookmyTable">
          <img
            src="https://lh3.googleusercontent.com/rd-gg/AIJ2gl_vh_g55VKWksID02Ym2jkPKXrsD809O5kYVF6BBh-48r6a9Ugtt1tq3079SbPWz2dmA-2fEgT1RB7oxp4UtcsIyxTiJeeJn0nmqGZ4CY5jccMLIsXxY6we8s4Ff8-TSJTUBP9b8wc5JVNFB1pcqKe6VzTCngZoaLwRt3_XU7LhxQ1TlclRpqM662PW7hHTHyc1Vi4rFSLP8WdBHdoF1X30rp_9oFy1dgeD9VWcPip-1WwojplJ7yJBosujXsWj62deLttePXMbSmACAaYGsFhBcQTqukksPCO83PVTUkOdGo_yRTTcJSYtbAdPnSJVnq498sHg7Y4uLa98cXWOsx1uaZ2i8NNzezz7-VMbtS9jLfYsEnw_NDk6Fev5kmHrwVm2jbJA4S4Lbb-Vgsg0b7nLzWOQ_Z2jMeZj5di-cL8RqkbAsft79ORzlaE4kijMMLZYMhdo4qWTAPNdgvCZ90aO1yn_V6SVKy58SVd2LVZo3u93BKID-XNcOLqMhCoRmtCuu8NBUPY2ZS4h4V9_-djObDdf1GzGOyvT1GwJp69m8ccdG4JU7aenOZdeuiAmPZO2sfUCvE4RfuSBr_BHH68DS3vS0mFPQ-US7g7DC6IHLoopNykWBH6Ph-JTbfTzgVFQ6ilPOmZgBJtFLdtuqbiGo-HSaUAV4EJqntJHPGs_JGO9HM0lAiSQiQY4_AReWmIAVnZRg3e6bJgRte4TyBQwk20mXkpuJzuVAS05U3aFRN_muHo5YPlW-i8vkhsbnczZKlSOSPlE-TEc_0ivoZu1ixqvtNYkJMNNT00c2WElLhdevksQmmUGryBe0ixCCcAKwRvl2HvWV-kz5bwPpL2Pi0N9BrzSokhcBV_2cnWvxHq2a_RLebKH0lQ5_IujuCvuDyZSmgVwGVE4S_T58o7dqS3AmyQZe5g4rCru1Nqpon0bwHRPmEbcrz36_4LDZU6gMo_kD7g1w6MDgN5Gau4-oQuJkAWPS7NDNXaL0J997x9csOVLOPz6KRFVeO-egOixkH2XudZIpjpReEzI7l_Y39xpsdgcl27mrL_B3M86sNQ2q72RkfwXRPV-H97E4o9WUbMx2GPQ-0UC8OjCke4Z1Whl-MhosuhvBBr_xotMqx581VnW6wkmgoDYC23Pj0KEDZC0rce6yYPgV171QcuW6QQpHrz2psNokTEyv_YFBmSBBs29_x47ZPQrqTRM1GuAhr2ryiDDHY5q0FMMlKZeeUH4hDYKhbFogrYRvoRnpsglV61qR5o0CrL3Pzbp_V5hjYt61bdNafXYhowqGWa2GyQjgeMW_FzjOZzZQg_sdDv684NP_zVvLWeSOz0oGw=s1024-rj"
            alt="BookmyTable logo"
            onError={(e) => {
              // fallback to text logo when image not found
              e.currentTarget.style.display = "none";
            }}
          />
          <div className={`logo-text ${!isOpen ? "hidden-text" : ""}`}>
            <span className="brand-name">BookmyTable</span>
            <small className="brand-sub hidden-text">Restaurant Panel</small>
          </div>
        </div>

        <nav>
          <ul className="sidebar-menu">
            {menu.map((m) => {
              const active = location.pathname === m.to || (m.to !== "/dashboard" && location.pathname.startsWith(m.to));
              return (
                <li key={m.key} className={`sidebar-item ${active ? "active" : ""}`}>
                  <span className="sidebar-icon" aria-hidden>
                    {m.icon}
                  </span>
                  <Link to={m.to} className={`sidebar-text ${!isOpen ? "hidden-text" : ""}`}>
                    {m.label}
                  </Link>
                </li>
              );
            })}

            {/* Logout (no backend) */}
            <li className="sidebar-item logout" onClick={() => alert("Logout clicked — implement auth.")}>
              <span className="sidebar-icon">
                <LogOut size={18} />
              </span>
              <span className={`sidebar-text ${!isOpen ? "hidden-text" : ""}`}>Logout</span>
            </li>
          </ul>
        </nav>

        {/* footer small copyright */}
        <div className={`sidebar-footer ${!isOpen ? "hidden-text" : ""}`}>
          <small>© {new Date().getFullYear()} BookmyTable</small>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
