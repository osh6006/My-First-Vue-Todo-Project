<template lang="">
<div class="inputBox shadow">
    <!--v model은 텍스트 필드 값을 받아올 때 주로 쓴다 -->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
        <!-- 아이콘 들고오기 -->
        <i class="far fa-calendar-plus addBtn"></i>
    </span>

    <!-- use the modal component, pass in the prop -->
    <Modal v-if="showModal" @close="showModal = false">
        <!--
                    you can use custom content here to overwrite
                    default content
                    너가 원하는 내용으로 모달을 재정의 할 수 있다.
            -->
        <!-- 특정 컴포넌트의 uid를 재사용 할 수 있다.-->
        <template v-slot:header>
            <h3>
                경고!
                <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
            </h3>
        </template>

        <template v-slot:body>
            <h3>아무것도 입력하지 않으셨습니다.</h3>
        </template>

        <!-- <h3 slot="header">경고 </h3> -->
    </Modal>
</div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
    data() {
        return {
            newTodoItem: "",
            showModal: false

        }
    },
    methods: {
        addTodo: function () {
            // 값이 있을 때만 동작
            if (this.newTodoItem !== '') {
                // 상위 컴포넌트로 값 보내기
                // this.$emit('addTodoItem', this.newTodoItem);
                const text = this.newTodoItem.trim();
                this.$store.commit('addOneItem', text);
                this.clearInput();

            } else {
                this.showModal = !this.showModal;
            }
        },
        clearInput: function () {
            // 저장한 다음 인풋박스 공백 처리
            this.newTodoItem = '';
        }
    },
    // 인풋의 하위 컴포넌트
    components: {
        // 향상된 객체 리터럴
        Modal
    }
}
</script>

<style scoped>
input:focus {
    outline: none;
}

.inputBox {
    background: rgb(255, 255, 255);
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}

.inputBox input {
    height: 40px;
    width: 80%;
    border-style: none;
    font-size: 0.9rem;
}

.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    widows: 3rem;
    border-radius: 0 5px 5px 0;
}

.addBtn {
    color: white;
    width: 50px;
    vertical-align: middle;
}

.closeModalBtn {
    color: #42b9b3;
    float: right;
}
</style>
