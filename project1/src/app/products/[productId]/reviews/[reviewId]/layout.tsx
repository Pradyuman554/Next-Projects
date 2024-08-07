
function getRandom(count:number){
    return Math.floor(Math.random() * count);
  }

export default function Page({children} : {
    children : React.ReactNode
}) {

    const random = getRandom(2);
    if(random==1) throw new Error("Review page main error");

    return (
        <div>
            {children}
        </div>
    );
}
