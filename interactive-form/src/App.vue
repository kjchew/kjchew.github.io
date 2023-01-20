<script>
import M from "materialize-css";

export default {
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
