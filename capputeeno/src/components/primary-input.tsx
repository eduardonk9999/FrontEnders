import styled from "styled-components";
import { SearchIcon } from "./search-icon";
import { InputHTMLAttributes } from "react";


export const PrimaryIpunt = styled.input`
    width: 352px;
    border-radius: 8px;
    border: none;
    padding: 10px 16px;

    background-color: var(--bg-secondary);

    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);
`

const InputContainer = styled.div`
    position: relative;
    width: 350px;

    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function PrimaryIpuntSearchIcon (props : InputProps) {
    return(
        <InputContainer>
            <PrimaryIpunt {...props} />
            <SearchIcon />
        </InputContainer>
    )
}