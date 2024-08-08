export default function Page({children} : {
    children : React.ReactNode
}) {

    return (
        <div>
            {children}
            <h1>Review whatever</h1>        {/* This is static */}
        </div>
    );
}