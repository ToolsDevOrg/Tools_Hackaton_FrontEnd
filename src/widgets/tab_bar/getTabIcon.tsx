import { MapIcon, PassIcon, ProfileIcon, SuggestionsIcon } from "./icons";

export const getTabIcon = (routeName: string, isActive: boolean) => {
  const color = isActive ? "#00C0C9" : "#959595";

  switch (routeName) {
    case "Map":
      return <MapIcon color={color} />;
    case "Pass":
      return <PassIcon color={color} />;
    case "Suggestions":
      return <SuggestionsIcon color={color} />;
    case "Profile":
      return <ProfileIcon color={color} />;
    default:
      return null;
  }
};
