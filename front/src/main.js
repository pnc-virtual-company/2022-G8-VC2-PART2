import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import { createPinia } from 'pinia'
import WidgetTitle from "@/components/Widgets/WidgetTitle"
import WidgetButton from "@/components/Widgets/WidgetButton"
import WidgetInput from "@/components/Widgets/WidgetInput"
import WidgetTable from "@/components/Widgets/WidgetTable"
import WidegetDropDown from './components/Widgets/WidegetDropDown.vue'
import WidegetViewProfileDetail from "@/components/Widgets/WidegetProfileDetail.vue"
import WidgetNav from "@/components/Aside/AsideLeft.vue"
import WidgetResetPasswordVue from './components/Widgets/WidgetResetPassword.vue'
import WidgetSettingVue from './components/Widgets/WidgetSetting.vue'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const app = createApp(App).use(createPinia()).use(createPinia())


app.use(createPinia()).use(router).mount('#app')
app.component("widget-title", WidgetTitle)
app.component("widget-button", WidgetButton)
app.component("widget-input", WidgetInput)
app.component("widget-table", WidgetTable)
app.component("widget-DropDown", WidegetDropDown)
app.component("widget-ViewProfileDetail", WidegetViewProfileDetail)
app.component("widget-navigation", WidgetNav)
app.component("widget-ResetPasswordVue", WidgetResetPasswordVue)
app.component("widget-SettingVue", WidgetSettingVue)
app.use(Toast)

