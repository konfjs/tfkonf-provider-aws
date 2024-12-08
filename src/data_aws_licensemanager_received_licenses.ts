import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLicensemanagerReceivedLicensesArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsLicensemanagerReceivedLicensesArgs {
  filter?: DataAwsLicensemanagerReceivedLicensesArgsFilter[];
}

export class data_aws_licensemanager_received_licenses extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsLicensemanagerReceivedLicensesArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_licensemanager_received_licenses", resourceName);
  }

  get arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.arns`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
