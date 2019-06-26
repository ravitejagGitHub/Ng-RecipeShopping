import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { SecurityComponent } from "./security/security.component";
import { InternalizationComponent } from "./internalization/internalization.component";

const routes: Routes = [
  { path: "security", component: SecurityComponent },
  { path: "internalization", component: InternalizationComponent },

  { path: "**", redirectTo: "/security", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
