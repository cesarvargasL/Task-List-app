import { useEffect } from "react";

export function TasksList(){

    useEffect(() => {
        console.log("page loaded")
    }, [])
    return (
        <div>
            <h1>Tasks List</h1>
        </div>
    )
}