import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53recoverycontrolconfigClusterArgs {
  name: string;
}

export class aws_route53recoverycontrolconfig_cluster extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRoute53recoverycontrolconfigClusterArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_route53recoverycontrolconfig_cluster", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get cluster_endpoints(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_endpoints`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }
}
