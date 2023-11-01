import { Bottombar, LeftSidebar, Topbar } from "@/components/shared";
import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const { data: currentUser } = useGetCurrentUser();

  console.log(currentUser);
  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSidebar />

      <section className="flex flex-1 h-full">
        <Outlet />
      </section>

      <Bottombar />
    </div>
  );
};

export default RootLayout;
