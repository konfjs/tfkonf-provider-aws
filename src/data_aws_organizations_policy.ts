import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsOrganizationsPolicyArgs {
  policy_id: string;
}

export class data_aws_organizations_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsOrganizationsPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_organizations_policy", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get aws_managed(): string {
    return `data.${this.resourceType}.${this.resourceName}.aws_managed`;
  }

  get content(): string {
    return `data.${this.resourceType}.${this.resourceName}.content`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get policy_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_id`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }
}
