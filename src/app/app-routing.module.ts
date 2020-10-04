import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "src/pages/landing/landing.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("../pages/landing/landing.module").then(m => m.LandingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
