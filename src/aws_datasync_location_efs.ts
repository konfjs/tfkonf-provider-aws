import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatasyncLocationEfsArgsEc2Config {
  security_group_arns: string[];
  subnet_arn: string;
}

export interface AwsDatasyncLocationEfsArgs {
  access_point_arn?: string;
  efs_file_system_arn: string;
  file_system_access_role_arn?: string;
  in_transit_encryption?: string;
  subdirectory?: string;
  tags?: { [key: string]: string };
  ec2_config: AwsDatasyncLocationEfsArgsEc2Config;
}

export class aws_datasync_location_efs extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDatasyncLocationEfsArgs) {
    const meta = {ec2_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_datasync_location_efs", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get efs_file_system_arn(): string {
    return `${this.resourceType}.${this.resourceName}.efs_file_system_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get uri(): string {
    return `${this.resourceType}.${this.resourceName}.uri`;
  }
}
