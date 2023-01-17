const ordonner = (a, b) => a.campaignTag > b.campaignTag;

const app = Vue.createApp({
    data() {
        return {
            columns: ['Index', 'Email Name', 'Campagin Tag'],
            campaigns: [
                { emailName: 'TW_Line_01', campaignTag: 'Line01' },
                { emailName: 'TW_Line_02', campaignTag: 'Line01' }
            ],
            metadataAddInput: {
                emailName: '',
                campaignTag: ''
            },
            metadataEditInput: {
                emailName: '',
                campaignTag: ''
            }
        };
    },
    methods: {
        edit(index) {
            this.editInput = this.campaigns[index];
            console.log(this.editInput);
            this.campaigns.splice(index, 1);
        },
        add(index) {
            this.campaigns.push({
                emailName: this.metadataAddInput.emailName,
                campaignTag: this.metadataAddInput.campaignTag
            });

            for (key in this.metadataAddInput) {
                this.metadataAddInput[key] = '';
            }
            this.campaigns.sort(ordonner);
            this.$refs.emailName.focus();
        }
    }
});

app.mount('#app');

