import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDxRouterConfigurationArgs {
  router_type_identifier: string;
  virtual_interface_id: string;
}

export class data_aws_dx_router_configuration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsDxRouterConfigurationArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_dx_router_configuration", resourceName);
  }

  get customer_router_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.customer_router_config`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get router(): string {
    return `data.${this.resourceType}.${this.resourceName}.router`;
  }

  get router_type_identifier(): string {
    return `data.${this.resourceType}.${this.resourceName}.router_type_identifier`;
  }

  get virtual_interface_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.virtual_interface_id`;
  }

  get virtual_interface_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.virtual_interface_name`;
  }
}
