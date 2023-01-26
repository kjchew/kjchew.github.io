<template>
  <table
    class="table-responsive bordered highlight centered hoverable z-depth-2"
  >
    <thead>
      <metadata-add-new />
      <tr v-show="campaigns.length">
        <th v-for="column in columns" :key="column">{{ column }}</th>
      </tr>
    </thead>
    <tbody>
      <metadata-line-record
        v-for="(campaign, index) in campaigns"
        :index="index"
        :campaign="campaign"
        :key="campaign.id"
        @edit-metadata="editMetadata"
      />
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
              <input
                id="emailName"
                type="text"
                v-model="metadataEditInput.emailName"
              />
            </div>
            <div class="input-field col s6">
              <input
                id="campaignTag"
                type="text"
                v-model="metadataEditInput.campaignTag"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="modal-footer">
      <a
        href="#!"
        class="modal-action modal-close waves-effect waves-green btn-flat"
        >Close</a
      >
      <a
        href="#!"
        @click="update"
        class="btn waves-effect waves-light modal-action modal-close"
        ><i class="material-icons">edit</i></a
      >
    </div>
  </div>
  <!-- end of Modal div -->
</template>

<script>
import MetadataLineRecord from "./MetadataLineRecord.vue";
import MetadataAddNew from "./MetadataAddNew.vue";

export default {
  components: {
    MetadataLineRecord,
    MetadataAddNew,
  },
  inject: ["updateMetadata"],
  props: {
    columns: {
      type: Array,
      required: true,
    },
    campaigns: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      metadataEditInput: {
        id: "",
        emailName: "",
        campaignTag: "",
      },
      metadataBin: [],
      currentEditIdx: -1,
    };
  },
  methods: {
    editMetadata(index) {
      //   this.metadataEditInput = this.campaigns[index];

      this.metadataEditInput = {
        index,
        emailName: this.campaigns[index].emailName,
        campaignTag: this.campaigns[index].campaignTag,
      };
      console.log(
        `editMetadata called, index: ${index}, ${JSON.stringify(
          this.metadataEditInput
        )}\ncampaign: ${JSON.stringify(this.campaigns[index])}`
      );
    },
    update() {
      console.log("update called");
      this.updateMetadata(
        this.metadataEditInput.index,
        this.metadataEditInput.emailName,
        this.metadataEditInput.campaignTag
      );
    },
  },
};
</script>
