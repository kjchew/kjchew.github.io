const ordonner = (a, b) => (a.campaignTag > b.campaignTag) ? 1 : -1;

const app = Vue.createApp({
    data() {
        return {
            columns: ['Index', 'Email Name', 'Campagin Tag'],
            campaigns: [
                { id: '1', emailName: 'TW_Line_01', campaignTag: 'Line01' },
                { id: '2', emailName: 'TW_Line_02', campaignTag: 'Line01' }
            ],
            metadataAddInput: {
                emailName: '',
                campaignTag: ''
            },
            metadataEditInput: {
                id: '',
                emailName: '',
                campaignTag: ''
            },
            metadataBin: [],
            currentEditIdx: -1,
            recoverIdx: -1
        };
    },
    methods: {
        edit(index) {
            this.metadataEditInput = this.campaigns[index];
            this.currentEditIdx = index;
            console.log(`edit modal panel for ${this.currentEditIdx}: ${JSON.stringify(this.metadataEditInput)}`);
            // this.campaigns.splice(index, 1);
        },
        remove(index) {
            this.metadataBin[index] = this.campaigns[index];
            this.campaigns.splice(index, 1);
            this.recoverIdx = index;
            displayDeleteToast(index);
        },
        update() {
            this.campaigns[this.currentEditIdx] = this.metadataEditInput
            console.log(`update called, updated campaigns: ${JSON.stringify(this.campaigns)}`);
            for (key in this.metadataEditInput) {
                this.metadataEditInput[key] = '';
            }
            this.campaigns.sort(ordonner);
        },
        add(index) {
            this.campaigns.push({
                id: this.campaigns.length + 1,
                emailName: this.metadataAddInput.emailName,
                campaignTag: this.metadataAddInput.campaignTag
            });

            for (key in this.metadataAddInput) {
                this.metadataAddInput[key] = '';
            }
            this.campaigns.sort(ordonner);
            this.$refs.emailName.focus();

            console.log(`add called: campaigns: ${JSON.stringify(this.campaigns)}`);
        },
        recoverItem(recoverIndex) {
            console.log("recoverItem called: " + recoverIndex);
        }
    }
});

app.mount('#app');

function displayDeleteToast(recoverIndex) {
    const deleteToast = `<span>Record has been deleted</span><button class="btn-flat toast-action" @click="recoverItem(${recoverIndex})">Undo</button>`;
    M.toast({html: deleteToast});
}

// $(document).ready(function(){
//     $('.modal').modal();
//   });
