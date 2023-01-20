<script>
export default {
    props: {
        columns: {
            type: Array,
            required: true
        },
        campaigns: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            metadataEditInput: {
                id: "",
                emailName: "",
                campaignTag: ""
            },
            metadataAddInput: {
                emailName: '',
                campaignTag: ''
            },
            metadataBin: [],
            currentEditIdx: -1,
            recoverIdx: -1

        }
    },
    methods: {
        editMetadata(index) {
            this.metadataEditInput = this.campaigns[index]
            console.log(`editMetadata called, index: ${index}, ${JSON.stringify(this.metadataEditInput)}`);
        }
    },
}
</script>

<template>
    <table class="table-responsive bordered highlight centered hoverable z-depth-2" v-show="campaigns.length">
        <thead>
            <tr>
                <th v-for="column in columns" :key="column">{{ column }}</th>
            </tr>
        </thead>
        <tbody>
            <metadata-line-record v-for="(campaign, index) in campaigns" :index="index" :campaign="campaign"
                :key="campaign.id" :recoverIdx="recoverIdx" @edit-metadata="editMetadata"/>
            <tr>
                <td colspan="2">
                    <div class="input-field">
                        <input placeholder="Placeholder" ref="emailName" v-model="metadataAddInput.emailName"
                            id="emailName" type="text">
                        <label for="emailName">Email Name</label>
                    </div>
                </td>
                <td>
                    <div class="input-field">
                        <input placeholder="Placeholder" v-model="metadataAddInput.campaignTag" id="campaignTag"
                            type="text">
                        <label for="campaignTag">Campaign Tag</label>
                    </div>
                </td>
                <td><a href="#!" @click="add" class="btn-small btn-waves green darken-2"><i
                            class="material-icons">add</i></a></td>
            </tr>
        </tbody>
    </table>

    <!-- Edit Modal -->

    <div id="editMetadataModal" class="modal modal-fixed-footer">
        <div class="modal-content">
            <h4 class="center-align">Edit</h4>
            <p class="center-align">Edition form. Update informations</p>
            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s6">
                            <input placeholder="Email Name" id="emailName" type="text"
                                v-model="metadataEditInput.emailName">
                            <label for="emailName">Email Name</label>
                        </div>
                        <div class="input-field col s6">
                            <input placeholder="Campaign Tag" id="campaignTag" type="text"
                                v-model="metadataEditInput.campaignTag">
                            <label for="campaignTag">Campaign Tag</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="modal-footer">
            <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
            <a href="#!" @click="update" class="btn waves-effect waves-light modal-action modal-close"><i
                    class="material-icons">edit</i></a>
        </div>
    </div>
    <!-- end of Modal div -->

</template>
