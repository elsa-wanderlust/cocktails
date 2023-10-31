import { cookies } from "next/headers";

export const isConnected = () => {
  const cookieStore = cookies();
  const cocktailToken = cookieStore.get("cocktails");
  if (!cocktailToken || !cocktailToken.value) {
    return false;
  }
  return true;
};
