function add(x,y)
{
    if(x<5)
    {
        return Promise.reject("less than 5");
    }
    else
    {
    return Promise.resolve(x+y)
    }
}
function sqr(a)
{
    return a*a
}
async function main()
{
    let sum=await add(6,5)
    let res=sqr(sum)
    console.log(res)
}
main()