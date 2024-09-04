import { useRouteError } from "react-router-dom";

export const ErrorPage =()=>{
    const err = useRouteError();
    return(
        <>
        <h2>
            This is Error Page.
        </h2>
        <h3>{err.status}: {err.statusText}</h3>
        </>
    );
}