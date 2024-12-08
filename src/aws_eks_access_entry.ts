import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEksAccessEntryArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsEksAccessEntryArgs {
  cluster_name: string;
  principal_arn: string;
  tags?: { [key: string]: string };
  type?: string;
  timeouts?: AwsEksAccessEntryArgsTimeouts;
}

export class aws_eks_access_entry extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEksAccessEntryArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_eks_access_entry", resourceName);
  }

  get access_entry_arn(): string {
    return `${this.resourceType}.${this.resourceName}.access_entry_arn`;
  }

  get cluster_name(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_name`;
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kubernetes_groups(): string {
    return `${this.resourceType}.${this.resourceName}.kubernetes_groups`;
  }

  get modified_at(): string {
    return `${this.resourceType}.${this.resourceName}.modified_at`;
  }

  get principal_arn(): string {
    return `${this.resourceType}.${this.resourceName}.principal_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get user_name(): string {
    return `${this.resourceType}.${this.resourceName}.user_name`;
  }
}
