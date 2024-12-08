import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafregionalWebAclAssociationArgsTimeouts {
  create?: string;
}

export interface AwsWafregionalWebAclAssociationArgs {
  resource_arn: string;
  web_acl_id: string;
  timeouts?: AwsWafregionalWebAclAssociationArgsTimeouts;
}

export class aws_wafregional_web_acl_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsWafregionalWebAclAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_wafregional_web_acl_association", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get resource_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_arn`;
  }

  get web_acl_id(): string {
    return `${this.resourceType}.${this.resourceName}.web_acl_id`;
  }
}
