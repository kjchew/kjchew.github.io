<template>
  <tr>
    <td>{{ index }}</td>
    <td>{{ campaign.emailName }}</td>
    <td>{{ campaign.campaignTag }}</td>
    <td style="width: 18%">
      <a
        href="#editMetadataModal"
        @click="edit(index)"
        class="btn-small waves-effect waves-light darken-2 modal-trigger"
      >
        <i class="material-icons">edit</i>
      </a>
      <a
        href="#!"
        class="btn-small waves-effect waves-light darken-2"
        @click="remove(index)"
      >
        <i class="material-icons">archive</i>
      </a>
      <!-- <div v-show="show_toast" id="recover_toast"> -->
      <div :class="{'show': this.show_toast}" id="recover_toast">
        The record will be removed
        <button class="btn-flat toast-action" @click="recoverItem()">
          UNDO
        </button>
      </div>

    </td>
  </tr>
</template>

<style scoped>
#recover_toast {
  visibility: hidden; /* Hidden by default. Visible on click */
  min-width: 250px; /* Set a default minimum width */
  margin-left: -125px; /* Divide value of min-width by 2 */
  background-color: #333; /* Black background color */
  color: #fff; /* White text color */
  text-align: center; /* Centered text */
  border-radius: 2px; /* Rounded borders */
  padding: 16px; /* Padding */
  position: fixed; /* Sit on top of the screen */
  z-index: 1; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  bottom: 30px; /* 30px from the bottom */
}

#recover_toast > button {
    color: #fff;
}

/* Show the snackbar when clicking on a button (class added with JavaScript) */
#recover_toast.show {
  visibility: visible; /* Show the snackbar */
  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
  However, delay the fade out process for 2.5 seconds */
  -webkit-animation: fadein 0.5s, fadeout 0.5s 4.5s;
  animation: fadein 0.5s, fadeout 0.5s 4.5s;
}

/* Animations to fade the snackbar in and out */
@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}
</style>


<script>
import M from "materialize-css";
export default {
  inject: ["removeMetadata", "recoverMetadata"],
  props: {
    index: {
      type: Number,
      required: true,
    },
    campaign: {
      type: Object,
      required: false,
    },
  },
  mounted() {
    M.AutoInit();
  },
  data() {
    return {
      show_toast: false,
      undo: false,
      archivedCampaign: {
        emailName: "",
        campaignTag: "",
      },
    };
  },
  methods: {
    edit(index) {
      console.log(`edit called, index: ${index}`);
      this.$emit("edit-metadata", index);
    },
    remove(index) {
      console.log(`remove called, index: ${index}`);
      this.show_toast = true;
      this.archivedCampaign = {emailName: this.campaign.emailName, campaignTag: this.campaign.campaignTag};
      setTimeout(() => {
        if (!this.undo)
            this.removeMetadata(index);
        this.show_toast = false;
}, 4000);
      console.log("after toast!!");
    },
    recoverItem() {
      console.log(`recoverItem called, emailName: ${this.archivedCampaign.emailName}, ${this.archivedCampaign.campaignTag}`);
      this.undo = true;
      this.show_toast = false;
    },
  },
};

</script>
