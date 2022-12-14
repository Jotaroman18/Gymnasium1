import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { HomeDashboardComponent } from './home-dashboard.component';
// import { CentrosComponent } from './bottom/centros/centros/centros.component';
// import { ProgresoComponent } from './bottom/progreso/progreso/progreso.component';
// import { ObjetivosComponent } from './bottom/objetivos/objetivos/objetivos.component';
// import { ClasesDashboardLayoutComponent } from '../clases/clases-layout/clases-dashboard-layout.component';



// INTENTANDO IMPLEMENTAR LAZY LOADING:

    // {
    //     path: 'home',
    //     loadChildren: () => import('../home/bottom/bottom.module').then(m => m.BottomModule)
    // }
    // { path: '**', loadChildren: () => import('./home.module').then(m => m.HomeModule) },
    // {
    //     path: 'financiacion',
    //     component: FinanciacionComponent
    // },
    // {
    //     path: 'comercio',
    //     component: ComercioExteriorComponent
    // },
    // {
    //     path: 'cobros',
    //     component: CobrosPagosComponent
    // },
    // {
    //     path: '**',
    //     component: CuentasTarjetasLayoutComponent
    // }
    // {
    //     path: '**',
    //     loadChildren: () => import('./../app/home/home.module').then(m => m.HomeModule)
    // }
    // {   path: '/financiacion', component: FinanciacionComponent  },
    // {   path: '/comercio', component: ComercioExteriorComponent  },  
    // {   path: '/cobros', component: CobrosPagosComponent         },
    // {   path: '**', component: DashboardLayoutComponent   }
    

const routes: Routes = [
    {
      path: 'home',
    //   pathMatch: 'full',
      component: HomeDashboardComponent,
    //   children: [
    //       { path: 'centros', component: CentrosComponent },
    //       { path: 'progreso', component: ProgresoComponent },
    //       { path: 'objetivos', component: ObjetivosComponent },
    //       { path: 'clases', component: ClasesComponent },
    //   ]
    },

  ];    
  



@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class HomeRoutingModule { }
