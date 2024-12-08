import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsConnectSecurityProfileArgs {
  instance_id: string;
}

export class data_aws_connect_security_profile extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsConnectSecurityProfileArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_connect_security_profile", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get organization_resource_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.organization_resource_id`;
  }

  get permissions(): string {
    return `data.${this.resourceType}.${this.resourceName}.permissions`;
  }

  get security_profile_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_profile_id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
