const {createApp} = Vue;
createApp({
    data(){
        return {
            newTask: ``,
            count: 0,
            todoList: [

                {
                    text: `Cose da fare`,
                    done: false
                },
                {
                    text: `Cose da dire`,
                    done: true
                },
                {
                    text: `Cose da pensare`,
                    done: false
                },
                {
                    text: `Cose da guardare`,
                    done: true
                },
                {
                    text: `Cose da comprare`,
                    done: false
                },
                {
                    text: `Cose da regalare`,
                    done: false
                },
            ]
        }
    },
    methods: {
        addNewTask(){
            if(this.newTask.trim() != 0){
                this.todoList.push({
                    text: this.newTask,
                    done: false
                });
                this.newTask = ``;
            }
        },
        removeTask(i) {
            this.todoList.splice(i, 1);
        },
        changeDone (i){
            if(this.todoList[i].done == true){
                this.todoList[i].done = false;
            } else {
                this.todoList[i].done = true;
            }
            console.log(this.todoList[i].done);
        }
    }
}).mount(`#app`)