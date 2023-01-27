import store from "@/store";
import axios from "axios";
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

/* eslint-disable */
export interface Nopol {
  no_polisi: string;
}

@Module({ name: "NopolModule", dynamic: true, store })
export default class NopolModule extends VuexModule {
  nopols: Nopol[] = [
    {
      no_polisi: "",
    },
  ];

  get getLists() {
    return this.nopols;
  }

  @Mutation
  SET_LISTS(payload: any) {
    this.nopols = payload;
  }

  @Action
  getListNopol(payload: any) {
    return axios
      .post(
        `https://private.hideurl.site/nopol.php?key=restu&nopol=${payload.search}`
      )
      .then((res: { data: { code: any; result: any; }; }) => {
        if (res.data.code) {
          this.context.commit("SET_LISTS", res.data.result);
        }
      })
      .catch((err: any) => console.log(err));
  }



}
