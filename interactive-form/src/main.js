import { createApp } from "vue";
import App from "./App.vue";
import MetadataList from "./components/MetadataList.vue";
import MetadataLineRecord from "./components/MetadataLineRecord.vue";

import "materialize-css/dist/css/materialize.min.css";
import "material-design-icons/iconfont/material-icons.css";
import "./assets/main.css";

const app = createApp(App)
app.component("metadata-list", MetadataList);
app.component("metadata-line-record", MetadataLineRecord);

app.mount("#app");
