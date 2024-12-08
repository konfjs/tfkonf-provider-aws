import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53recoverycontrolconfigRoutingControlArgs {
  cluster_arn: string;
  name: string;
}

export class aws_route53recoverycontrolconfig_routing_control extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRoute53recoverycontrolconfigRoutingControlArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_route53recoverycontrolconfig_routing_control", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get cluster_arn(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_arn`;
  }

  get control_panel_arn(): string {
    return `${this.resourceType}.${this.resourceName}.control_panel_arn`;
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
