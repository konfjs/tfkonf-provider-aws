import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailLbAttachmentArgs {
  instance_name: string;
  lb_name: string;
}

export class aws_lightsail_lb_attachment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLightsailLbAttachmentArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lightsail_lb_attachment", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_name(): string {
    return `${this.resourceType}.${this.resourceName}.instance_name`;
  }

  get lb_name(): string {
    return `${this.resourceType}.${this.resourceName}.lb_name`;
  }
}
