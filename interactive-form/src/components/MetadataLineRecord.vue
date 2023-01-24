<script>
export default {
    props: {
        index: {
            type: Number,
            required: true
        },
        campaign: {
            type: Object,
            required: false
        },
        recoverIdx: {
            type: Number,
            required: false
        },
    },
    data() {
        return {
        }
    },
    methods: {
        edit(index) {
            console.log(`edit called, index: ${index}`)
            this.$emit('edit-metadata', index);
        },

    },
}
</script>

<template>
    <tr>
        <td>{{ index }}</td>
        <td>{{ campaign.emailName }}</td>
        <td>{{ campaign.campaignTag }}</td>
        <td style="width: 18%;">
            <a href="#editMetadataModal" @click="edit(index)"
                class="btn-small waves-effect waves-light darken-2 modal-trigger">
                <i class="material-icons">edit</i>
            </a>
            <a href="#!" class="btn-small waves-effect waves-light darken-2" @click="remove(index)">
                <i class="material-icons">archive</i>
            </a>
            <span v-if="recoverIdx === index">Record has been deleted<button class="btn-flat toast-action"
                    @click="recoverItem(index)">Undo</button></span>
        </td>
    </tr>

</template>
