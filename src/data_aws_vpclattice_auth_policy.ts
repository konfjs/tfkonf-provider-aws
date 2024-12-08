import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsVpclatticeAuthPolicyArgs {
  policy?: string;
  resource_identifier: string;
  state?: string;
}

export class data_aws_vpclattice_auth_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsVpclatticeAuthPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_vpclattice_auth_policy", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get resource_identifier(): string {
    return `data.${this.resourceType}.${this.resourceName}.resource_identifier`;
  }
}
