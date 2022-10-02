// import Vue from 'vue';
// import Vuex, { StoreOptions, createLogger, Store } from 'vuex';
// import { polyfill } from 'es6-promise';
// import SampleModule from './__modules__/sample/SampleModule'
// import { RootState } from '@/SellerWebform/src/types/interface/utils/State'
//
// polyfill();
// Vue.use(Vuex);
//
// const debug = process.env.NODE_ENV !== 'production';
//
// const logger = createLogger({
//   collapsed: false, // 로그를 가지는 변이 자동 확장
//   filter (mutation: any, stateBefore: any, stateAfter: any) {
//     // 변이시 항상 로깅해야 한다면 true 를 반환하십시오.
//     // 변이는 { type, payload }의 포맷입니다.
//     return mutation.type !== 'aBlacklistedMutation';
//   },
//   transformer(state: any) {
//     // 로깅하기전 상태를 변이 하십시오.
//     // 예를 들어 특정 하위 트리만 반환합니다.
//     return state.subTree;
//   },
//   mutationTransformer(mutation: any) {
//     // 변이는 { type, payload }의 포맷으로 기록됩니다.
//     // 원하는 포맷으로 변경할 수 있습니다.
//     return mutation.type;
//   }
// });
//
// const storeOptions: StoreOptions<RootState> = {
//   plugins: debug ? [logger] : [],
//   state: {
//     version: '1.0.0' // a simple property
//   }
// };
//
// const store: Store<any> = new Store(storeOptions);
//
// export const sampleModule:SampleModule = new SampleModule({ store, name: 'sample' });
//
// export default new Vuex.Store<RootState>(store);
