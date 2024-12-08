import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDxLocationsArgs {
}

export class data_aws_dx_locations extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsDxLocationsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_dx_locations", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location_codes(): string {
    return `data.${this.resourceType}.${this.resourceName}.location_codes`;
  }
}
