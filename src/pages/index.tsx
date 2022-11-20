import { Menu } from "../components/Menu";
import { Balance } from "../components/Balance";

export default function Home() {
  return (
    <div className="flex text-ng-white">
      <Menu></Menu>
      <div className="py-10 px-20 w-screen">
        <h1 className="font-blinker font-bold text-2xl mb-5">Welcome, USER</h1>
        <Balance></Balance>
      </div>
    </div>
  );
}
