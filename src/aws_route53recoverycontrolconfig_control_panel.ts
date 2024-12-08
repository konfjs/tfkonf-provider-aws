import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53recoverycontrolconfigControlPanelArgs {
  cluster_arn: string;
  name: string;
}

export class aws_route53recoverycontrolconfig_control_panel extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRoute53recoverycontrolconfigControlPanelArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_route53recoverycontrolconfig_control_panel", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get cluster_arn(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_arn`;
  }

  get default_control_panel(): string {
    return `${this.resourceType}.${this.resourceName}.default_control_panel`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get routing_control_count(): string {
    return `${this.resourceType}.${this.resourceName}.routing_control_count`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }
}
