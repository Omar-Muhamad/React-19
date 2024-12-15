import SideFilters from "./_components/SideFilters";

import AllProducts from "@/_components/AllProducts";

export default function Shop() {
  return (
    <div className="mt-8 grid grid-cols-[1fr_4fr]">
      <SideFilters />
      <AllProducts />
    </div>
  );
}
