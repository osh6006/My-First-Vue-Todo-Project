import Vue from 'vue'
import Vuex from 'vuex'

// vue의 플러그인 모든 영역에 추가하고싶을 때 
Vue.use(Vuex);

const storage ={
    fetch(){
        const arr = [];
                // 내부 저장소에서 데이터를 가져와서 뿌려줌
                if (localStorage.length > 0) {
                    for (let i = 0; i < localStorage.length; i++) {
                        if (localStorage.key(i) !== 'loglevel:webpack-dev-server')
                            // 스트링으로 저장된 것을 다시 오브젝트로
                            arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    }
                }
                return arr;
    },
}
export const store = new Vuex.Store({
    state:{
        // 데이터를 공유함
        todoItems: storage.fetch()
    },
    mutations:{
        addOneItem(state, todoItem){
                        // 텍스트 값과 텍스트 체크 여부의 값을 불린값으로 넣어줌
            // 체크여부 completed , 체크값 : item
            const obj = {
                completed: false,
                item: todoItem
            };
            // todoItem접근하려면 this로 접근할 수 있음
            console.log(state.todoItems);

            // 저장하는 로직
            // JSON.stringify(obj) 자바스크립트의 오브젝트를 스트링으로 저장
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state, todoItem, index){
            localStorage.removeItem(todoItem.item);

            // 화면영역(스크립트 영역)에서 지우기
            // splice 특정 인덱스에서 하나 지우기
            state.todoItems.splice(index, 1);
        }
    }
});