import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsServicequotasServiceArgs {
  service_name: string;
}

export class data_aws_servicequotas_service extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsServicequotasServiceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_servicequotas_service", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get service_code(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_code`;
  }

  get service_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_name`;
  }
}
