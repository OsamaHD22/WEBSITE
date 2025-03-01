module.exports = [
  {
    label: "Home",
    subMenu: [{ path: "/home-v4", label: "Home" }],
  },
  {
    label: "Listings",
    subMenu: [
      {
        label: "Map Style",
        subMenu: [{ label: "Map", path: "/map-v1" }],
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
      { path: "/blog-list-v1", label: "Blog List" },
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
      { path: "/invoice", label: "Invoice" },
    ],
  },
];
