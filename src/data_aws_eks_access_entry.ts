import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEksAccessEntryArgs {
  cluster_name: string;
  principal_arn: string;
  tags?: { [key: string]: string };
}

export class data_aws_eks_access_entry extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEksAccessEntryArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_eks_access_entry", resourceName);
  }

  get access_entry_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.access_entry_arn`;
  }

  get cluster_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_name`;
  }

  get created_at(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_at`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kubernetes_groups(): string {
    return `data.${this.resourceType}.${this.resourceName}.kubernetes_groups`;
  }

  get modified_at(): string {
    return `data.${this.resourceType}.${this.resourceName}.modified_at`;
  }

  get principal_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.principal_arn`;
  }

  get tags_all(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }

  get user_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_name`;
  }
}
