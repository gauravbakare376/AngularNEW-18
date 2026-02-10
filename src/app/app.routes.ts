import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './components/about/about';

export const routes: Routes = [
    
    {path:'',redirectTo:'home',pathMatch:'full'},  // pathmatch gives if you want to give full path or not
    {path:'home',component:Home},
    {path:'about',component:About}
];
