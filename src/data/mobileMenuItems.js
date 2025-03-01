module.exports = [
  {
    label: "Home",
    subMenu: [{ path: "/home-v4", label: "Home v4" }],
  },
  {
    label: "Listings",
    subMenu: [
      {
        label: "Map Style",
        subMenu: [{ label: "Map V1", path: "/map-v1" }],
      },
    ],
  },
  {
    label: "Property",
    subMenu: [
      {
        label: "Agents",
        subMenu: [
          { label: "Agents", path: "/agents" },
          { label: "Agent Single", path: "/agent-single/1" },
        ],
      },
    ],
  },
  {
    label: "Blog",
    subMenu: [
      { path: "/blog-list-v1", label: "Blog List V1" },
      { path: "/blog-list-v2", label: "Blog List V2" },
      { path: "/blog-list-v3", label: "Blog List V3" },
      { path: "/blogs/2", label: "Blog Single" },
    ],
  },

  {
    label: "Pages",
    subMenu: [
      { path: "/about", label: "About" },
      { path: "/contact", label: "Contact" },
      { path: "/compare", label: "Compate" },
      { path: "/pricing", label: "Pricing" },
      { path: "/faq", label: "Faq" },
      { path: "/login", label: "Login" },
      { path: "/register", label: "Register" },
      { path: "/404", label: "404" },
      { path: "/invoice", label: "Invoice" },
    ],
  },
];
