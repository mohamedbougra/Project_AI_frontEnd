import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TemplateComponent } from './template.component';
import { PaymentComponent } from './payment.component';
import { SeatComponent } from './seat.component';
import { ConfirmationComponent } from './confirmation.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
import { StepsModule } from 'primeng/steps';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { ContextMenuModule } from 'primeng/contextmenu';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
	imports: [
		CommonModule,
		BreadcrumbModule,
		MenubarModule,
		TabMenuModule,
		StepsModule,
		TieredMenuModule,
		MenuModule,
		ButtonModule,
		ContextMenuModule,
		MegaMenuModule,
		PanelMenuModule,
		InputTextModule,
		RouterModule.forChild([
			{
				path: '', component: TemplateComponent, children: [
					{ path: '', component: TemplateComponent ,pathMatch: 'full' },
					{ path: 'confirmation', component: ConfirmationComponent },
					{ path: 'seat', component: SeatComponent },
					{ path: 'payment', component: PaymentComponent }
				]
			}
		])
	],
	declarations: [TemplateComponent],
	exports: [RouterModule]
})
export class TemplateModule { }
