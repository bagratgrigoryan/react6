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

  function Toggle(...args) {
      let currentIndex = args.length-1;
      return ()=>{
          currentIndex++;
          if (currentIndex == args.length){
              currentIndex = 0;
          }
          return args[currentIndex];

      }
  }
  const togArg = Toggle("slow", "medium","fast");
  console.log(togArg());
  console.log(togArg());
  console.log(togArg());

  function makeArmy() {
      let shooters = [];
      let i = 0;
      while (i < 10){
          const counter = i;
          let shooter = function () {
              console.log(counter);
          };
          shooters.push(shooter);
          i++;
      }
      return shooters;
  }

  let army = makeArmy();
  army[0]();
  army[1]();
  army[2]();

  function SumTo(arg) {
    if (arg == 1){
        return 1;
    }else return SumTo(arg-1) + arg;

  }
  console.log(SumTo(6));

  function CalculateFactorial(n) {
  if (n == 0 || n == 1){
      return 1;
  } return CalculateFactorial(n-1) * n;

  }
  console.log(CalculateFactorial(3));

 const fn = () => {
     fetch("https://restcountries.com/v3.1/name/united").then((res) =>{
         return res.json();
     }).then((res) =>{
         console.log(res);
     });
 };
 fn();

 const FN = async () => {
     try {
         const res = await fetch("https://restcountries.com/v3.1/name/united");
         const json = await res.json();
         console.log(json);
     } catch (err) {
         console.log(err.message);
     }
 };
 FN();
});
