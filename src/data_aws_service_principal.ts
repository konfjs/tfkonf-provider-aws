import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsServicePrincipalArgs {
  service_name: string;
}

export class data_aws_service_principal extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsServicePrincipalArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_service_principal", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get region(): string {
    return `data.${this.resourceType}.${this.resourceName}.region`;
  }

  get service_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_name`;
  }

  get suffix(): string {
    return `data.${this.resourceType}.${this.resourceName}.suffix`;
  }
}
