<script>
import M from "materialize-css";

export default {
  provide() {
    return {
      addNewMetadata: this.addMetadata,
      updateMetadata: this.updateMetadata,
    };
  },
  methods: {
    addMetadata(emailName, campaignTag) {
      this.campaigns.push({
        id: this.campaigns.length + 1,
        emailName,
        campaignTag
      });
      this.campaigns.sort((a, b) => (a.campaignTag > b.campaignTag ? 1 : -1));
      console.log(`add called: campaigns: ${JSON.stringify(this.campaigns)}`);
    },
    updateMetadata(index, emailName, campaignTag) {
        console.log(`updateMetadata called: ${index}, ${emailName}, ${campaignTag}`);
        this.campaigns[index] = {emailName, campaignTag};
        // campaign = this.campaigns.find((campaign) => (campaign.id === id));
        // campaign = {id, emailName, campaignTag};
    }
  },
  data() {
    return {
        columns: ['Index', 'Email Name', 'Campagin Tag'],
        campaigns: [
            { id: '1', emailName: 'TW_Line_01', campaignTag: 'Line01' },
            { id: '2', emailName: 'TW_Line_02', campaignTag: 'Line01' }
        ],
        metadataBin: [],
        currentEditIdx: -1,
    };
  },
  mounted() {
    M.AutoInit();
  },
};
</script>

<template>
  <header>
    <div class="container">
      <h3 class="header">Manage Campaign Tracking</h3>
      <div class="card-panel">
        <metadata-list :campaigns="campaigns" :columns="columns" />
      </div>
    </div>
  </header>
</template>

<style>

</style>
