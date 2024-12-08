import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppsyncTypeArgs {
  api_id: string;
  definition: string;
  format: string;
}

export class aws_appsync_type extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAppsyncTypeArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_appsync_type", resourceName);
  }

  get api_id(): string {
    return `${this.resourceType}.${this.resourceName}.api_id`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get definition(): string {
    return `${this.resourceType}.${this.resourceName}.definition`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get format(): string {
    return `${this.resourceType}.${this.resourceName}.format`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
