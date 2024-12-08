import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpclatticeTargetGroupAttachmentArgsTarget {
  id: string;
}

export interface AwsVpclatticeTargetGroupAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsVpclatticeTargetGroupAttachmentArgs {
  target_group_identifier: string;
  target: AwsVpclatticeTargetGroupAttachmentArgsTarget;
  timeouts?: AwsVpclatticeTargetGroupAttachmentArgsTimeouts;
}

export class aws_vpclattice_target_group_attachment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVpclatticeTargetGroupAttachmentArgs) {
    const meta = {target:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_vpclattice_target_group_attachment", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get target_group_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.target_group_identifier`;
  }
}
