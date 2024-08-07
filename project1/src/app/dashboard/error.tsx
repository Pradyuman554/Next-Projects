"use client";

export default function ErrorBoundary({error, reset}:{
    error:Error; reset:()=>void;
}) {
    return (
        <div>
            An error {error.message} has occured.
            <button onClick={reset}>Press to reset</button>
        </div>
    );
}