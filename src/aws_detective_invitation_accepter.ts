import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDetectiveInvitationAccepterArgs {
  graph_arn: string;
}

export class aws_detective_invitation_accepter extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDetectiveInvitationAccepterArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_detective_invitation_accepter", resourceName);
  }

  get graph_arn(): string {
    return `${this.resourceType}.${this.resourceName}.graph_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
