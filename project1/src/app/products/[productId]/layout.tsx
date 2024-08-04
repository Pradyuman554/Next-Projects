export default function Page({children} : {
    children : React.ReactNode
}) {
    return (
        <div>
            {children}
            <footer className = "font-black">Helu</footer>
        </div>
    );
}