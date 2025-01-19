import { useSearchQueryStore } from "@/app/Hooks/useSearchQueryStore";
import React, { useRef } from "react";
import { Input } from "./ui/input";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const SearchInput = () => {
  const { query, setQuery } = useSearchQueryStore();
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="relative border flex items-center gap-4 rounded-lg p-1 h-11">
      <Input
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="text-slate-800 placeholder-slate-100 h-10 shadow-none border-none w-80"
        placeholder="Search for a patient"
      />

      {query.trim().length > 0 ? (
        <IoCloseOutline
          className="text-slate-400 text-xl absolute top-[12px] right-5 cursor-pointer"
          onClick={() => {
            setQuery("");
            inputRef.current?.focus();
          }}
        />
      ) : (
        <FaSearch className="text-slate-400 absolute top-[13px] right-5" />
      )}
    </div>
  );
};

export default SearchInput;
