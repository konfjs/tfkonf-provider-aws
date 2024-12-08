import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamOrganizationsFeaturesArgs {
  enabled_features: string[];
}

export class aws_iam_organizations_features extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIamOrganizationsFeaturesArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_organizations_features", resourceName);
  }

  get enabled_features(): string {
    return `${this.resourceType}.${this.resourceName}.enabled_features`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
