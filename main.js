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
    console.log(one + " : "+ two + " : " + three + " : " + four);


    function toggle(a,b) {
       let state = b;
       return function () {
           if (state === b) {
               state = a;
           } else state = b;
           return state;
       }

    }
  const  onOff = toggle("ON", "OFF");
  console.log(onOff());
  console.log(onOff());
  console.log(onOff());
  console.log(onOff());
});