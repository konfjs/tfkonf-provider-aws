import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDetectiveOrganizationConfigurationArgs {
  auto_enable: boolean;
  graph_arn: string;
}

export class aws_detective_organization_configuration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDetectiveOrganizationConfigurationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_detective_organization_configuration", resourceName);
  }

  get auto_enable(): string {
    return `${this.resourceType}.${this.resourceName}.auto_enable`;
  }

  get graph_arn(): string {
    return `${this.resourceType}.${this.resourceName}.graph_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
