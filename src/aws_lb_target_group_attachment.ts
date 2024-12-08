import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLbTargetGroupAttachmentArgs {
  availability_zone?: string;
  port?: number;
  target_group_arn: string;
  target_id: string;
}

export class aws_lb_target_group_attachment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLbTargetGroupAttachmentArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lb_target_group_attachment", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get target_group_arn(): string {
    return `${this.resourceType}.${this.resourceName}.target_group_arn`;
  }

  get target_id(): string {
    return `${this.resourceType}.${this.resourceName}.target_id`;
  }
}
