import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamInstanceProfileArgs {
  path?: string;
  role?: string;
  tags?: { [key: string]: string };
}

export class aws_iam_instance_profile extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsIamInstanceProfileArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_instance_profile", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get create_date(): string {
    return `${this.resourceType}.${this.resourceName}.create_date`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get unique_id(): string {
    return `${this.resourceType}.${this.resourceName}.unique_id`;
  }
}
