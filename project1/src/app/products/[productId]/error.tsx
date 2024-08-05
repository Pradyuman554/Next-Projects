"use client";

export default function ErrorBoundary({
    error, reset,
}:{
    error : Error;
    reset : ()=>void;
}
)

{
    return (
        <div>
            {error.message} <br/> <button className="border border-black p-1" onClick={reset}>Try Again</button>
        </div>
    );
}
