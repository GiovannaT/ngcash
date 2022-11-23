import { Menu } from "../components/Menu";

// export const getServerSideProps = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   return {
//     props: { transactions: data },
//   };
// };

export default function History() {
  return (
      <div className="flex text-ng-white">
        <Menu></Menu>
        <div className="flex">
          
        </div>
      </div>
  );
}
