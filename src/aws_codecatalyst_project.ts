import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodecatalystProjectArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsCodecatalystProjectArgs {
  description?: string;
  display_name: string;
  space_name: string;
  timeouts?: AwsCodecatalystProjectArgsTimeouts;
}

export class aws_codecatalyst_project extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCodecatalystProjectArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_codecatalyst_project", resourceName);
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get space_name(): string {
    return `${this.resourceType}.${this.resourceName}.space_name`;
  }
}
