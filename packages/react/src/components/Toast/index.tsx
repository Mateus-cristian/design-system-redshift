import { ComponentProps } from "react";
import { ToastContainer, ToastContent, ToastHeader } from "./styles";
import { ElementType } from "react";

interface Props {
    title: string;
    text: string;
    onClick: () => void;
}

export function Toast({ title, onClick, text }: Props) {
    return (
        <ToastContainer>
            <ToastHeader>
                <p>{title}</p>
                <span onClick={onClick}>X</span>
            </ToastHeader>
            <ToastContent>
                <p>{text}</p>
            </ToastContent>
        </ToastContainer>
    )
}


export interface ToastProps extends ComponentProps<typeof Toast> {
    as?: ElementType
}


Toast.displayName = "Toast";