import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./inicio-sesion/inicio-sesion.module').then(m => m.InicioSesionPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./catalogo/catalogo.module').then(m => m.CatalogoPageModule)
  },
  {
    path: 'detalle-pokemon',
    loadChildren: () => import('./detalle-pokemon/detalle-pokemon.module').then(m => m.DetallePokemonPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./favoritos/favoritos.module').then(m => m.FavoritosPageModule)
  },
  {
    path: 'perfil/favoritos',
    loadChildren: () => import('./favoritos/favoritos.module').then(m => m.FavoritosPageModule)
  },
  {
    path: 'detalle-charmander',
    loadChildren: () => import('./detalle-charmander/detalle-charmander.module').then(m => m.DetalleCharmanderPageModule)
  },
  {
    path: 'detalle-squirtle',
    loadChildren: () => import('./detalle-squirtle/detalle-squirtle.module').then(m => m.DetalleSquirtlePageModule)
  },
  {
    path: 'detalle-caterpie',
    loadChildren: () => import('./detalle-caterpie/detalle-caterpie.module').then(m => m.DetalleCaterpiePageModule)
  },
  {
    path: 'pokemones',
    loadChildren: () => import('./pokemones/pokemones.module').then( m => m.PokemonesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
