/** @odoo-module **/

import { registry } from "@web/core/registry"
import { kanbanView } from "@web/views/kanban/kanban_view"   
import { KanbanController } from "@web/views/kanban/kanban_controller"
import { useService } from "@web/core/utils/hooks"

const { onWillStart } = owl

class ResPartnerKanbanController extends KanbanController {
    setup() {
        super.setup()
        console.log("Ini adalah res partner kanban controller")
        this.action = useService("action")
        this.orm = useService("orm")

        onWillStart(async () => {
            this.customerLocations = await this.orm.readGroup("res.partner", [], ['state_id'], ['state_id'])
            console.log(this.customerLocations)
        })
    }

    //buka langsung ke sale
    openSaleView() {
        console.log("Buka Sale dari Kanban View")
        this.action.doAction({
            type: "ir.actions.act_window",
            name: "Customer Sales",
            res_model: "sale.order",
            views: [[false, "kanban"], [false, "form"]],
        })
    }

    selectLocations(state) {
        const id = state[0]
        const name = state[1]

        this.env.searchModel.setDomainParts({
            state: {
                domain: [['state_id', '=', id]],
                facetLabel: name 
            }
        })
    }
}

ResPartnerKanbanController.template = "tutorial_owl.ResPartnerKanbanView"

export const resPartnerKanbanView = {
    ...kanbanView,
    Controller: ResPartnerKanbanController,
    buttonTemplate: "tutorial_owl.ResPartnerKanbanView.Buttons",
}

registry.category("views").add("res_partner_kanban_view", resPartnerKanbanView)