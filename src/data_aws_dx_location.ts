import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDxLocationArgs {
  location_code: string;
}

export class data_aws_dx_location extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsDxLocationArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_dx_location", resourceName);
  }

  get available_macsec_port_speeds(): string {
    return `data.${this.resourceType}.${this.resourceName}.available_macsec_port_speeds`;
  }

  get available_port_speeds(): string {
    return `data.${this.resourceType}.${this.resourceName}.available_port_speeds`;
  }

  get available_providers(): string {
    return `data.${this.resourceType}.${this.resourceName}.available_providers`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location_code(): string {
    return `data.${this.resourceType}.${this.resourceName}.location_code`;
  }

  get location_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.location_name`;
  }
}
