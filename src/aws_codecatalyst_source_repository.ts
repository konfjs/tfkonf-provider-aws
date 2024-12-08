import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodecatalystSourceRepositoryArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsCodecatalystSourceRepositoryArgs {
  description?: string;
  name: string;
  project_name: string;
  space_name: string;
  timeouts?: AwsCodecatalystSourceRepositoryArgsTimeouts;
}

export class aws_codecatalyst_source_repository extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCodecatalystSourceRepositoryArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_codecatalyst_source_repository", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project_name(): string {
    return `${this.resourceType}.${this.resourceName}.project_name`;
  }

  get space_name(): string {
    return `${this.resourceType}.${this.resourceName}.space_name`;
  }
}
