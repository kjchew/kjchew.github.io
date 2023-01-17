const app = Vue.createApp({
    data() {
        return {
            columns: ['Index', 'Email Name', 'Campagin Tag'],
            campaigns: [
                { emailName: 'TW_Line_01', campaignTag: 'Line01' },
                { emailName: 'TW_Line_02', campaignTag: 'Line01' }
            ],
            message: 'Hello World from Joon222'
        };
    },
    methods: {
        edit(index) {
            this.editInput = this.campaigns[index];
            console.log(this.editInput);
            this.campaigns.splice(index, 1);
        },
    },
});

app.mount('#app');
