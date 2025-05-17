function add(x,y)
{
    return Promise.resolve(x+y)
}
async function sqr(a)
{
    return a*a
}
async function main()
{
    let sum=await add(4,5)
    let res=await sqr(sum)
    console.log(res)
}
main()