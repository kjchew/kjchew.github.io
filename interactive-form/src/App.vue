<script>
import M from "materialize-css";
import axios from "axios";

const cloudpageUrl = "https://cloud.info.msdconnect.tw/metadata_de";

export default {
  provide() {
    return {
      addNewMetadata: this.addMetadata,
      updateMetadata: this.updateMetadata,
      removeMetadata: this.removeMetadata,
    };
  },
  methods: {
    addMetadata(emailName, campaignTag) {
      const payload = {
        emailName: emailName,
        campaignTag: campaignTag
      };
      axios.post(`${cloudpageUrl}?deName=poc_kj_metadata`, payload)
           .then(response => {
              this.campaigns.push(response.data.record);
              this.campaigns.sort(sortCampaigns);
              console.log(`add called: \ncampaigns: ${JSON.stringify(this.campaigns)}\nresponse: ${JSON.stringify(response.data)}`);
           });
    },
    updateMetadata(index, emailName, campaignTag) {
      const payload = {
        id: `${this.campaigns[index].id}`,
        emailName: emailName,
        campaignTag: campaignTag
      };
      axios.put(`${cloudpageUrl}?deName=poc_kj_metadata`, payload)
           .then(response => {
              this.campaigns[index] = response.data.record;
              this.campaigns.sort(sortCampaigns);
              console.log(`update called: \ncampaigns: ${JSON.stringify(this.campaigns)}\nresponse: ${JSON.stringify(response.data)}`);
           });
    },
    removeMetadata(index) {
      const id = this.campaigns[index].id;
      axios.delete(`${cloudpageUrl}?deName=poc_kj_metadata&id=${id}`)
           .then(response => {
              this.campaigns.splice(index, 1);
           });
    }
  },
  data() {
    return {
      columns: ["Index", "Email Name", "Campagin Tag"],
      campaigns: [
      ],
      metadataBin: [],
      currentEditIdx: -1,
    };
  },
  mounted() {
    M.AutoInit();
    axios
      .get(`${cloudpageUrl}?deName=poc_kj_metadata`)
      .then((response) => {
        this.campaigns = response.data;
        this.campaigns.sort(sortCampaigns);
      });
  },
};

function sortCampaigns(campA, campB) {
  if (campA.campaignTag === campB.campaignTag) return (campA.emailName > campB.emailName) ? 1 : -1;
  return campA.campaignTag > campB.campaignTag ? 1 : -1;
}

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

<style></style>
