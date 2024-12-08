import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsElbAttachmentArgs {
  elb: string;
  instance: string;
}

export class aws_elb_attachment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsElbAttachmentArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_elb_attachment", resourceName);
  }

  get elb(): string {
    return `${this.resourceType}.${this.resourceName}.elb`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance(): string {
    return `${this.resourceType}.${this.resourceName}.instance`;
  }
}
