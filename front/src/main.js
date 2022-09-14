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
const app = createApp(App)
app.use(createPinia()).use(router).mount('#app')
app.component("widget-title", WidgetTitle)
app.component("widget-button", WidgetButton)
app.component("widget-input", WidgetInput)
app.component("widget-table", WidgetTable)
app.component("widget-DropDown", WidegetDropDown)
