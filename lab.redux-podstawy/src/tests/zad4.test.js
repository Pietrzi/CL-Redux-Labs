import { createStore } from "redux";
import reducer from "../redux/combinedReducer";
import {increment} from "../redux/counterActions";
import {depositMoney} from "../redux/bankActions";

describe("zad 4", () => {

  it("reducers should be combined", () => {
    const store = createStore(reducer, {});

    expect(store.getState()).toEqual({
      counter: 0,
      saldo: 0
    });
  });

  it("store should react to actions", () => {
    const store = createStore(reducer, {});

    store.dispatch(increment(5));
    store.dispatch(depositMoney(10));

    expect(store.getState()).toEqual({
      counter: 5,
      saldo: 10
    });
  })

});
