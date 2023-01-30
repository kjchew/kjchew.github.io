<template>
  <form @submit.prevent="add()">
    <div class="row">
      <div class="input-field col s4">
        <input
          ref="emailName"
          v-model.trim="metadataAddInput.emailName"
          id="emailName"
          type="text"
        />
        <label for="emailName">Email Name</label>
        <span v-if="isEmailEmpty" class="helper-text red-text text-darken-1"
          >Email Name can't be empty</span
        >
      </div>
      <div class="input-field col s4">
        <input
          ref="campaignTag"
          v-model.trim="metadataAddInput.campaignTag"
          id="campaignTag"
          type="text"
        />
        <label for="campaignTag">Campaign Tag</label>
        <span
          v-if="isCampaignTagEmpty"
          class="helper-text red-text text-darken-1"
          >Campaign Tag can't be empty</span
        >
      </div>
      <div class="input-field col s2">
        <button class="btn-floating waves-effect waves-light green">
          <i class="material-icons">add</i>
        </button>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  inject: ["addNewMetadata"],
  methods: {
    checkEmptyEmail() {
      this.isEmailEmpty = this.metadataAddInput.emailName === "";
      return this.isEmailEmpty;
    },
    checkEmptyCampaignTag() {
      this.isCampaignTagEmpty = this.metadataAddInput.campaignTag === "";
      return this.isCampaignTagEmpty;
    },
    add() {
      if (this.checkEmptyEmail() | this.checkEmptyCampaignTag()) {
        return;
      }
      this.addNewMetadata(
        this.metadataAddInput.emailName,
        this.metadataAddInput.campaignTag
      );
      for (const key in this.metadataAddInput) {
        this.metadataAddInput[key] = "";
      }
      this.$refs.emailName.focus();
    },
  },
  data() {
    return {
      isEmailEmpty: false,
      isCampaignTagEmpty: false,
      metadataAddInput: {
        emailName: "",
        campaignTag: "",
      },
    };
  },
};
</script>
