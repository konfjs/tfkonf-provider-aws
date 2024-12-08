import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEfsAccessPointArgs {
  access_point_id: string;
}

export class data_aws_efs_access_point extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEfsAccessPointArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_efs_access_point", resourceName);
  }

  get access_point_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.access_point_id`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get file_system_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.file_system_arn`;
  }

  get file_system_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.file_system_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get owner_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get posix_user(): string {
    return `data.${this.resourceType}.${this.resourceName}.posix_user`;
  }

  get root_directory(): string {
    return `data.${this.resourceType}.${this.resourceName}.root_directory`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
