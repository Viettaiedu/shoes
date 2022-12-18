import routesConfig from "../../config/routes";

// Menu
export const listMenu = [
    {
      text: "Nike",
      submenu: [
        { text: "Nam", path: "/nike-nam" },
        { text: "Nữ", path: "/nike-nu" },
      ],
      path: routesConfig.nike,
    },
    {
      text: "Adidas",
      submenu: [
        { text: "Nam", path: "/adidas-nam" },
        { text: "Nữ", path: "/adidas-nu" },
      ],
      path: routesConfig.adidas,
    },
    {
      text: "Jordan",
      submenu: [{ text: "Ari jordan", path: "/air-jordan" }],
      path: routesConfig.jordan,
    },
    {
      text: "Yeezy",
      submenu: [{ text: "Ari jordan", path: "/air-jordan" }],
      path: routesConfig.yeezy,
    },
    {
      text: "Other brans",
      submenu: [
        { text: "YEEZY BOOST 350", path: "/yeezy-boost-350" },
        { text: "YEEZY BOOST 700", path: "/yeezy-boost-700" },
      ],
      path: routesConfig.otherBrands,
    },
    {
      text: "Sale",
      submenu: [
        { text: "SNEAKER AUTHENTIC", path: "/sneaker-authentic" },
        {
          text: "Giày thể thao chạy bộ -tập gym",
          path: "/giay-the-thao-chay-bo-tap-gym",
        },
        {
          text: "Giày tennis nike chính hãng",
          path: "/giay-tennis-nike-chinh-hang",
        },
        { text: "Dép Authentic", path: "/dep-authentic" },
        {
          text: "Crep Protect vệ sinh giày Sneaker",
          path: "/crep-protect-ve-sinh-giay-sneaker",
        },
        { text: "Giày Thanh Lý", path: "/giay-thanh-ly" },
      ],
      path: routesConfig.sale,
    },
    { text: "Dây giày", path: routesConfig.dayGiay },
    { text: "Spa giày", path: routesConfig.spaGiay },
    { text: "Liên hệ", path: routesConfig.lienHe },
  ];