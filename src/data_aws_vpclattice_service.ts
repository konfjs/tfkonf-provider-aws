import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsVpclatticeServiceArgs {
}

export class data_aws_vpclattice_service extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsVpclatticeServiceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_vpclattice_service", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get auth_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.auth_type`;
  }

  get certificate_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificate_arn`;
  }

  get custom_domain_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.custom_domain_name`;
  }

  get dns_entry(): string {
    return `data.${this.resourceType}.${this.resourceName}.dns_entry`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get service_identifier(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_identifier`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
