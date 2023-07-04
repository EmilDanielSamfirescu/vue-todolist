const {createApp} = Vue;
createApp({
    data(){
        return {
            newTask: ``,
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

            if(this.todoList.length > 0) {
                this.newTask.push({
                    text: `non ci sono task`
                });
            }
        },
        invertDone (){
            // console.log("bella!")
            
        }
    }
}).mount(`#app`)