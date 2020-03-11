import { useLocalStorage } from "./useLocalStorage";
import { render } from "@testing-library/react";

const useDarkMode = (key) => {
    const [someValue, setSomeValue] = useLocalStorage(key);

    render()
    return (
        <h1>H1 here</h1>
    )
}