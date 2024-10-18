import { createWebHistory, createRouter } from "vue-router";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ContactView from "./views/ContactView.vue";
import Team1View from "./views/Team1View.vue";
import Team2View from "./views/Team2View.vue";
import NotFound from "./views/NotFound.vue";
import MemberView from "./views/MemberView.vue";
import DirectiveView from "./views/DirectiveView.vue";


// 路由設定 path 比對 URL ，比對成功就載入對應的組件
const routes = [
    {
        // http://localhost:5173/   => 載入 HomeView Conponent
        path:'/', 
        component:HomeView, 
        name:"Home",
        alias:'/index'   //指定路由別名
    },
    {
        // http://localhost:5173/about  => 載入 AboutView Conponent
        path:'/about', 
        component:AboutView, 
        name:"About",
        redirect:'/about/team1',    // 轉到其它的路由
        children:[   //用來製作子路由
            {
                path:"team1", 
                component:Team1View, 
                name:"Team1"},
            {
                path:"team2", 
                component:Team2View, 
                name:"Team2"}
        ]
    },
    {
        // http://localhost:5173/contact  => 載入 ContactView Conponent
        path:'/contact', 
        component:ContactView, 
        name:"Contact",
        // sensitive: true // contact 與 Contact 會視為不同
    },
    {
        path:'/directive', 
        component:DirectiveView, 
        name:"Directive",
    },
    {
        // http://localhost:5173/member  => 載入 MemberView Conponent
        path:'/member/:id', 
        component:MemberView, 
        name:"Member",
        props:true
    },
    {
        // 404
        path: '/:pathMatch(.*)*', 
        component:NotFound, 
        name:'NotFound'

    }
]

const router = createRouter({
    history: createWebHistory(),  //HTML5 History API
    routes
})

export default router