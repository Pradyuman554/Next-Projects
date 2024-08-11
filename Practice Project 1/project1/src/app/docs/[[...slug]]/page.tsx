export default function Docs({params}:{
    params : {slug : string[]}
}) {
    return (
        <section>
            <h1>Jaha par raste khatam hote hai, vaha se main shuru hota hu</h1>
            {params.slug && params.slug?.length != 0 && (
                <h3>App pahunche hai {params.slug[0]} file ke route {params.slug[1]} par pahunche hai</h3>
            )}
        </section>
    );
}
