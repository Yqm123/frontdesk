import { defineStore } from 'pinia'
import { getEntireData } from '@/service/main'
//option store
export const useHomeStore = defineStore("home", {
  state: () => ({
    entireData:
    ,
    nodeNum: Number,
    relationNum: Number,
    nodesNum: [],
    sumEntity:0,
    sumRelation:0,
    index:"/home"
  }),
  //相当于methods
  actions: {
    async fetchEntireDataAction() {
      const Result = await getEntireData()
      this.entireData = Result.entireData
    }
  }
})

