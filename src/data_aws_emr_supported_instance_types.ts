import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEmrSupportedInstanceTypesArgsSupportedInstanceTypes {
}

export interface DataAwsEmrSupportedInstanceTypesArgs {
  release_label: string;
  supported_instance_types?: DataAwsEmrSupportedInstanceTypesArgsSupportedInstanceTypes[];
}

export class data_aws_emr_supported_instance_types extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEmrSupportedInstanceTypesArgs) {
    const meta = {supported_instance_types:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_emr_supported_instance_types", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get release_label(): string {
    return `data.${this.resourceType}.${this.resourceName}.release_label`;
  }
}
