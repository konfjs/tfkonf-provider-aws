import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLicensemanagerGrantsArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsLicensemanagerGrantsArgs {
  filter?: DataAwsLicensemanagerGrantsArgsFilter[];
}

export class data_aws_licensemanager_grants extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsLicensemanagerGrantsArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_licensemanager_grants", resourceName);
  }

  get arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.arns`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
