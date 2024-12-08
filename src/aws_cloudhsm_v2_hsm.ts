import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudhsmV2HsmArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsCloudhsmV2HsmArgs {
  cluster_id: string;
  timeouts?: AwsCloudhsmV2HsmArgsTimeouts;
}

export class aws_cloudhsm_v2_hsm extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCloudhsmV2HsmArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_cloudhsm_v2_hsm", resourceName);
  }

  get availability_zone(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get cluster_id(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_id`;
  }

  get hsm_eni_id(): string {
    return `${this.resourceType}.${this.resourceName}.hsm_eni_id`;
  }

  get hsm_id(): string {
    return `${this.resourceType}.${this.resourceName}.hsm_id`;
  }

  get hsm_state(): string {
    return `${this.resourceType}.${this.resourceName}.hsm_state`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.ip_address`;
  }

  get subnet_id(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_id`;
  }
}
