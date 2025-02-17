"use client"

import { FilterType } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";
import { createContext, useState } from "react";

interface FilterContextProps {
    search: string,
    page: number,
    type: FilterType,
    priority: PriorityTypes,
    setPriority: (value: PriorityTypes.NEWS) => void,
    setSearch: (value: string) => void,
    setPage: (value: number) => void,
    setType: (value: FilterType) => void
}


export const filterContext = createContext<FilterContextProps | null>(null);

type ReactNode = /*unresolved*/ any


interface ProviderProps {
    children: ReactNode;
}

export function FilterContextProvider({children} : ProviderProps) {
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.ALL)
    const [priority, setPriority] = useState(PriorityTypes.NEWS)

    return(
        <filterContext.Provider 
            value={{
                search, 
                page, 
                type, 
                priority,
                setPriority,
                setSearch, 
                setPage, 
                setType
            }}>
            {children}
        </filterContext.Provider>
    )
}