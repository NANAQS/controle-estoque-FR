import Cookies from "js-cookie";
import LoginScreen from "../pages/login/login_screen";

interface IRoute {
  path: string;
  element: JSX.Element;
}

const log = Cookies.get("LOGIN_JWT");

export const protectedRoute = (route: IRoute, cookie?: string): IRoute[] => {
  const pathInitial =
    (cookie ?? log) != null
      ? route
      : {
          ...route,
          element: <LoginScreen />,
        };

  return [pathInitial];
};

export const subPathsProtected = (
  path: string,
  count: number,
  elements: JSX.Element[]
): IRoute[] => {
  let data: IRoute[] = [];
  for (let i = 0; i < count; i++) {
    const data2 = protectedRoute({
      path: `${path}/${i + 1}`,
      element: elements[i],
    });
    data.push(...data2);
  }
  return data;
};
