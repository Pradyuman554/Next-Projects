function getRandom(count:number){
    return Math.floor(Math.random() * count);
  }

export default function Page({children} : {
    children : React.ReactNode
}) {

    const random = getRandom(2);
    if(random==1) throw new Error("Product Screen main error");

    return (
        <div>
            {children}
            <h1>Review whatever</h1>        {/* This is static */}
        </div>
    );
}