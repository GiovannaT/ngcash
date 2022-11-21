import { useContext } from "react";
import { Menu } from "../components/Menu";
import { Balance } from "../components/Balance";
import { RequireAuth } from "../contexts/Auth/RequireAuth";
import { AuthContext } from "../contexts/Auth/AuthContext";

export default function Home() {
  const auth = useContext(AuthContext);

  return (
    <RequireAuth>
      <div className="flex text-ng-white">
      <Menu></Menu>
      <div className="py-10 px-20 w-screen">
        <h1 className="font-blinker font-bold text-2xl mb-5">Welcome, {auth.user?.username}</h1>
        <Balance></Balance>
      </div>
    </div>
    </RequireAuth>
  );
}
