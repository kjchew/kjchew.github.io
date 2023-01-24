<template>
<tr>
    <td colspan="2">
        <div class="input-field">
            <input ref="emailName" v-model="metadataAddInput.emailName"
                id="emailName" type="text">
            <label for="emailName">Email Name</label>
        </div>
    </td>
    <td>
        <div class="input-field">
            <input v-model="metadataAddInput.campaignTag" id="campaignTag"
                type="text">
            <label for="campaignTag">Campaign Tag</label>
        </div>
    </td>
    <td><a href="#!" @click="add()" class="btn-small btn-waves green darken-2"><i
                class="material-icons">add</i></a></td>
</tr>
</template>
<script>
export default {
  inject: ["addNewMetadata"],
  methods: {
    add() {
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
      metadataAddInput: {
        emailName: "",
        campaignTag: "",
      },
    };
  },
};
</script>
