<!-- 모든 것을 여기로 올려서 동작시킨다. -->
<template>
<div id="app">
    <todo-header></todo-header>
    <!-- 하위 컴포넌트에서 이벤트를 발생시키면 그것을 탐지한다. -->
    <todo-input v-on:addTodoItem="addOneItem"></todo-input>
    <!-- props는 v-bind에서 내려보낼 props속성이다. -->
    <todo-list v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></todo-list>
    <!--             받은메시지  실행할함수           -->
    <todo-footer v-on:allclear="allDelete"></todo-footer>
</div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

export default {
    data() {
        return {
            todoItems: []
        }
    },
    methods: {
        // addOneItem(todoItem) {
        //     // 텍스트 값과 텍스트 체크 여부의 값을 불린값으로 넣어줌
        //     // 체크여부 completed , 체크값 : item
        //     const obj = {
        //         completed: false,
        //         item: todoItem
        //     };
        //     // todoItem접근하려면 this로 접근할 수 있음
        //     console.log(this.todoItems);

        //     // 저장하는 로직
        //     // JSON.stringify(obj) 자바스크립트의 오브젝트를 스트링으로 저장
        //     localStorage.setItem(todoItem, JSON.stringify(obj));
        //     this.todoItems.push(obj);
        // },
        // removeOneItem(todoItem, index) {
        //     // 데이터 베이스 영역에서 지우기
        //     localStorage.removeItem(todoItem.item);

        //     // 화면영역(스크립트 영역)에서 지우기
        //     // splice 특정 인덱스에서 하나 지우기
        //     this.todoItems.splice(index, 1);

        // },
        toggleOneItem(todoItem, index) {
            console.log(index);
            // 안좋은 패턴
            // todoItem.completed = !todoItem.completed;

            // 좋은 패턴
            this.todoItems[index].completed = !this.todoItems[index].completed

            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        },
        allDelete() {
            // db 비우기
            localStorage.clear();

            // 빈배열 만들기
            this.todoItems = [];
        }
    },

    // 컴포너너트 등록
    components: {
        TodoHeader,
        TodoFooter,
        TodoInput,
        TodoList
    },

}
</script>

<style>
body {
    text-align: center;
    background-color: #f6f6f6;
}

input {
    border-style: groove;
    width: 200px;
}

button {
    border-style: groove;
}

.shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
