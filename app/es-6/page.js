import {curriedSum, sumOf, sumOf3} from "./array-methods";

export default function EcmaScript6Demo() {
  let arr = [11, 22, 33]
  return <>
    Hello
    <br />
    Sum of {arr.join(", ")} is === {sumOf(arr)}
    <br />
    Currying (10, 20, 30) is === {curriedSum(sumOf3)(10)(20)(30)}
  </>
}