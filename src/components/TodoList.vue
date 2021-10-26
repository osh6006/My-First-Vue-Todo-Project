<template>
<div>
    <transition-group name="list" tag="ul">
        <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem" class="shadow">
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" @click="toggleComplete(todoItem, index)"></i>
            <!-- v-bind 클래스 completed가 true가 되는 순간 실행-->
            <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
            <span class="removeBtn" @click="removetodo(todoItem, index)">
                <i class="fas fa-trash-alt "></i>
            </span>
        </li>
    </transition-group>
</div>
</template>

<script>
export default {
    // app.vue에서 내려받은 데이터
    props:['propsdata'],
    // 페이지가 시작될 때 실행되는 메소드
    methods: {
        // 휴지통 버튼을 클릭했을 때 
        removetodo(todoItem, index) {
            console.log(todoItem, index);
            this.$emit('removeItem', todoItem, index);
        },
        // 
        toggleComplete(todoItem, index){
            console.log(index);
            this.$emit('toggleItem', todoItem, index);
        }
    },

}
</script>

<!-- 파일 하나에만 해당하는 스타일 로직 구현-->

<style scoped>
ul {
    list-style-type: none;
    padding: 0px;
    margin-top: 0;
    text-align: left;
}

li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}

.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}

.checkBtnCompleted {
    color: #b3adad;
}

.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}

.removeBtn {
    margin-left: auto;
    color: #de4343;
}

.check {
    margin-top: 16px;
    vertical-align: middle;
    width: 30px;
}

/* 리스트 아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
