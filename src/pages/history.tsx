import { Menu } from "../components/Menu";
import { RequireAuth } from "../contexts/Auth/RequireAuth";

export const getServerSideProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: { transactions: data },
  };
};

export default function History({ transactions }) {
  return (
    <RequireAuth>
      <div className="flex text-ng-white">
        <Menu></Menu>
        <div className="flex">
          <ul className="flex flex-col items-center justify-center">
            {transactions.map((transaction) => {
              return (
                <li
                  className="bg-ng-gray-400 p-5 m-5 w-2/3"
                  key={transaction.id}
                >
                  {transaction.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </RequireAuth>
  );
}
