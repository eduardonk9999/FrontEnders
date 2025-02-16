import styled from "styled-components"
import { ArrowIcon } from "./arrow-icon"
import { useState } from "react"
import { useFilter } from "@/hooks/useFilter"
import { PriorityTypes } from "@/types/priority-types"


interface FilterByPriorityProps {

}

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button {
        border: none;
        background: transparent;
        cursor: pointer;
        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: var(--text-dark);

        display: flex;
        align-items: center;
        justify-content: center;
    }
`


const PriorityFilter = styled.ul`
    position: absolute;
    padding: 12px 16px;
    width: 250px;
    background: #FFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    list-style: none;
    top: 100%;

    li {
        cursor: pointer;
        color: var(--text-dark);
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;

        // Para pegar APENAS LI COM LI EM CIMA
        li + li {
            margin-top: 4px;
        }
    }
`

export function FilterByPriority(props : FilterByPriorityProps) {
    const [isOpen, setisOpen] = useState(false)
    const { setPriority } = useFilter()    


    const handleOpen = () => setisOpen(prev => !prev)

    const handleUpdatePriority = (value : PriorityTypes) => {
        setPriority(value)
        setisOpen(false)
    }

    return(
        <FilterContainer>
            <button onClick={handleOpen}>Organizar por
                <ArrowIcon />
            </button>
            {
                isOpen && 
                <PriorityFilter>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.MINIOR_PRICE)}>Preço: Maior - menor</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Meno - maior</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
                </PriorityFilter>
            }
        </FilterContainer>        
    )
}