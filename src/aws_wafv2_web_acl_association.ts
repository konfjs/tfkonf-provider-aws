import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafv2WebAclAssociationArgsTimeouts {
  create?: string;
}

export interface AwsWafv2WebAclAssociationArgs {
  resource_arn: string;
  web_acl_arn: string;
  timeouts?: AwsWafv2WebAclAssociationArgsTimeouts;
}

export class aws_wafv2_web_acl_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsWafv2WebAclAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_wafv2_web_acl_association", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get resource_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_arn`;
  }

  get web_acl_arn(): string {
    return `${this.resourceType}.${this.resourceName}.web_acl_arn`;
  }
}
