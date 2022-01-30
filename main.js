window.addEventListener('load', ()=>{

    function incrementByOne() {
        let sum = 0;
        return ()=>{
            return sum+=1;
        }
    }
    const  addOne = incrementByOne();
    const one = addOne();
    const two = addOne();
    const three = addOne();
    const four = addOne();
    console.log(one + " : "+ two + " : " + three + " : " + four)
});