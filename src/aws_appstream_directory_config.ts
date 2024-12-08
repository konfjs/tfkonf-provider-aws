import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppstreamDirectoryConfigArgsServiceAccountCredentials {
  account_name: string;
  account_password: string;
}

export interface AwsAppstreamDirectoryConfigArgs {
  directory_name: string;
  organizational_unit_distinguished_names: string[];
  service_account_credentials: AwsAppstreamDirectoryConfigArgsServiceAccountCredentials;
}

export class aws_appstream_directory_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAppstreamDirectoryConfigArgs) {
    const meta = {service_account_credentials:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_appstream_directory_config", resourceName);
  }

  get created_time(): string {
    return `${this.resourceType}.${this.resourceName}.created_time`;
  }

  get directory_name(): string {
    return `${this.resourceType}.${this.resourceName}.directory_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get organizational_unit_distinguished_names(): string {
    return `${this.resourceType}.${this.resourceName}.organizational_unit_distinguished_names`;
  }
}
