import { Menu } from "../components/Menu";
import { Balance } from "../components/Balance";
import { RequireAuth } from "../contexts/Auth/RequireAuth";

export default function Home() {
  return (
    <RequireAuth>
      <div className="flex text-ng-white">
      <Menu></Menu>
      <div className="py-10 px-20 w-screen">
        <h1 className="font-blinker font-bold text-2xl mb-5">Welcome, USER</h1>
        <Balance></Balance>
      </div>
    </div>
    </RequireAuth>
  );
}
