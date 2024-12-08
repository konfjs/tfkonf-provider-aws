import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDirectoryServiceRegionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsDirectoryServiceRegionArgsVpcSettings {
  subnet_ids: string[];
  vpc_id: string;
}

export interface AwsDirectoryServiceRegionArgs {
  directory_id: string;
  region_name: string;
  tags?: { [key: string]: string };
  timeouts?: AwsDirectoryServiceRegionArgsTimeouts;
  vpc_settings: AwsDirectoryServiceRegionArgsVpcSettings;
}

export class aws_directory_service_region extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDirectoryServiceRegionArgs) {
    const meta = {timeouts:{isBlock:true},vpc_settings:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_directory_service_region", resourceName);
  }

  get desired_number_of_domain_controllers(): string {
    return `${this.resourceType}.${this.resourceName}.desired_number_of_domain_controllers`;
  }

  get directory_id(): string {
    return `${this.resourceType}.${this.resourceName}.directory_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get region_name(): string {
    return `${this.resourceType}.${this.resourceName}.region_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
