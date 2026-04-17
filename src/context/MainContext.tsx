import React, { useState } from "react";
import { useFilter } from "./FilterContext";
import { Tally3 } from "lucide-react";

const MainContext = () => {
  const { SearchQuery, selectedCategory, minPrice, maxPrice, keyword } =
    useFilter();

  const [produtct, setProdutct] = useState<any[]>([]);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCCurrentPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const itemsPerPage = 12;

  return (
    <section className="xl:w-[55rem] lg:w[55rem] sm:w[40rem] xd:[20rem] p-5">
      <div className="mb-5">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="relative mb-5 mt-5">
            <button className="border px-4 py-2 rounded-full flex items-center">
              <Tally3 className="mr-2" />

              {filter === "all"
                ? "Filter"
                : filter.charAt(0).toLowerCase() + filter.slice(1)}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContext;
