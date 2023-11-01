const TopMenuData = [
  {
    section: "Cocktail of the day",
    url: "/",
    modal: false,
  },
  {
    section: "Find a cocktail",
    elements: [
      {
        subSection: "...by name",
        url: "/searchByName",
      },
      {
        subSection: "...by ingredient",
        url: "/searchByIngredient",
      },
      {
        subSection: "...by category",
        url: "/searchByCategory",
      },
      {
        subSection: "...by glass",
        url: "/searchByGlass",
      },
    ],
  },
  {
    section: "My favorite Cocktails",
    url: "/favorites",
  },
  {
    section: ["Login / Sign up", "Log out"],
    url: "modal",
  },
];

export default TopMenuData;
