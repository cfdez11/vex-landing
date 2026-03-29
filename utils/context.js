import { reactive } from "vex/reactive"

const counter = reactive({ value: 0 })

export function useCounter() {
  function add() {
    counter.value++
  }
  function sub() {
    counter.value--
  }

  return {
    add,
    sub,
    counter
  }
}