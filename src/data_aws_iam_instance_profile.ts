import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsIamInstanceProfileArgs {
  name: string;
}

export class data_aws_iam_instance_profile extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsIamInstanceProfileArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_iam_instance_profile", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get create_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_date`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get path(): string {
    return `data.${this.resourceType}.${this.resourceName}.path`;
  }

  get role_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get role_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.role_id`;
  }

  get role_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.role_name`;
  }
}
