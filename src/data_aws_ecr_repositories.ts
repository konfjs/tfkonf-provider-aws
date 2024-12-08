import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEcrRepositoriesArgs {
}

export class data_aws_ecr_repositories extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEcrRepositoriesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ecr_repositories", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get names(): string {
    return `data.${this.resourceType}.${this.resourceName}.names`;
  }
}
